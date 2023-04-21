import './style.css';
import { projectsView } from './projects';
import { tasksDisplay } from './tasks';
import { showTasks, showProjects } from './forms';
import { sortDate, sortPriority } from './view';
import { getCount, getProjects, getTasks } from './storage';

const projectBtn = document.getElementById('projects-btn');
projectBtn.addEventListener('click', showProjects.showForm);

const taskBtn = document.getElementById('task-btn');
taskBtn.addEventListener('click', showTasks.showForm);

const dateSorter = document.getElementById('date-sort');
dateSorter.addEventListener('click', sortDate);

const prioritySorter = document.getElementById('priority-sort');
prioritySorter.addEventListener('click', sortPriority);

getCount();
getProjects();
tasksDisplay(getTasks());
projectsView();