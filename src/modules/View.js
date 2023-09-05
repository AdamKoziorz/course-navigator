import courses from './Course';
import storage from './Storage';

import DeleteIcon from '../assets/trash-can-outline.svg';

const addBtn = document.querySelector('.add-btn');
const courseList = document.querySelector('.course-form');



// *****************************
// Generating the Initial Bubble
// ******************************

function initCourse() {
    const courseBubble = document.createElement('div');
    courseBubble.classList.add("course");

    const courseBubbleHeader = document.createElement('div');
    courseBubbleHeader.classList.add("header");

    const courseBubbleHeaderName = document.createElement('input');
    courseBubbleHeaderName.type = "text";
    courseBubbleHeaderName.placeholder = "Course Name";
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    courseBubble.appendChild(courseBubbleHeader);
    courseList.appendChild(courseBubble);

    function processName(name) {
        if (courses.isUnique(name) && name !== "") {
            courses.addCourse(name);
            storage.saveData(courses.coursesArray);
            courseList.removeChild(courseBubbleHeader.parentElement);
            // eslint-disable-next-line no-use-before-define
            generateCourseBubble(courses.getCourse(name));
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

    courseBubbleHeaderName.focus();
}

addBtn.addEventListener("click", () => {
    initCourse();
})





// **************************
// Generating the Full Bubble
// **************************

function generateHeader(course) {
    const courseBubbleHeader = document.createElement('div');
    courseBubbleHeader.classList.add("header");

    const courseBubbleHeaderName = document.createElement('input');
    courseBubbleHeaderName.value = course.courseName;
    courseBubbleHeaderName.type = "text";
    courseBubbleHeaderName.placeholder = "Course Name";
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    courseBubbleHeaderName.addEventListener("change", () => {
        courses.editCourseName(course.courseName, courseBubbleHeaderName.value);
        storage.saveData(courses.coursesArray);
        document.activeElement.blur();
    });

    courseBubbleHeaderName.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { document.activeElement.blur(); }
    });

    const courseBubbleHeaderMenu = document.createElement('button');
    courseBubbleHeaderMenu.type = "button";
    courseBubbleHeaderMenu.classList.add("delete");
    courseBubbleHeaderMenu.style.background = `url(${DeleteIcon})`

    courseBubbleHeaderMenu.addEventListener("click", () => {
        // Hack - why should removeCourse return anything?
        const newCourses = courses.removeCourse(course.courseName);
        storage.saveData(newCourses);
        courseList.removeChild(courseBubbleHeader.parentElement);
    })

    courseBubbleHeader.appendChild(courseBubbleHeaderMenu);

    return courseBubbleHeader;
}


function generateProf(course) {
    const courseBubbleProf = document.createElement('input');

    courseBubbleProf.value = course.courseProf;
    courseBubbleProf.type = "text";
    courseBubbleProf.placeholder = "Course Prof";
    courseBubbleProf.classList.add("course-input-prof");

    courseBubbleProf.addEventListener("change", () => {
        courses.getCourse(course.courseName).courseProf = courseBubbleProf.value;
        storage.saveData(courses.coursesArray);
        document.activeElement.blur();
    });

    courseBubbleProf.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { document.activeElement.blur(); }
    });

    return courseBubbleProf;
}


function generateLinks(course) {
    const courseBubbleLinks = document.createElement('div');
    courseBubbleLinks.classList.add("links");

    const courseBubbleLinksHeader = document.createElement('div');
    courseBubbleLinksHeader.classList.add("link-header");

    const courseBubbleLinksHeaderText = document.createElement('h3');
    courseBubbleLinksHeaderText.innerText = "Links";

    const courseBubbleLinksHeaderButton = document.createElement('button');
    courseBubbleLinksHeaderButton.type = "button";
    courseBubbleLinksHeaderButton.innerText = "+";

    courseBubbleLinksHeader.appendChild(courseBubbleLinksHeaderText);
    courseBubbleLinksHeader.appendChild(courseBubbleLinksHeaderButton);

    const courseBubbleLinksContainer = document.createElement('div');
    courseBubbleLinksContainer.classList.add("link-container");

    courseBubbleLinks.appendChild(courseBubbleLinksHeader);
    courseBubbleLinks.appendChild(courseBubbleLinksContainer);

    return courseBubbleLinks;
}


function generateToDos(course) {
    const courseBubbleToDos = document.createElement('div');
    courseBubbleToDos.classList.add("todos");

    const courseBubbleToDosHeader = document.createElement('div');
    courseBubbleToDosHeader.classList.add("todos-header");

    const courseBubbleToDosHeaderText = document.createElement('h3');
    courseBubbleToDosHeaderText.innerText = "To-Do List";

    const courseBubbleToDosHeaderButton = document.createElement('button');
    courseBubbleToDosHeaderButton.type = "button";
    courseBubbleToDosHeaderButton.innerText = "+";

    courseBubbleToDosHeader.appendChild(courseBubbleToDosHeaderText);
    courseBubbleToDosHeader.appendChild(courseBubbleToDosHeaderButton);

    const courseBubbleToDosContainer = document.createElement('div');
    courseBubbleToDosContainer.classList.add("todos-container");

    courseBubbleToDos.appendChild(courseBubbleToDosHeader);
    courseBubbleToDos.appendChild(courseBubbleToDosContainer);

    /*
    if (toDosArray.length !== 0) {
        toDosArray.forEach((todo) => {
            courseBubbleToDosContainer.appendChild(generateToDo(todo));
        });
    }
    */

    return courseBubbleToDos;
}


    






function generateCourseBubble(course) {

    // Course Container
    const courseBubble = document.createElement('div');
    courseBubble.classList.add("course");

    // Add Header
    courseBubble.appendChild(generateHeader(course));

    // Add Prof
    courseBubble.appendChild(generateProf(course));

    // Add Links
    courseBubble.appendChild(generateLinks(course));

    // Add ToDos
    courseBubble.appendChild(generateToDos(course));

    // Add to Course Bubbles
    courseList.appendChild(courseBubble);
}


function loadCourses() {
    const courseArray = storage.getData();

    if (courseArray !== null) {
        courseArray.forEach((course) => {
            courses.addCourseFull(course.courseName, course.courseProf, course.courseLinks, course.courseToDos);
            generateCourseBubble(courses.getCourse(course.courseName));
        });
    }
}









export default loadCourses;
