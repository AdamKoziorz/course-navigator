const storage = (() => {

    const saveData = (data) => {
        console.log(JSON.stringify(data));
        window.localStorage.setItem("courses", JSON.stringify(data));
    }
    
    const getData = () => {
        const courses = localStorage.getItem("courses");
        console.log(JSON.parse(courses));
        return JSON.parse(courses);
    }

    return {saveData, getData}
})();

export default storage;
