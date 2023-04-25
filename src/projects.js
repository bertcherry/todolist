import { displayDetails, filterFactory } from "./view";
import { showDetails, showProjects } from "./forms";
import pencilIcon from './pencil.svg';
import deleteIcon from './delete.svg';
import { storeData, getProjects, getCount } from "./storage";

const projectFactory = () => {
    const projectForm = document.getElementById('projects-form');
    const newProject = {
        name: projectForm.name.value,
        description: projectForm.description.value,
        projectId: getCount().toString()
    };
    projectForm.reset();
    return newProject;
}

const projectsDisplay = (listName, type) => {
    const projectList = document.querySelector(listName);
    while (projectList.firstChild) {
        projectList.removeChild(projectList.lastChild);
    }
    for (const project of getProjects()) {
        const projectItem = document.createElement(type);
        if (type === 'option') {
            projectItem.value = project.name;
            projectItem.textContent = project.name;
        }
        if (type === 'li') {
            const projectDiv = document.createElement('div');
            projectDiv.id = project.name;
            const projectLink = document.createElement('a');
            projectLink.setAttribute('href', '');
            projectLink.id = project.name;
            projectLink.textContent = project.name;
            projectDiv.appendChild(projectLink);
            projectLink.addEventListener('click', filterFactory('projectId', project.projectId).filterTasksClick);
            projectDiv.appendChild(iconFactory('edit', pencilIcon, showDetails.showForm, project));
            projectDiv.appendChild(iconFactory('delete', deleteIcon, deleteProject, project));
            projectItem.appendChild(projectDiv);
        }
        projectList.appendChild(projectItem);
    }
}

const iconFactory = (type, reference, action, focus) => {
    const btn = document.createElement('button');
    btn.classList.add(type + '-btn');
    if (type === 'check') {
        btn.setAttribute('aria-label', 'complete task');
    } else {
        btn.setAttribute('aria-label', type);
    }
    const img = document.createElement('img');
    img.src = reference;
    btn.appendChild(img);
    if (typeof focus == 'object') {
        btn.id = focus.name;
        img.id = focus.name;
        const projects = getProjects();
        if (projects.length == 1 && projects.indexOf(focus) == 0 && type == 'delete' && focus.dueDate == undefined) {
            btn.disabled = true;
        }
    } else {
        btn.id = focus;
        img.id = focus;
    }
    btn.addEventListener('click', action);
    return btn;
}

const deleteProject = (e) => {
    const projectId = e.target.id;
    const projects = getProjects();
    const index = projects.map(i => i.name).indexOf(`${projectId}`);
    if (index > -1) {
        projects.splice(index, 1);
    }
    storeData('projects', projects);
    projectsView();
}

const editProject = (btnId) => {
    const index = getProjects().map(i => i.name).indexOf(`${btnId}`);
    displayDetails(index, getProjects());
}

const projectsView = () => {
    projectsDisplay('.project-list', 'li');
}

const projectsBuilder = (e) => {
    e.preventDefault();
    console.log('project accessed');
    const projects = getProjects();
    projects.push(projectFactory());
    storeData('projects', projects);
    showProjects.resetForm();
    projectsView();
}

export { projectsBuilder, projectsView, editProject, iconFactory, projectsDisplay };