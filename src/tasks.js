const tasks = [];
const taskForm = document.getElementById('task-form');

const taskFactory = () => {
    tasks.push({
        title: taskForm.title.value,
        description: taskForm.description.value,
        dueDate: taskForm.dueDate.value,
        priority: taskForm.priority.value,
        project: taskForm.project.value,
    });
    return { title, description, dueDate, priority, project };
}

