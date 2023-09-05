// "ToDo" is a factory function that represents a todo (objective, completion)
const ToDo = (objective, completeStatus) => {
    let complete = completeStatus;

    const changeStatus = (isComplete) => {
        complete = isComplete;
    }

    return {objective, complete, changeStatus}
}

// toDoList is a module that provides operations on an array of "ToDo"
const toDoList = (() => {
    let toDoArray = [];

    const addToDo = (objective, completeStatus) => {
        const newToDo = ToDo(objective, completeStatus);
        toDoArray.push(newToDo);
    }

    const removeToDo = (objective) => {
        toDoArray = toDoArray.filter((todo) => (todo.objective !== objective));
    }

    const isUnique = (objective) => toDoArray.find((todo => (todo.objective === objective))) === undefined;

    return {addToDo, removeToDo, isUnique};
})();

export default toDoList;
