import { displayDetails, filterFactory } from "./view";
import { showDetails } from "./forms";
import pencilIcon from './pencil.svg';
import deleteIcon from './delete.svg';
import { storeProjects, getProjects, getCount } from "./storage";

const projects = [{name: 'General', description: 'Default project', projectId: '1'}];

const projectFactory = () => {
    const projectForm = document.getElementById('project-form');
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
            //filter using projectId instead of name
            projectLink.addEventListener('click', filterFactory('projectId', project.projectId).filterTasks);
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
    btn.setAttribute('aria-label', type);
    const img = document.createElement('img');
    img.src = reference;
    btn.appendChild(img);
    if (typeof focus == 'object') {
        btn.id = focus.name;
        img.id = focus.name;
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
    const index = projects.map(i => i.name).indexOf(`${projectId}`);
    if (index > -1) {
        projects.splice(index, 1);
    }
    storeProjects();
    projectsView();
}

const editProject = (btnId) => {
    const index = getProjects().map(i => i.name).indexOf(`${btnId}`);
    displayDetails(index, getProjects());
}

const projectsView = () => {
    projectsDisplay('.project-list', 'li');
    projectsDisplay('#project', 'option');
}

const projectsBuilder = (e) => {
    e.preventDefault();
    projects.push(projectFactory());
    storeProjects();
    projectsView();
}

export { projectsBuilder, projectsView, editProject, iconFactory, projects };