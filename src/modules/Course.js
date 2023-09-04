import ToDoList from './Todos';
import Links from './Links';
import { saveData } from './Storage'

function Course(name, prof = null, links = new Links(), todos = new ToDoList()) {
    this.name = name;
    this.prof = prof;
    this.links = links;
    this.todos = todos;

    this.getName = () => this.name
    this.getProf = () => this.prof
    this.getLinks = () => this.links
    this.getToDos = () => this.todos

    this.setName = (newName) => {
        this.name = newName;
    }

    this.setProf = (newProf) => {
        this.prof = newProf;
    }
}

function Courses() {
    let courses = [];

    this.addCourse = (name, prof, links, todos) => {
        const newCourse = new Course(name, prof, links, todos);
        courses.push(newCourse);
        saveData(JSON.stringify(courses));
    }

    this.removeCourse = (name) => {
        courses = courses.filter((course) => (course.name !== name));
    }

    this.getCourse = (name) => courses.find((course) => (course.name === name));

    this.isUniqueCourse = (name) => courses.find((course) => (course.name === name)) === undefined;
}

export default Courses;