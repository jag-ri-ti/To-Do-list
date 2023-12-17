document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('taskInput').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var taskItem = document.createElement('li');
        taskItem.innerHTML = '<span>' + taskInput.value + '</span><button onclick="removeTask(this)">Delete</button>';
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    var taskList = document.getElementById('taskList');
    var taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
