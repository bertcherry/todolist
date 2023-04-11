import { tasks, tasksDisplay } from './tasks';
import { editValue } from './forms';
import { iconFactory } from './projects';
import pencilIcon from './pencil.svg';

const sortDate = (e) => {
    e.preventDefault();
    const tasksDate = [...tasks];
    tasksDate.sort((a, b) => (a.dueDate > b.dueDate) ? 1 : (a.dueDate === b.dueDate) ? ((a.priority < b.priority) ? 1 : -1) : -1);
    tasksDisplay(tasksDate);
    
    const getDisplay = () => tasksDate;
};

const sortPriority = (e) => {
    e.preventDefault();
    const tasksPriority = [...tasks];
    tasksPriority.sort((a, b) => (a.priority < b.priority) ? 1 : (a.priority === b.priority) ? ((a.dueDate > b.dueDate) ? 1 : -1) : -1);
    tasksDisplay(tasksPriority);
    
    const getDisplay = () => tasksPriority;
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

export { filterFactory, displayDetails, generateTitles, sortDate, sortPriority };