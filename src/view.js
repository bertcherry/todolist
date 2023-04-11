import { tasks, tasksDisplay } from './tasks';
import { editValue } from './forms';
import { iconFactory } from './projects';
import pencilIcon from './pencil.svg';

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

const generateTitles = (property, propertyName) => {
    if (`${property}` === 'dueDate') {
        propertyName.textContent = 'Due Date';
    } else {
        propertyName.textContent = capitalizeProperty(property);
    }
}

const capitalizeProperty = (property) => {
    const propertyVar = `${property}`;
    const propertyName = propertyVar.charAt(0).toUpperCase() + propertyVar.slice(1);
    return propertyName;
}

const displayDetails = (index, array) => {
    const item = array.at(index);
    const detailsDiv = document.getElementById('details');
        while (detailsDiv.firstChild) {
            detailsDiv.removeChild(detailsDiv.lastChild);
        }
        for (const property in item) {
            const propertyDiv = document.createElement('div');
            if (item.dueDate != undefined) {
                propertyDiv.classList.add('tasks');
                propertyDiv.id = index;
            } else {
                propertyDiv.classList.add('projects');
                propertyDiv.id = index;
            }
            const propertyName = document.createElement('div');
            generateTitles(property, propertyName);
            const propertyValue = document.createElement('div');
            propertyValue.textContent = `${item[property]}`;
            detailsDiv.appendChild(propertyDiv);
            propertyDiv.appendChild(propertyName);
            propertyDiv.appendChild(propertyValue);
            propertyDiv.appendChild(iconFactory('edit', pencilIcon, editValue, property));
        }
}

//store and input last display whether filtered tasks or sorted tasks. sort a filitered array?
const dateView = sortFactory('dueDate', 'title');
const priorityView = sortFactory('priority', 'dueDate');

export { dateView, priorityView, filterFactory, displayDetails, generateTitles };