function ToDo(objective, complete) {
    this.objective = objective;
    this.complete = complete;

    this.changeStatus = (isComplete) => {
        this.complete = isComplete;
    }
}

function ToDoList() {
    let toDos = [];

    this.addToDo = (objective) => {
        const newToDo = new ToDo(objective, false);
        toDos.push(newToDo);
    }

    this.removeToDo = (objective) => {
        toDos = toDos.filter((todo) => (todo.objective !== objective));
    }

    this.changeToDoStatus = (objective, status) => {
        const result = toDos.find((todo) => (todo.objective === objective));
        result.changeStatus(status);
    }

    this.isUniqueObjective = (objective) => toDos.find((todo) => (todo.objective === objective)) === undefined
}

export default ToDoList;
