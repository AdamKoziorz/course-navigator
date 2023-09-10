/* eslint-disable no-use-before-define */
import courses from './Course';
import storage from './Storage';
import isValidURL from './Utilities';

import DeleteIcon from '../assets/trash-can-outline.svg';

const addBtn = document.querySelector('.add-btn');
const courseList = document.querySelector('.courses');



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
        if (courses.getCourse(name) === undefined && name !== "") {
            courses.addCourse(name);
            storage.saveData(courses.getAllCourses());
            courseList.removeChild(courseBubbleHeader.parentElement);
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
    courseBubbleHeaderName.value = course.name;
    courseBubbleHeaderName.type = "text";
    courseBubbleHeaderName.placeholder = "Course Name";
    courseBubbleHeaderName.prevvalue = course.name;
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    courseBubbleHeaderName.addEventListener("change", () => {
        if (courses.getCourse(courseBubbleHeaderName.value) === undefined && courseBubbleHeaderName.value !== "") {
            courses.setCourseName(course.name, courseBubbleHeaderName.value);
            storage.saveData(courses.getAllCourses());
            courseBubbleHeaderName.prevvalue = courseBubbleHeaderName.value;
        } else {
            courseBubbleHeaderName.value = courseBubbleHeaderName.prevvalue;
        }
        document.activeElement.blur();
    });

    courseBubbleHeaderName.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { document.activeElement.blur(); }
    });

    const courseBubbleHeaderMenu = document.createElement('div');
    courseBubbleHeaderMenu.classList.add("course-menu-btns");

    const courseBubbleHeaderMenuDelete = document.createElement('button');
    courseBubbleHeaderMenuDelete.type = "button";
    courseBubbleHeaderMenuDelete.classList.add("delete");
    courseBubbleHeaderMenuDelete.style.background = `url(${DeleteIcon})`

    courseBubbleHeaderMenuDelete.addEventListener("click", () => {
        courses.removeCourse(course.name);
        storage.saveData(courses.getAllCourses());
        courseList.removeChild(courseBubbleHeader.parentElement);
    })

    courseBubbleHeaderMenu.appendChild(courseBubbleHeaderMenuDelete);
    courseBubbleHeader.appendChild(courseBubbleHeaderMenu);


    return courseBubbleHeader;
}


function generateProf(course) {
    const courseBubbleProf = document.createElement('input');

    courseBubbleProf.value = course.prof;
    courseBubbleProf.type = "text";
    courseBubbleProf.placeholder = "Course Prof";
    courseBubbleProf.classList.add("course-input-prof");

    courseBubbleProf.addEventListener("change", () => {
        courses.setCourseProf(course.name, courseBubbleProf.value);
        storage.saveData(courses.getAllCourses());
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


    // Link Title and Add Button
    const courseBubbleLinksHeaderLeft = document.createElement('div');
    courseBubbleLinksHeaderLeft.classList.add("link-header-left");

    const courseBubbleLinksHeaderText = document.createElement('span');
    courseBubbleLinksHeaderText.innerText = "Links";

    const courseBubbleLinksHeaderButton = document.createElement('button');
    courseBubbleLinksHeaderButton.classList.add("small-button");
    courseBubbleLinksHeaderButton.type = "button";
    courseBubbleLinksHeaderButton.innerText = "+";

    courseBubbleLinksHeaderLeft.appendChild(courseBubbleLinksHeaderText);
    courseBubbleLinksHeaderLeft.appendChild(courseBubbleLinksHeaderButton);


    // Link Input
    const courseBubbleLinksHeaderRight = document.createElement('div');
    courseBubbleLinksHeaderRight.classList.add("link-header-right", "hidden");
    const courseBubbleLinksHeaderRightTop = document.createElement('div');
    courseBubbleLinksHeaderRightTop.classList.add("link-header-right-top", "hidden");

    const courseBubbleLinksNameInput = document.createElement('input');
    courseBubbleLinksNameInput.classList.add("link-input", "name");
    courseBubbleLinksNameInput.type = "text";
    courseBubbleLinksNameInput.placeholder = "Name";
    const courseBubbleLinksURLInput = document.createElement('input');
    courseBubbleLinksURLInput.classList.add("link-input", "link");
    courseBubbleLinksURLInput.type = "url";
    courseBubbleLinksURLInput.placeholder = "URL";

    const courseBubbleLinksAddInput = document.createElement('button');
    courseBubbleLinksAddInput.classList.add("small-button");
    courseBubbleLinksAddInput.type = "button";
    courseBubbleLinksAddInput.innerText = ">";

    const courseBubbleLinksHeaderRightBottom = document.createElement('span');
    courseBubbleLinksHeaderRightBottom.classList.add("link-header-right-bottom", "hidden");
    courseBubbleLinksHeaderRightBottom.innerText = "Please input a name (50 characters or less) and a valid URL";

    function generateURL() {
        const linkName = courseBubbleLinksNameInput.value;
        const linkURL = courseBubbleLinksURLInput.value;

        if (isValidURL(linkURL) && linkName !== "" && linkName.length <= 50) {
            courses.addLinkToCourse(course.name, linkName, linkURL);
            generateLinkBubble(courses.getLinkFromCourse(course.name, linkName));
            storage.saveData(courses.getAllCourses());
            document.activeElement.blur();
            courseBubbleLinksHeaderRight.classList.add("hidden");
            courseBubbleLinksHeaderRightBottom.classList.add("hidden");
            courseBubbleLinksNameInput.value = "";
            courseBubbleLinksURLInput.value = "";
        } else {
            courseBubbleLinksHeaderRightBottom.classList.remove("hidden");
        }
    }


    // Event Listeners
    courseBubbleLinksAddInput.addEventListener("click", generateURL);

    courseBubbleLinksURLInput.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { generateURL() }
    });

    courseBubbleLinksNameInput.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { generateURL() }
    });

    courseBubbleLinksHeaderButton.addEventListener("click", () => {
        courseBubbleLinksHeaderRight.classList.remove("hidden");
        courseBubbleLinksNameInput.focus();
    });


    // Piece together
    courseBubbleLinksHeaderRightTop.appendChild(courseBubbleLinksNameInput);
    courseBubbleLinksHeaderRightTop.appendChild(courseBubbleLinksURLInput);
    courseBubbleLinksHeaderRightTop.appendChild(courseBubbleLinksAddInput);
    courseBubbleLinksHeaderRight.appendChild(courseBubbleLinksHeaderRightTop);
    courseBubbleLinksHeaderRight.appendChild(courseBubbleLinksHeaderRightBottom);


    // Link Container
    const courseBubbleLinksContainer = document.createElement('div');
    courseBubbleLinksContainer.classList.add("link-container");

    course.links.forEach((link) => {
        generateLinkBubble(link);
    });

    function generateLinkBubble(link) {
        const LinkBubble = document.createElement('div');
        LinkBubble.classList.add("link-bubble");

        const LinkBubbleText = document.createElement('a');
        LinkBubbleText.classList.add("link-bubble-anchor");
        LinkBubbleText.innerText = link.name;
        LinkBubbleText.href = link.url;
        LinkBubbleText.target = "new";

        const LinkBubbleDeleteBtn = document.createElement('button');
        LinkBubbleDeleteBtn.type = "button";
        LinkBubbleDeleteBtn.innerText = "×";

        LinkBubble.appendChild(LinkBubbleText);
        LinkBubble.appendChild(LinkBubbleDeleteBtn);
        courseBubbleLinksContainer.appendChild(LinkBubble);

        LinkBubbleDeleteBtn.addEventListener("click", () => {
            courses.removeLinkFromCourse(course.name, link.name);
            storage.saveData(courses.getAllCourses());
            courseBubbleLinksContainer.removeChild(LinkBubble);
        })
    }


    // Piece things together
    courseBubbleLinksHeader.appendChild(courseBubbleLinksHeaderLeft);
    courseBubbleLinksHeader.appendChild(courseBubbleLinksHeaderRight);
    courseBubbleLinks.appendChild(courseBubbleLinksHeader);
    courseBubbleLinks.appendChild(courseBubbleLinksContainer);

    return courseBubbleLinks;
}







function generateToDos(course) {
    const courseBubbleToDos = document.createElement('div');
    courseBubbleToDos.classList.add("todos");

    const courseBubbleToDosHeader = document.createElement('div');
    courseBubbleToDosHeader.classList.add("todos-header");


    // Link Title and Add Button
    const courseBubbleToDosHeaderLeft = document.createElement('div');
    courseBubbleToDosHeaderLeft.classList.add("todos-header-left");

    const courseBubbleToDosHeaderText = document.createElement('span');
    courseBubbleToDosHeaderText.innerText = "To Do List";

    const courseBubbleToDosHeaderButton = document.createElement('button');
    courseBubbleToDosHeaderButton.classList.add("small-button");
    courseBubbleToDosHeaderButton.type = "button";
    courseBubbleToDosHeaderButton.innerText = "+";

    courseBubbleToDosHeaderLeft.appendChild(courseBubbleToDosHeaderText);
    courseBubbleToDosHeaderLeft.appendChild(courseBubbleToDosHeaderButton);


    // To Do Input
    const courseBubbleToDosHeaderRight = document.createElement('div');
    courseBubbleToDosHeaderRight.classList.add("todo-header-right", "hidden");
    const courseBubbleToDosHeaderRightTop = document.createElement('div');
    courseBubbleToDosHeaderRightTop.classList.add("todo-header-right-top", "hidden");

    const courseBubbleToDosTaskInput = document.createElement('input');
    courseBubbleToDosTaskInput.classList.add("task-input", "name");
    courseBubbleToDosTaskInput.type = "text";
    courseBubbleToDosTaskInput.placeholder = "Task";

    const courseBubbleToDosAddInput = document.createElement('button');
    courseBubbleToDosAddInput.classList.add("small-button");
    courseBubbleToDosAddInput.type = "button";
    courseBubbleToDosAddInput.innerText = ">";

    const courseBubbleToDosHeaderRightBottom = document.createElement('span');
    courseBubbleToDosHeaderRightBottom.classList.add("todo-header-right-bottom", "hidden");
    courseBubbleToDosHeaderRightBottom.innerText = "Please input a non-empty task";


    function generateTask() {
        const task = courseBubbleToDosTaskInput.value;

        if (task !== "") {
            courses.addToDoToCourse(course.name, task, false);
            generateToDoPoint(courses.getToDoFromCourse(course.name, task));
            adjustEmptyContainer();
            storage.saveData(courses.getAllCourses());
            document.activeElement.blur();
            courseBubbleToDosHeaderRight.classList.add("hidden");
            courseBubbleToDosHeaderRightBottom.classList.add("hidden");
            courseBubbleToDosTaskInput.value = "";
        } else {
            courseBubbleToDosHeaderRightBottom.classList.remove("hidden");
        }
    }


    // Event Listeners
    courseBubbleToDosAddInput.addEventListener("click", generateTask);

    courseBubbleToDosTaskInput.addEventListener("keypress", (e) => {
        if (e.code === "Enter") { generateTask() }
    });

    courseBubbleToDosHeaderButton.addEventListener("click", () => {
        courseBubbleToDosHeaderRight.classList.remove("hidden");
        courseBubbleToDosTaskInput.focus();
    });


    // Piece together Header
    courseBubbleToDosHeaderRightTop.appendChild(courseBubbleToDosTaskInput);
    courseBubbleToDosHeaderRightTop.appendChild(courseBubbleToDosAddInput);
    courseBubbleToDosHeaderRight.appendChild(courseBubbleToDosHeaderRightTop);
    courseBubbleToDosHeaderRight.appendChild(courseBubbleToDosHeaderRightBottom);




    // ToDos Container
    const courseBubbleToDosContainer = document.createElement('div');
    courseBubbleToDosContainer.classList.add("todos-container");
    adjustEmptyContainer();
    course.todos.forEach((todo) => {
        generateToDoPoint(todo);
    });

    function adjustEmptyContainer() {
        if (course.todos.length !== 0) {
            courseBubbleToDosContainer.style.padding = "18px";
        } else {
            courseBubbleToDosContainer.style.padding = "0px";
        }
    }

    function generateToDoPoint(todo) {
        const ToDoPoint = document.createElement('div');
        ToDoPoint.classList.add("todo-point");

        const ToDoPointCheck = document.createElement('button');
        ToDoPointCheck.classList.add("todo-check-btn");
        ToDoPointCheck.type = "button";

        const ToDoPointText = document.createElement('span');
        ToDoPointText.classList.add("todo-point-text");
        ToDoPointText.innerText = todo.name;

        ToDoPointCheck.addEventListener("click", () => {
            courses.toggleToDoFromCourse(course.name, todo.name);
            storage.saveData(courses.getAllCourses());
            const {complete} = courses.getToDoFromCourse(course.name, todo.name);
            if (complete === true) {
                ToDoPointText.style.textDecoration = "line-through";
                ToDoPointCheck.classList.add("checked");
            } else {
                ToDoPointText.style.textDecoration = "none";
                ToDoPointCheck.classList.remove("checked");
            }
        })

        ToDoPoint.appendChild(ToDoPointCheck);
        ToDoPoint.appendChild(ToDoPointText);
        courseBubbleToDosContainer.appendChild(ToDoPoint);
    }


    // Piece things together
    courseBubbleToDosHeader.appendChild(courseBubbleToDosHeaderLeft);
    courseBubbleToDosHeader.appendChild(courseBubbleToDosHeaderRight);
    courseBubbleToDos.appendChild(courseBubbleToDosHeader);
    courseBubbleToDos.appendChild(courseBubbleToDosContainer);

    return courseBubbleToDos;
}



// *************************
// Loading Data into Bubbles
// *************************

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

function filterToDos(courseName) {
    courses.filterToDoFromCourse(courseName);
    storage.saveData(courses.getAllCourses());
}

function loadCourses() {
    const data = storage.getData();
    if (data !== null) {
        data.forEach((course) => {
            courses.addCourse(course.name, course.prof, course.links, course.todos);
            filterToDos(course.name);
            generateCourseBubble(courses.getCourse(course.name));
        });
    }
}

export default loadCourses;
