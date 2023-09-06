const storage = (() => {
    const saveData = (data) => {
        window.localStorage.setItem("courses", JSON.stringify(data));
    }
    
    const getData = () => {
        const courses = localStorage.getItem("courses");
        return JSON.parse(courses);
    }

    return {saveData, getData}
})();

export default storage;
