const library = (function(){
    const createProject = function(name) {
        return {name, todos: []};
    }

    const createTodo = function(title, description, dueDate, priority,
                 dateCreated) {
        return {title, description, dueDate, priority, dateCreated};
    }

    return {createTodo, createProject,};
})()