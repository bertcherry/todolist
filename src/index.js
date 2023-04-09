import './style.css';
import { projectsBuilder, projectsView } from './projects';
import { tasksBuilder } from './tasks';
import { showTasks, showProjects } from './forms';

const projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', projectsBuilder);

const projectBtn = document.getElementById('project-btn');
projectBtn.addEventListener('click', showProjects.showForm);

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', tasksBuilder);

const taskBtn = document.getElementById('task-btn');
taskBtn.addEventListener('click', showTasks.showForm);

projectsView();