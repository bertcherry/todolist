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

const projectsBuilder = (e) => {
    e.preventDefault();
    projects.push(projectFactory());
    console.log(projects);
    return { projects };
}

export { projectsBuilder };