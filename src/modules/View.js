import Courses from './Course';
import { getData } from './Storage';

import Menu from '../assets/dots-horizontal.svg';

const addBtn = document.querySelector('.add-btn');
const courseList = document.querySelector('.course-form');

let courseCounter = 1;
const courses = new Courses();

/*
function showMenu(source) {
    const menu = document.createElement('menu');
    const addProfBtn = document.createElement('button');
    const addLinkBtn = document.createElement('button');
    const addToDoBtn = document.createElement('button');
    const changeColourBtn = document.createElement('button');
    const deleteCourseBtn = document.createElement('button');

    menu.appendChild(addProfBtn);
    menu.appendChild(addLinkBtn);
    menu.appendChild(addToDoBtn);
    menu.appendChild(changeColourBtn);
    menu.appendChild(deleteCourseBtn);

    source.parentElement.parentElement.appendChild(menu);
}
*/

function initCourse() {
    const courseBubble = document.createElement('div');
    courseBubble.classList.add("course");

    const courseBubbleHeader = document.createElement('div');
    courseBubbleHeader.classList.add("header");

    const courseBubbleHeaderName = document.createElement('input');
    courseBubbleHeaderName.type = "text";
    courseBubbleHeaderName.name = `course-name-${courseCounter.toString(10)}`;
    courseBubbleHeaderName.id = `course-name-${courseCounter.toString(10)}`;
    courseBubbleHeaderName.placeholder = "Course Name";
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    courseBubble.appendChild(courseBubbleHeader);
    courseList.appendChild(courseBubble);

    function addCourseToModel(name) {
        if (courses.isUniqueCourse(name) && name !== "") {
            courses.addCourse(name);
            return true;
        } 
        return false;
    }

    function addMenuToHeader() {
        const courseBubbleHeaderMenu = document.createElement('button');
        courseBubbleHeaderMenu.type = "button";
        courseBubbleHeaderMenu.classList.add("menu-button");
        courseBubbleHeaderMenu.style.background = `url(${Menu})`
        courseBubbleHeader.appendChild(courseBubbleHeaderMenu);

        // courseBubbleHeaderMenu.addEventListener("click", showMenu(courseBubbleHeaderMenu));
    }

    function switchEditMode() {
        document.activeElement.blur();
    }
    
    function processName(name) {
        if (addCourseToModel(name)) {
            addMenuToHeader();

            switchEditMode();
        } else {
            courseList.removeChild(courseBubble);
        }
    }

    courseBubbleHeaderName.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { document.activeElement.blur(); }
    });
    courseBubbleHeaderName.addEventListener("blur", () => {
        processName(courseBubbleHeaderName.value) 
    });

    document.getElementById(`course-name-${courseCounter.toString(10)}`).focus();
    courseCounter += 1;
}



courseList.addEventListener("submit", (e) => {e.preventDefault()})



addBtn.addEventListener("click", () => {
    initCourse();
})




function generateCourseBubble(course) {

    // Course Container
    const courseBubble = document.createElement('div');
    courseBubble.classList.add("course");

    // |- Header Container
    const courseBubbleHeader = document.createElement('div');
    courseBubbleHeader.classList.add("header");

    //    |- Name
    const courseBubbleHeaderName = document.createElement('input');
    courseBubbleHeaderName.value = course.name;
    courseBubbleHeaderName.type = "text";
    courseBubbleHeaderName.name = `course-name-${courseCounter.toString(10)}`;
    courseBubbleHeaderName.id = `course-name-${courseCounter.toString(10)}`;
    courseBubbleHeaderName.placeholder = "Course Name";
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    //    |- Menu

    // Piece Together
    courseBubble.appendChild(courseBubbleHeader);
    courseList.appendChild(courseBubble);
}


function loadCourses() {
    const courseArray = getData();
    courseArray.forEach((course) => {
        courses.addCourse(course.name, course.prof, course.links, course.todos);
        generateCourseBubble(courses.getCourse(course.name));
    });
}









export default loadCourses;
