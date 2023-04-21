import { detailsFactory, tasksDisplay } from "./tasks";
import { editProject, iconFactory, projects, projectsView, projectsDisplay } from "./projects";
import saveIcon from './save.svg';
import { displayDetails, sortDate, sortPriority, lastTaskView, filterFactory, capitalizeProperty } from "./view";
import { getProjects, storeData, getTasks } from "./storage";

const formDisplay = (formId) => {
    const formContainer = document.getElementById(formId).parentElement;
    
    const showForm = (e) => {
        let btnId = e.currentTarget.id.toString();
        if (btnId == undefined) {

        } else if (btnId.slice(0,4) == 'task') {
            detailsFactory(btnId);
        } else if (btnId.slice(0, -3) !== 'btn') {
            editProject(btnId);
        }
        formContainer.style.display = 'block';
        formContainer.addEventListener('click', hideForm);
    }

    function hideForm(e) {
        if (e.target === formContainer) {
            formContainer.style.display = 'none'; 
        }
    }

    return { showForm };
}

const editText = (key, value, text) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', key);
    input.id = key;
    input.setAttribute('placeholder', text);
    value.appendChild(input);
}

const editTextArea = (key, value, text) => {
    const input = document.createElement('textarea');
    input.setAttribute('cols', '30');
    input.setAttribute('rows', '10');
    input.id = key;
    input.setAttribute('placeholder', text);
    value.appendChild(input);
}

const editSelector = (key, value, text) => {
    const input = document.createElement('select');
    input.setAttribute('name', key);
    input.id = key;
    value.appendChild(input);
    projectsDisplay('#edit-project', 'option');
    const selected = document.querySelector(`#edit-project
        [value='${text}']`);
    selected.setAttribute('selected', '');
}

const editRadio = (key, value, text) => {
    const fieldset = document.createElement('fieldset');
    fieldset.appendChild(radioInput(key, 'high', 3));
    fieldset.appendChild(radioInput(key, 'medium', 2));
    fieldset.appendChild(radioInput(key, 'low', 1));
    value.appendChild(fieldset);
    //need to fix saveValue for the radio selection?
}

const radioInput = (group, option, rank) => {
    const radioDiv = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', group);
    input.id = option;
    input.setAttribute('value', rank);
    const label = document.createElement('label');
    label.setAttribute('for', option);
    label.textContent =capitalizeProperty(option);
    radioDiv.appendChild(input);
    radioDiv.appendChild(label);
    return radioDiv;
}

//add a date picker input for dueDate edit

const editValue = (e) => {
    const value = e.currentTarget.previousSibling;
    const text = value.textContent;
    const key = 'edit-' + e.currentTarget.id;
    value.textContent = '';
    value.parentElement.removeChild(value.parentElement.lastChild);
    if (key == 'edit-description') {
        editTextArea(key, value, text);
    } else if (key == 'edit-project') {
        editSelector(key, value, text);
    } else if (key == 'edit-priority') {
        editRadio(key, value, text);
    } else {
        editText(key, value, text);
    }
    value.parentElement.appendChild(iconFactory('save', saveIcon, saveValue, key));
}

const refreshTasks = () => {
    if (lastTaskView == null) {
        tasksDisplay(getTasks());
    } else if (lastTaskView == 'date') {
        sortDate();
    } else if (lastTaskView == 'priority') {
        sortPriority();
    } else if (lastTaskView.slice(0,7) == 'project') {
        filterFactory('projectId', lastTaskView.slice(8));
    } else {
        tasksDisplay(getTasks());
    }
}

const saveValue = (e) => {
    let property = e.currentTarget.id.slice(5);
    let array = e.currentTarget.parentElement.getAttribute('class');
    const projects = getProjects();
    const tasks = getTasks();
    if (array == 'projects') {
        array = projects;
    } else if (array == 'tasks') {
        array = tasks;
    }
    const index = e.currentTarget.parentElement.id;
    let value;
    if (property == 'priority') {
        //need to log what this value is correctly
    } else {
        value = e.currentTarget.previousSibling.firstChild.value;
    }
    if (property == 'name') {
        array[index].name = value;
        for (const task of tasks) {
            if (task.projectId == array[index].projectId) {
                task.project = array[index].name;
            }
        }
    } else if (property == 'title') {
        array[index].title = value;
    } else if (property == 'description') {
        array[index].description = value;
    } else if (property == 'project') {
        array[index].project = value;
        array[index].projectId = projects[projects.map(i => i.name).indexOf(`${value}`)].projectId;
    } else if (property == 'priority') {
        array[index].priority = value;
    } else if (property == 'dueDate') {
        array[index].dueDate = value;
    }
    if (array == projects) {
        storeData('projects', projects);
        projectsView();
    }
    storeData('tasks', tasks);
    refreshTasks();
    displayDetails(index, array);
}

const showTasks = formDisplay('task-form');
const showProjects = formDisplay('project-form');
const showDetails = formDisplay('details');

export { showTasks, showProjects, showDetails, editValue, refreshTasks };