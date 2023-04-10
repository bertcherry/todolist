import { filterFactory } from "./view";

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
            const projectLink = document.createElement('a');
            projectLink.setAttribute('href', '');
            projectLink.id = project.name;
            projectLink.textContent = project.name;
            projectItem.appendChild(projectLink);
            projectLink.addEventListener('click', filterFactory('project', project.name).filterTasks);
        }
        projectList.appendChild(projectItem);
    }
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

export { projectsBuilder, projectsView };