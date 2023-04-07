const projects = [{name: 'General', description: 'Default project'}]
const projectForm = document.getElementById('project-form')

const projectFactory = () => {
    projects.push({
        name: projectForm.name.value,
        description: projectForm.description.value
    });
    return { name, description };
}

