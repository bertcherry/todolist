import { projects } from './projects';
import { tasks } from './tasks';

const storageAvailable = (type) => {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

let count = 0;
const getCount = () => {
    storeData('count', count);
    console.log(count);
    getData('count', count);
    count++;
    storeData('count', count);
    return count;
}

const storeData = (name, value) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem(name, JSON.stringify(value));
        console.log(localStorage);
      } else {

      }
}

const getData = (name, value) => {
    if (storageAvailable('localStorage')) {
        value = JSON.parse(localStorage.getItem(name));
        return value;
      } else {
        return value;
      }
}

const storeTasks = () => storeData('tasks', tasks);
const storeProjects = () => storeData('projects', projects);
const getTasks = () => getData('tasks', tasks);
const getProjects = () => getData('projects', projects);

export { storeTasks, storeProjects, getTasks, getProjects, getCount };
  