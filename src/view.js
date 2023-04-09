import { tasks, tasksDisplay } from './tasks';

const dateView = (e) => {
    e.preventDefault();
    const tasksDate = [...tasks];
    tasksDate.sort((a, b) => (a.dueDate > b.dueDate) ? 1 : (a.dueDate === b.dueDate) ? ((a.title > b.title) ? 1 : -1) : -1);
    tasksDisplay(tasksDate);
}

export { dateView };