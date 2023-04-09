import './style.css';
import { projectsBuilder, projectSidebar } from './projects';

const projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', projectsBuilder);

projectSidebar();