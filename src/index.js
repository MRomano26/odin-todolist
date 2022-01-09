const library = (function(){
    const _createProject = function(name) {
        return {name, todos: []};
    }

    const _createTodo = function(title, description, dueDate, priority,) {
        return {title, description, dueDate, priority};
    }

    const _defaultProject = _createProject('default');
    const _projects = window.localStorage;

    if (_projects.length === 0) {
        _projects.setItem(_defaultProject.name, _defaultProject);
    }

    const addProject = function() {

    }
    const deleteProject = function() {

    }
    const addTodo = function() {

    }
    const deleteTodo = function() {

    }

    return {test: _projects};
})();