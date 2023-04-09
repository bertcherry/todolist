import { tasks, tasksDisplay } from './tasks';

//need to figure out how to get the array sorter to read the primary and secondary values passed to it as a factory element
const sortFactory = (primary, secondary) => {
    const sortAscending = (e) => {
        e.preventDefault();
        const tasksSorted = [...tasks];
        tasksSorted.sort((a, b) => (a[primary] > b[primary]) ? 1 : (a[primary] === b[primary]) ? ((a[secondary] > b[secondary]) ? 1 : -1) : -1);
        console.log(tasksSorted);
        tasksDisplay(tasksSorted);
    };

    const sortDescending = (e) => {
        e.preventDefault();
        const tasksSorted = [...tasks];
        tasksSorted.sort((a, b) => (a[primary] < b[primary]) ? 1 : (a[primary] === b[primary]) ? ((a[secondary] > b[secondary]) ? 1 : -1) : -1);
        console.log(tasksSorted);
        tasksDisplay(tasksSorted);
    };

    return { sortAscending, sortDescending };
};

const dateView = sortFactory('dueDate', 'title');
const priorityView = sortFactory('priority', 'dueDate');

export { dateView, priorityView };