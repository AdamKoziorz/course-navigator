/* eslint-disable no-use-before-define */
import courses from './Course';
import storage from './Storage';
import isAbsoluteURL from './Utilities';

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
        // if (courses.isUnique(name) && name !== "") {
            courses.addCourse(name);
            storage.saveData(courses.getAllCourses());
            courseList.removeChild(courseBubbleHeader.parentElement);
            // eslint-disable-next-line no-use-before-define
            generateCourseBubble(courses.getCourse(name));
        // } else {
        //     courseList.removeChild(courseBubble);
        // }
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
    courseBubbleHeaderName.classList.add("course-input-name");
    courseBubbleHeader.appendChild(courseBubbleHeaderName);

    courseBubbleHeaderName.addEventListener("change", () => {
        courses.setCourseName(course.name, courseBubbleHeaderName.value);
        storage.saveData(courses.getAllCourses());
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
        courses.removeCourse(course.name);
        storage.saveData(courses.getAllCourses());
        courseList.removeChild(courseBubbleHeader.parentElement);
    })

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


    function generateURL() {
        const linkName = courseBubbleLinksNameInput.value;
        const linkURL = courseBubbleLinksURLInput.value;

        if (isAbsoluteURL(linkURL)) {
            courses.addLinkToCourse(course.name, linkName, linkURL);
            generateLinkBubble(courses.getLinkFromCourse(course.name, linkName));
            storage.saveData(courses.getAllCourses());
            document.activeElement.blur();
            courseBubbleLinksHeaderRight.classList.add("hidden");
        }
    }

    courseBubbleLinksAddInput.addEventListener("click", generateURL);

    courseBubbleLinksURLInput.addEventListener("keypress", (e) => {
        if ((e.code === "Enter") && (courseBubbleLinksNameInput.value !== "")) { generateURL() }
    });


    courseBubbleLinksHeaderRight.appendChild(courseBubbleLinksNameInput);
    courseBubbleLinksHeaderRight.appendChild(courseBubbleLinksURLInput);
    courseBubbleLinksHeaderRight.appendChild(courseBubbleLinksAddInput);

    courseBubbleLinksHeaderButton.addEventListener("click", () => {
        courseBubbleLinksHeaderRight.classList.remove("hidden");
        courseBubbleLinksNameInput.focus();
    });



    
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
    courseBubbleToDosHeader.classList.add("todos-header-left");

    const courseBubbleToDosHeaderText = document.createElement('span');
    courseBubbleToDosHeaderText.innerText = "To-Do List";

    const courseBubbleToDosHeaderButton = document.createElement('button');
    courseBubbleToDosHeaderButton.classList.add("small-button");
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
    const data = storage.getData();
    if (data !== null) {
        data.forEach((course) => {
            courses.addCourse(course.name, course.prof, course.links, course.todos);
            generateCourseBubble(courses.getCourse(course.name));
        });
    }
}

export default loadCourses;
