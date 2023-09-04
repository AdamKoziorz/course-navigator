function saveData(data) {
    window.localStorage.setItem("courses", JSON.stringify(data));
}

function getData() {
    const courses = localStorage.getItem("courses");
    return JSON.parse(JSON.parse(courses));
}

export { saveData, getData };