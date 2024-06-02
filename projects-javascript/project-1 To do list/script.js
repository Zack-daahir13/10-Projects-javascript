document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    }
});
