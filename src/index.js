import './style.css';
import { projectsView } from './projects';
import { tasksDisplay } from './tasks';
import { showTasks, showProjects } from './forms';
import { sortDateClick, sortPriorityClick } from './view';
import { getCount, getProjects, getTasks } from './storage';

const projectBtn = document.getElementById('projects-btn');
projectBtn.addEventListener('click', showProjects.showForm);

const taskBtn = document.getElementById('task-btn');
taskBtn.addEventListener('click', showTasks.showForm);

const dateSorter = document.getElementById('date-sort');
dateSorter.addEventListener('click', sortDateClick);

const prioritySorter = document.getElementById('priority-sort');
prioritySorter.addEventListener('click', sortPriorityClick);

getProjects();
tasksDisplay(getTasks());
projectsView();