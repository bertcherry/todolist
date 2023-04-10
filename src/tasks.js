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

const tasksDisplay = (tasksView) => {
    const taskList = document.querySelector('.tasks');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    }
    taskList.appendChild(createTaskHeading());
    for (const task of tasksView) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskList.appendChild(taskDiv);
        for (const property in task) {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add(`${property}`);
            if (`${property}` === 'priority') {
                console.log(`${task[property]}`);
                if (`${task[property]}` === '3') {
                    propertyDiv.textContent = 'High';
                    taskDiv.classList.add('priority-high');
                } else if (`${task[property]}` === '2') {
                    propertyDiv.textContent = 'Medium';
                    taskDiv.classList.add('priority-medium');
                } else if (`${task[property]}` === '1') {
                    propertyDiv.textContent = 'Low';
                    taskDiv.classList.add('priority-low');
                }
            } else if (`${property}` === 'description') {
                continue;
            } else {
                propertyDiv.textContent = `${task[property]}`; 
            }
            taskDiv.appendChild(propertyDiv);
        }
        const detailsBtn = document.createElement('button');
        detailsBtn.id = 'task-' + tasks.indexOf(task);
        detailsBtn.textContent = 'Details';
        taskDiv.appendChild(detailsBtn);
    }
}

const createTaskHeading = () => {
    const taskHeading = document.createElement('div');
    taskHeading.classList.add('task-heading');
    for (const property in tasks.at(0)) {
        if (`${property}` === 'description') {
            continue;
        }
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add(`${property}`);
        if (`${property}` === 'dueDate') {
            propertyDiv.textContent = 'Due Date';
        } else {
            const propertyVar = `${property}`;
            const propertyName = propertyVar.charAt(0).toUpperCase() + propertyVar.slice(1);
            propertyDiv.textContent = propertyName;
        }
        taskHeading.appendChild(propertyDiv);
    }
    return taskHeading;
}


const tasksBuilder = (e) => {
    e.preventDefault();
    tasks.push(taskFactory());
    tasksDisplay(tasks);
}

export { tasksBuilder, tasks, tasksDisplay };
