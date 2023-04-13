import { refreshTasks, showDetails } from "./forms";
import { displayDetails, generateTitles } from "./view";
import { getProjects, getCount, getTasks, storeTasks } from "./storage";
import { iconFactory } from "./projects";
import checkboxIcon from './checkbox.svg';

const tasks = [];

const taskFactory = () => {
    const taskForm = document.getElementById('task-form');
    const newTask = {
        title: taskForm.title.value,
        description: taskForm.description.value,
        project: taskForm.project.value,
        projectId: getProjects().at(getProjects().map(i => i.name).indexOf(taskForm.project.value)).projectId,
        priority: taskForm.priority.value,
        dueDate: taskForm.dueDate.value,
        taskId: getCount().toString()
    };
    taskForm.reset();
    return newTask;
}

const tasksDisplay = (tasksView) => {
    const taskList = document.querySelector('.tasks');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    }
    taskList.appendChild(createTaskHeading());
    for (const task of tasksView) {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        taskContainer.appendChild(iconFactory('check', checkboxIcon, deleteTask, task.taskId));
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskContainer.appendChild(taskDiv);
        taskList.appendChild(taskContainer);
        for (const property in task) {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add(`${property}`);
            if (`${property}` === 'priority') {
                if (`${task[property]}` === '3') {
                    propertyDiv.textContent = 'High';
                    taskDiv.classList.add('priority-high');
                } else if (`${task[property]}` === '2') {
                    propertyDiv.textContent = 'Medium';
                    taskDiv.classList.add('priority-medium');
                } else if (`${task[property]}` === '1') {
                    propertyDiv.textContent = 'Low';
                    taskDiv.classList.add('priority-low');
                }
            } else if (`${property}` === 'description' || `${property}` === 'taskId' || `${property}` === 'projectId') {
                continue;
            } else {
                propertyDiv.textContent = `${task[property]}`; 
            }
            taskDiv.appendChild(propertyDiv);
        }
        const detailsBtn = document.createElement('button');
        detailsBtn.classList.add('details-btn');
        detailsBtn.id = 'task-' + task.taskId;
        detailsBtn.addEventListener('click', showDetails.showForm);
        detailsBtn.textContent = 'Details';
        taskDiv.appendChild(detailsBtn);
    }
}

const createTaskHeading = () => {
    const taskHeading = document.createElement('div');
    taskHeading.classList.add('task-heading');
    for (const property in getTasks().at(0)) {
        if (`${property}` === 'description' || `${property}` === 'taskId' || `${property}` === 'projectId') {
            continue;
        }
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add(`${property}`);
        generateTitles(property, propertyDiv);
        taskHeading.appendChild(propertyDiv);
    }
    return taskHeading;
}

const deleteTask = (e) => {
    const task = e.currentTarget.id;
    const index = getTasks().map(i => i.taskId).indexOf(`${task}`);
    console.log(index);
    if (index > -1) {
        getTasks().splice(index, 1);
    }
    refreshTasks();
}

const tasksBuilder = (e) => {
    e.preventDefault();
    tasks.push(taskFactory());
    storeTasks();
    tasksDisplay(getTasks());
}

const detailsFactory = (btnId) => {
    const taskNum = btnId.slice(5);
    const index = getTasks().map(i => i.taskId).indexOf(`${taskNum}`);
    displayDetails(index, getTasks());
}

export { tasksBuilder, tasks, tasksDisplay, detailsFactory, deleteTask };
