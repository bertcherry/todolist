import './style.css';
import { projectsBuilder } from './projects';

const projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', projectsBuilder);