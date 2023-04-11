import { tasks, tasksDisplay } from './tasks';

//need to figure out how to get the array sorter to read the primary and secondary values passed to it as a factory element
const sortFactory = (primary, secondary) => {
    const sortAscending = (e) => {
        e.preventDefault();
        const tasksSorted = [...tasks];
        tasksSorted.sort((a, b) => (a[primary] > b[primary]) ? 1 : (a[primary] === b[primary]) ? ((a[secondary] > b[secondary]) ? 1 : -1) : -1);
        tasksDisplay(tasksSorted);
    };

    const sortDescending = (e) => {
        e.preventDefault();
        const tasksSorted = [...tasks];
        tasksSorted.sort((a, b) => (a[primary] < b[primary]) ? 1 : (a[primary] === b[primary]) ? ((a[secondary] > b[secondary]) ? 1 : -1) : -1);
        tasksDisplay(tasksSorted);
    };

    return { sortAscending, sortDescending };
};

const filterFactory = (property, value) => {
    const isValue = (task) => {
            if (`${task[property]}` === `${value}`) {
                return true;
            }
            return false;
    }
    
    const filterTasks = (e) => {
        e.preventDefault();
        let tasksFiltered = [...tasks];
        tasksFiltered = tasksFiltered.filter(isValue);
        tasksDisplay(tasksFiltered);
    }

    return { filterTasks };
}

const generateTitles = (property, propertyDiv) => {
    if (`${property}` === 'dueDate') {
        propertyDiv.textContent = 'Due Date';
    } else {
        propertyDiv.textContent = capitalizeProperty(property);
    }
}

const capitalizeProperty = (property) => {
    const propertyVar = `${property}`;
    const propertyName = propertyVar.charAt(0).toUpperCase() + propertyVar.slice(1);
    return propertyName;
}

const displayDetails = (index, array) => {
    const item = array.at(index);
    console.log(item);
    const detailsDiv = document.getElementById('details');
        while (detailsDiv.firstChild) {
            detailsDiv.removeChild(detailsDiv.lastChild);
        }
        for (const property in item) {
            const propertyDiv = document.createElement('div');
            const propertyName = document.createElement('div');
            generateTitles(property, propertyDiv);
            const propertyValue = document.createElement('div');
            propertyValue.textContent = `${item[property]}`;
            detailsDiv.appendChild(propertyDiv);
            propertyDiv.appendChild(propertyName);
            propertyDiv.appendChild(propertyValue);
        }
}

const dateView = sortFactory('dueDate', 'title');
const priorityView = sortFactory('priority', 'dueDate');

export { dateView, priorityView, filterFactory, displayDetails, generateTitles };