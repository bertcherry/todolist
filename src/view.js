import { tasksDisplay } from './tasks';
import { editValue, createCloseBtn } from './forms';
import { iconFactory } from './projects';
import { getTasks } from './storage';
import { parseISO, isToday, isTomorrow, isYesterday, isThisWeek, format, isThisYear, isPast} from 'date-fns';
import pencilIcon from './pencil.svg';

let lastTaskView = null;

const sortDateClick = (e) => {
    e.preventDefault();
    sortDate();
}

const sortDate = () => {
    const tasksDate = [...getTasks()];
    tasksDate.sort((a, b) => (a.dueDate > b.dueDate) ? 1 : (a.dueDate === b.dueDate) ? ((a.priority < b.priority) ? 1 : -1) : -1);
    tasksDisplay(tasksDate);
    lastTaskView = 'date';
    
    const getDisplay = () => tasksDate;

    return lastTaskView;
};

const sortPriorityClick = (e) => {
    e.preventDefault();
    sortPriority();
}

const sortPriority = () => {
    const tasksPriority = [...getTasks()];
    tasksPriority.sort((a, b) => (a.priority < b.priority) ? 1 : (a.priority === b.priority) ? ((a.dueDate > b.dueDate) ? 1 : -1) : -1);
    tasksDisplay(tasksPriority);
    lastTaskView = 'priority';
    
    const getDisplay = () => tasksPriority;

    return lastTaskView;
};

const filterFactory = (property, value) => {
    const isValue = (task) => {
            if (`${task[property]}` === `${value}`) {
                return true;
            }
            return false;
    }

    const filterTasksClick = (e) => {
        e.preventDefault();
        filterTasks();
    }
    
    const filterTasks = () => {
        let tasksFiltered = [...getTasks()];
        tasksFiltered = tasksFiltered.filter(isValue);
        tasksDisplay(tasksFiltered);
        lastTaskView = property + '-' + value;

        return lastTaskView;
    }

    return { filterTasksClick, filterTasks, lastTaskView };
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
    const formContainer = document.getElementById('form-container');
    while (formContainer.firstChild) {
        formContainer.removeChild(formContainer.lastChild);
    }
    const detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';
    formContainer.appendChild(detailsDiv);
    for (const property in item) {
        if (`${property}` === 'taskId' || `${property}` === 'projectId') {
            continue;
        }
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
        if (`${property}` === 'priority') {
            if (`${item[property]}` === '3') {
                propertyValue.textContent = 'High';
            } else if (`${item[property]}` === '2') {
                propertyValue.textContent = 'Medium';
            } else if (`${item[property]}` === '1') {
                propertyValue.textContent = 'Low';
            }
        } else if (`${property}` === 'dueDate') {
            const date = parseISO(`${item[property]}`);
            if (isToday(date)) {
                propertyValue.textContent = 'Today';
            } else if (isTomorrow(date)) {
                propertyValue.textContent = 'Tomorrow';
            } else if (isYesterday(date)) {
                propertyValue.textContent = 'Yesterday';
            } else if (isThisWeek(date)) {
                propertyValue.textContent = format(date, 'EEEE');
            } else if (isThisYear(date)) {
                    propertyValue.textContent = format(date, 'MMMM do')
            } else {
                propertyValue.textContent = format(date, 'PP');
            }
        } else {
            propertyValue.textContent = `${item[property]}`;
        }
        detailsDiv.appendChild(propertyDiv);
        propertyDiv.appendChild(propertyName);
        propertyDiv.appendChild(propertyValue);
        propertyDiv.appendChild(iconFactory('edit', pencilIcon, editValue, property));
    }
    detailsDiv.appendChild(createCloseBtn());
}

export { filterFactory, displayDetails, generateTitles, sortDateClick, sortDate, sortPriorityClick, sortPriority, lastTaskView, capitalizeProperty };