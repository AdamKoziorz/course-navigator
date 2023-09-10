import ToDo from './Todos';
import Link from './Links';

const Course = (name, prof = "", linkArray = [], todoArray = []) => ({
  name,
  prof,
  links: linkArray,
  todos: todoArray,
});



// This courses module will host an array of courses and provide operations for them
const courses = (() => {
  let coursesArray = [];

  const addCourse = (name, prof = "", linkArray = [], todoArray = []) => {
    const newCourse = Course(name, prof, linkArray, todoArray);
    coursesArray.push(newCourse);
  };

  const removeCourse = (name) => {
    coursesArray = coursesArray.filter((course) => (course.name !== name));
  };

  const getCourse = (name) => coursesArray.find((course) => course.name === name);

  const setCourseName = (oldName, newName) => {
    const changedCourse = coursesArray.find((course) => course.name === oldName);
    changedCourse.name = newName;
  }

  const setCourseProf = (name, newProf) => {
    const changedCourse = coursesArray.find((course) => course.name === name);
    changedCourse.prof = newProf;
  }

  const addLinkToCourse = (courseName, linkName, linkUrl) => {
    const course = getCourse(courseName);
    if (course) {
      const newLink = Link(linkName, linkUrl);
      course.links.push(newLink);
    }
  };

  const getLinkFromCourse = (courseName, linkName) => {
    const course = getCourse(courseName);
    return course.links.find((link) => link.name === linkName);
  }

  const removeLinkFromCourse = (courseName, linkName) => {
    const course = getCourse(courseName);
    course.links = course.links.filter((link) => link.name !== linkName);
  };

  const addToDoToCourse = (courseName, todoName, isComplete = false) => {
    const course = getCourse(courseName);
    if (course) {
      const newTodo = ToDo(todoName, isComplete);
      course.todos.push(newTodo);
    }
  };

  const getToDoFromCourse = (courseName, toDo) => {
    const course = getCourse(courseName);
    return course.todos.find((todo) => todo.name === toDo);
  }

  const toggleToDoFromCourse = (courseName, toDo) => {
    const course = getCourse(courseName);
    course.todos.forEach((todoEntry) => {
      if (todoEntry.name === toDo) {
        // eslint-disable-next-line no-param-reassign
        todoEntry.complete = !todoEntry.complete;
      }
    });
  };

  const filterToDoFromCourse = (courseName) => {
    const course = getCourse(courseName);
    course.todos = course.todos.filter((todo) => (todo.complete !== true));
  }

  const getAllCourses = () => coursesArray;

  return {
    addCourse,
    removeCourse,
    getCourse,
    setCourseName,
    setCourseProf,
    addLinkToCourse,
    getLinkFromCourse,
    removeLinkFromCourse,
    addToDoToCourse,
    getToDoFromCourse,
    toggleToDoFromCourse,
    filterToDoFromCourse,
    getAllCourses,
  };
})();

export default courses;
