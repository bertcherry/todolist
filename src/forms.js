import { detailsFactory, tasks, tasksDisplay } from "./tasks";
import { editProject, iconFactory, projects, projectsView } from "./projects";
import saveIcon from './save.svg';
import { displayDetails, sortDate, sortPriority, lastTaskView, filterFactory } from "./view";
import { getProjects, storeProjects, getTasks, storeTasks } from "./storage";

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

const editValue = (e) => {
    const value = e.currentTarget.previousSibling;
    let input;
    if (e.currentTarget.id == 'description') {
        input = document.createElement('textarea');
        input.setAttribute('cols', '30');
        input.setAttribute('rows', '10');
    } else {
        input = document.createElement('input');
        input.setAttribute('type', 'text');
    }
    input.setAttribute('name', e.currentTarget.id);
    input.id = e.currentTarget.id;
    input.setAttribute('placeholder', value.textContent);
    value.textContent = '';
    value.appendChild(input);
    value.parentElement.removeChild(value.parentElement.lastChild);
    value.parentElement.appendChild(iconFactory('save', saveIcon, saveValue, input.id));
}

const saveValue = (e) => {
    let property = e.currentTarget.id;
    let array = e.currentTarget.parentElement.getAttribute('class');
    if (array == 'projects') {
        getProjects();
        array = projects;
    } else if (array == 'tasks') {
        getTasks();
        array = tasks;
    }
    const index = e.currentTarget.parentElement.id;
    const value = e.currentTarget.previousSibling.firstChild.value;
    if (property == 'name') {
        array[index].name = value;
    } else if (property == 'title') {
        array[index].title = value;
    } else if (property == 'description') {
        array[index].description = value;
    } else if (property == 'project') {
        array[index].project = value;
    } else if (property == 'priority') {
        array[index].priority = value;
    } else if (property == 'dueDate') {
        array[index].dueDate = value;
    }
    if (array == projects) {
        storeProjects();
        projectsView();
    } else if (array == tasks) {
        storeTasks();
        console.log(lastTaskView);
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
    displayDetails(index, array);
}

const showTasks = formDisplay('task-form');
const showProjects = formDisplay('project-form');
const showDetails = formDisplay('details');

export { showTasks, showProjects, showDetails, editValue };