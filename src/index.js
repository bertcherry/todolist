import './style.css';
import { projectsBuilder, projectsView } from './projects';
import { tasksBuilder } from './tasks';

const projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', projectsBuilder);

//const taskForm = document.getElementById('task-form');
//taskForm.addEventListener('submit', tasksBuilder);

projectsView();