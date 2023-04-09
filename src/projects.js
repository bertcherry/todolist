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

const projectSidebar = () => {
    const projectList = document.querySelector('.project-list');
    while (projectList.firstChild) {
        projectList.removeChild(projectList.lastChild);
    }
    for (project of projects) {
        const projectItem = document.createElement('li');
        projectItem.textContent = project.name;
        projectList.appendChild(projectItem);
    }
}

const projectsBuilder = (e) => {
    e.preventDefault();
    projects.push(projectFactory());
    projectSidebar();
    console.log(projects);
    return { projects };
}

export { projectsBuilder, projectSidebar };