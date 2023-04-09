const tasks = [];

const taskFactory = () => {
    const taskForm = document.getElementById('task-form');
    const newTask = {
        title: taskForm.title.value,
        description: taskForm.description.value,
        project: taskForm.project.value,
        priority: taskForm.priority.value,
        dueDate: taskForm.dueDate.value,
    };
    taskForm.reset();
    return newTask;
}

const tasksDisplay = () => {
    const taskList = document.querySelector('.tasks');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    }
    for (const task of tasks) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskList.appendChild(taskDiv);
        for (const property in task) {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add(`${property}`);
            propertyDiv.textContent = `${task[property]}`;
            taskDiv.appendChild(propertyDiv);
        }
    }
}

const tasksBuilder = (e) => {
    e.preventDefault();
    tasks.push(taskFactory());
    console.log(tasks);
    tasksDisplay();
}

export { tasksBuilder };
