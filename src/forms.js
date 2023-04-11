import { detailsFactory } from "./tasks";

const formDisplay = (formId) => {
    const formContainer = document.getElementById(formId).parentElement;
    
    const showForm = (e) => {
        let btnId = e.target.id.toString();
        if (btnId == undefined) {

        } else if (btnId.slice(0,4) == 'task') {
            detailsFactory(btnId);
        }
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