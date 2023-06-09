import { detailsFactory, tasksDisplay, tasksBuilder } from "./tasks";
import { editProject, iconFactory, projects, projectsView, projectsDisplay, projectsBuilder } from "./projects";
import saveIcon from './save.svg';
import { displayDetails, sortDate, sortPriority, lastTaskView, filterFactory, capitalizeProperty, generateTitles } from "./view";
import { getProjects, storeData, getTasks } from "./storage";
import { format, parseISO } from 'date-fns';

const formDisplay = () => {
    const formContainer = document.getElementById('form-container');
    let closeBtn = document.getElementById('close-btn');
    
    const showForm = (e) => {
        let btnId = e.currentTarget.id.toString();
        if (btnId == undefined) {

        } else if (btnId == 'task-btn') {
            createTaskForm();
        } else if (btnId == 'projects-btn') {
            createProjectsForm();
        } else if (btnId.slice(0,4) == 'task') {
            detailsFactory(btnId);
        } else if (btnId.slice(0, -3) !== 'btn') {
            editProject(btnId);
        }
        formContainer.style.display = 'block';
        formContainer.addEventListener('click', hideForm);
        closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click', hideForm);
    }

    const hideForm = (e) => {
        if (e.target === formContainer || e.target === closeBtn) {
            resetForm();
        }
    }
    
    const resetForm = () => {
        formContainer.style.display = 'none'; 
            console.log('accessed');
            while (formContainer.firstChild) {
                formContainer.removeChild(formContainer.lastChild);
            }
    }

    return { showForm, resetForm };
}

const createTaskForm = () => {
    createForm('task');
    editText('title', 'task', '');
    editTextArea('description', 'task', '');
    editDueDate('dueDate', 'task', '');
    editRadio('priority', 'task', '');
    editSelector('project', 'task', '');
    addSubmit('task', 'Add Task');
    createCloseBtn('task');
    const taskForm = document.getElementById('task-form');
    taskForm.appendChild(createCloseBtn());
    taskForm.addEventListener('submit', tasksBuilder);
}

const createProjectsForm = () => {
    createForm('projects');
    editText('name', 'projects', '');
    editTextArea('description', 'projects', '');
    addSubmit('projects', 'Add Project');
    const projectsForm = document.getElementById('projects-form');
    projectsForm.appendChild(createCloseBtn());
    projectsForm.addEventListener('submit', projectsBuilder);
}

//type can be task or project
const createForm = (type) => {
    const formContainer = document.getElementById('form-container');
    const form = document.createElement('form');
    form.id = `${type}-form`;
    formContainer.appendChild(form);
}

const createCloseBtn = () => {
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-btn';
    closeBtn.textContent = 'X';
    closeBtn.setAttribute('aria-label', 'close');
    return closeBtn;
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
    if (key === 'name') {
        input.setAttribute('maxlength', '12');
    }
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

const editDueDate = (key, type, taskId) => {
    const form = document.getElementById(`${type}-form`);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    const input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.setAttribute('name', key);
    input.id = key;
    inputWrapper.appendChild(requiredLabel(key));
    inputWrapper.appendChild(input);
    form.appendChild(inputWrapper);
    if (taskId !== '') {
        input.setAttribute('value', format(parseISO(getTasks().at(taskId).dueDate), 'yyyy-MM-dd'));
    }
}

const editSelector = (key, type, text) => {
    const form = document.getElementById(`${type}-form`);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    const input = document.createElement('select');
    input.setAttribute('name', key);
    input.id = key;
    inputWrapper.appendChild(optionalLabel(key));
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
    //add if text != '', radio option is pre-selected?
}

const radioInput = (group, option, rank) => {
    const radioDiv = document.createElement('div');
    radioDiv.classList.add('radio-wrapper');
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', group);
    input.id = option;
    input.setAttribute('value', rank);
    const label = document.createElement('label');
    label.setAttribute('for', option);
    label.textContent = capitalizeProperty(option);
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

const editValue = (e) => {
    const value = e.currentTarget.previousSibling;
    const text = value.textContent;
    const key = e.currentTarget.id;
    const parent = e.currentTarget.parentElement;
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
    const form = document.createElement('form');
    form.id = `${key}-form`;
    parent.appendChild(form);
    if (key == 'description') {
        editTextArea(key, key, text);
    } else if (key == 'project') {
        editSelector(key, key, text);
    } else if (key == 'priority') {
        editRadio(key, key, text);
    } else if (key == 'dueDate') {
        editDueDate(key, key, parent.id);
    } else {
        editText(key, key, text);
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
    } else if (lastTaskView.slice(0,9) == 'projectId') {
        filterFactory('projectId', lastTaskView.slice(10)).filterTasks();
    } else {
        tasksDisplay(getTasks());
    }
}

const saveValue = (e) => {
    e.preventDefault();
    let property = e.currentTarget.id;
    let array = e.currentTarget.parentElement.parentElement.getAttribute('class');
    const projects = getProjects();
    const tasks = getTasks();
    if (array == 'projects') {
        array = projects;
    } else if (array == 'tasks') {
        array = tasks;
    }
    const index = e.currentTarget.parentElement.parentElement.id;
    const form = document.getElementById(`${property}-form`);
    let inputValue = document.getElementById(property).value;
    if (property == 'name') {
        array[index].name = inputValue;
        for (const task of tasks) {
            if (task.projectId == array[index].projectId) {
                task.project = array[index].name;
            }
        }
    } else if (property == 'title') {
        array[index].title = inputValue;
    } else if (property == 'description') {
        array[index].description = inputValue;
    } else if (property == 'project') {
        array[index].project = inputValue;
        array[index].projectId = projects[projects.map(i => i.name).indexOf(`${inputValue}`)].projectId;
    } else if (property == 'priority') {
        inputValue = form.priority.value;
        array[index].priority = inputValue;
    } else if (property == 'dueDate') {
        array[index].dueDate = inputValue;
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
const showProjects = formDisplay('projects-form');
const showDetails = formDisplay('details');

export { showTasks, showProjects, showDetails, editValue, refreshTasks, createCloseBtn };