import { detailsFactory, tasksDisplay, tasksBuilder } from "./tasks";
import { editProject, iconFactory, projects, projectsView, projectsDisplay } from "./projects";
import saveIcon from './save.svg';
import { displayDetails, sortDate, sortPriority, lastTaskView, filterFactory, capitalizeProperty, generateTitles } from "./view";
import { getProjects, storeData, getTasks } from "./storage";

const formDisplay = () => {
    const formContainer = document.getElementById('form-container');
    
    const showForm = (e) => {
        let btnId = e.currentTarget.id.toString();
        if (btnId == undefined) {

        } else if (btnId == 'task-btn') {
            createTaskForm();
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
            while (formContainer.children[1]) {
                formContainer.removeChild(formContainer.lastChild);
            }
        }
    }

    return { showForm };
}

const createTaskForm = () => {
    createForm('task');
    editText('title', 'task', '');
    editTextArea('description', 'task', '');
    //change this to a date picker once package is linked
    editText('dueDate', 'task', '');
    editRadio('priority', 'task', '');
    editSelector('project', 'task', '');
    addSubmit('task', 'Add Task');
    const taskForm = document.getElementById('task-form');
    taskForm.addEventListener('submit', tasksBuilder);
}

//type can be task or project
const createForm = (type) => {
    const formContainer = document.getElementById('form-container');
    const form = document.createElement('form');
    form.id = `${type}-form`;
    formContainer.appendChild(form);
}

const requiredLabel = (key) => {
    const label = document.createElement('label');
    label.setAttribute('for', key);
    generateTitles(key, label);
    const required = document.createElement('span');
    required.textContent = '*';
    required.setAttribute('aria-label', 'required');
    label.appendChild(required);
    return label;
}

const optionalLabel = (key) => {
    const label = document.createElement('label');
    label.setAttribute('for', key);
    generateTitles(key, label);
    return label;
}

//include titles and labels in each of these
const editText = (key, type, text) => {
    const form = document.getElementById(`${type}-form`);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', key);
    input.id = key;
    input.setAttribute('placeholder', text);
    if (key === 'name' || key === 'title') {
        input.setAttribute('required', '');
        inputWrapper.appendChild(requiredLabel(key));
    } else {
        inputWrapper.appendChild(optionalLabel(key));
    }
    inputWrapper.appendChild(input);
    form.appendChild(inputWrapper);
}


const editTextArea = (key, type, text) => {
    const form = document.getElementById(`${type}-form`);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    const input = document.createElement('textarea');
    input.setAttribute('cols', '30');
    input.setAttribute('rows', '10');
    input.id = key;
    input.setAttribute('placeholder', text);
    inputWrapper.appendChild(optionalLabel(key));
    inputWrapper.appendChild(input);
    form.appendChild(inputWrapper);
}

//add edit DueDate

const editSelector = (key, type, text) => {
    const form = document.getElementById(`${type}-form`);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    const input = document.createElement('select');
    input.setAttribute('name', key);
    input.id = key;
    input.setAttribute('required', '');
    inputWrapper.appendChild(requiredLabel(key));
    inputWrapper.appendChild(input);
    form.appendChild(inputWrapper);
    projectsDisplay('#project', 'option');
    if (text !== '') {
        const selected = document.querySelector(`#project
            [value='${text}']`);
        selected.setAttribute('selected', '');
    }
}

const editRadio = (key, type, text) => {
    const form = document.getElementById(`${type}-form`);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    generateTitles(key, legend);
    fieldset.appendChild(legend);
    fieldset.appendChild(radioInput(key, 'high', 3));
    fieldset.appendChild(radioInput(key, 'medium', 2));
    fieldset.appendChild(radioInput(key, 'low', 1));
    inputWrapper.appendChild(fieldset);
    form.appendChild(inputWrapper);
    //need to fix saveValue for the radio selection? -- has to come from a form
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

const addSubmit = (type, text) => {
    const form = document.getElementById(`${type}-form`);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = text;
    inputWrapper.appendChild(submitBtn);
    form.appendChild(inputWrapper);
}

//add a date picker input for dueDate edit

const editValue = (e) => {
    const value = e.currentTarget.previousSibling;
    const text = value.textContent;
    const key = e.currentTarget.id;
    value.textContent = '';
    value.parentElement.removeChild(value.parentElement.lastChild);
    const form = document.getElementById(`${type}-form`);
    value.parentElement.appendChild(form);
    //insert a form in here to append the edit values to, currently passed as "value"
    if (key == 'description') {
        editTextArea(key, form, text);
    } else if (key == 'project') {
        editSelector(key, form, text);
    } else if (key == 'priority') {
        editRadio(key, form, text);
    } else {
        editText(key, form, text);
    }
    form.appendChild(iconFactory('save', saveIcon, saveValue, key));
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