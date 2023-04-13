import './style.css';
import { projectsBuilder, projectsView } from './projects';
import { tasksBuilder, tasksDisplay } from './tasks';
import { showTasks, showProjects } from './forms';
import { sortDate, sortPriority } from './view';
import { getCount, getProjects, getTasks } from './storage';

const projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', projectsBuilder);

const projectBtn = document.getElementById('project-btn');
projectBtn.addEventListener('click', showProjects.showForm);

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', tasksBuilder);

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