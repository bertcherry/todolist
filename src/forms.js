const formDisplay = (formId) => {
    const formContainer = document.querySelector('.' + formId);
    
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

export { showTasks, showProjects };