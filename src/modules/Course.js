import toDoList from './Todos';
import links from './Links';

// "Course" is a factory function that represents a course (name, prof, links, todos)
const Course = (name) => {
    const courseName = name;
    const courseProf = null;
    const courseLinks = links;
    const courseToDos = toDoList;

    return {
        courseName, courseProf, courseLinks, courseToDos
    }
}



// Courses is a module that provides operations on an array of "Course"
const courses = (() =>  {
    // Array of "Course"
    let coursesArray = [];

    // Add a course to array with only name
    const addCourse = (name) => {
        const newCourse = Course(name);
        coursesArray.push(newCourse);
    }

    // Add a course to array with all information
    const addCourseFull = (nameP, profP, linksP, todosP) => {
        const newCourse = Course(nameP);
        newCourse.courseProf = profP;
        newCourse.courseLinks = linksP;
        newCourse.courseToDos = todosP;
        coursesArray.push(newCourse);
    }

    // Remove a course to array
    const removeCourse = (name) => {
        coursesArray = coursesArray.filter((course) => (course.courseName !== name));
        return coursesArray;
    }

    // Single getter used to update course information (see "Course")
    const getCourse = (name) => coursesArray.find((course) => (course.courseName === name));

    // Gets all courses which will be useful for storage
    const getAllCourses = () => coursesArray

    // Check if course of name exists
    const isUnique = (name) => coursesArray.find((course) => (course.courseName === name)) === undefined;

    return {
        addCourse, addCourseFull, removeCourse, getCourse, getAllCourses, isUnique, coursesArray
    }
})();

export default courses;
