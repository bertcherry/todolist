const tasks = [];

const taskFactory = () => {
    const taskForm = document.getElementById('task-form');
    const newTask = {
        title: taskForm.title.value,
        description: taskForm.description.value,
        dueDate: taskForm.dueDate.value,
        priority: taskForm.priority.value,
        project: taskForm.project.value,
    };
    taskForm.reset();
    return newTask;
}

const tasksBuilder = (e) => {
    e.preventDefault();
    tasks.push(taskFactory());
}

export { tasksBuilder };
