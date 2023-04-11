import { displayDetails, filterFactory } from "./view";
import { showDetails } from "./forms";
import pencilIcon from './pencil.svg';
import deleteIcon from './delete.svg';

const projects = [{name: 'General', description: 'Default project'}]

const projectFactory = () => {
    const projectForm = document.getElementById('project-form');
    const newProject = {
        name: projectForm.name.value,
        description: projectForm.description.value
    };
    projectForm.reset();
    return newProject;
}

const projectsDisplay = (listName, type) => {
    const projectList = document.querySelector(listName);
    while (projectList.firstChild) {
        projectList.removeChild(projectList.lastChild);
    }
    for (const project of projects) {
        const projectItem = document.createElement(type);
        if (type === 'option') {
            projectItem.value = project.name;
            projectItem.textContent = project.name;
        }
        if (type === 'li') {
            const projectDiv = document.createElement('div');
            const projectLink = document.createElement('a');
            projectLink.setAttribute('href', '');
            projectLink.id = project.name;
            projectLink.textContent = project.name;
            projectDiv.appendChild(projectLink);
            projectLink.addEventListener('click', filterFactory('project', project.name).filterTasks);
            projectDiv.appendChild(iconFactory('edit', pencilIcon, showDetails.showForm, project));
            projectDiv.appendChild(iconFactory('delete', deleteIcon, deleteProject, project));
            projectItem.appendChild(projectDiv);
        }
        projectList.appendChild(projectItem);
    }
}

const iconFactory = (type, reference, action, project) => {
    const btn = document.createElement('button');
    btn.classList.add(type + '-btn');
    btn.setAttribute('aria-label', type);
    btn.id = project.name;
    const img = document.createElement('img');
    img.src = reference;
    img.id = project.name;
    btn.appendChild(img);
    if (projects.length == 1 && projects.indexOf(project) == 0 && type == 'delete') {
        btn.disabled = true;
    }
    btn.addEventListener('click', action);
    return btn;
}

const deleteProject = (e) => {
    const projectId = e.target.id;
    const index = projects.map(i => i.name).indexOf(`${projectId}`);
    if (index > -1) {
        projects.splice(index, 1);
    }
    projectsView();
}

const editProject = (btnId) => {
    const index = projects.map(i => i.name).indexOf(`${btnId}`);
    displayDetails(index, projects);
}

const projectsView = () => {
    projectsDisplay('.project-list', 'li');
    projectsDisplay('#project', 'option');
}

const projectsBuilder = (e) => {
    e.preventDefault();
    projects.push(projectFactory());
    projectsView();
}

export { projectsBuilder, projectsView, editProject };