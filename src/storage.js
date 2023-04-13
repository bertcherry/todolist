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

const getData = (name) => {
    if (storageAvailable('localStorage')) {
        let value = JSON.parse(localStorage.getItem(name));
        if (name == 'tasks' && value == undefined) {
            tasks = [];
            storeTasks();
        } else if (name == 'projects' && value == undefined) {
            projects = [{name: 'General', description: 'Default project', projectId: '1'}];
            console.log(projects);
            storeProjects();
        } 
        return value;
      } else {
        let value;
        if (name == 'tasks') {
            value = [];
        } else if (name == 'projects' && value == undefined) {
            value = [{name: 'General', description: 'Default project', projectId: '1'}];
        }
        return value;
      }
}

const storeTasks = () => storeData('tasks', tasks);
const storeProjects = () => storeData('projects', projects);
const getTasks = () => getData('tasks');
const getProjects = () => getData('projects');

export { storeTasks, storeProjects, getTasks, getProjects, getCount, storeData};
  