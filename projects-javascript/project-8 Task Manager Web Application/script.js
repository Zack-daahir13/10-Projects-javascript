document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(deleteBtn);
        return li;
    }
});
