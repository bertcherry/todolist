const formDisplay = (formId) => {
    const formContainer = document.getElementById(formId).parentElement;
    
    const showForm = () => {
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

const showTasks = formDisplay('task-form');
const showProjects = formDisplay('project-form');
const showDetails = formDisplay('task-details');

export { showTasks, showProjects, showDetails };