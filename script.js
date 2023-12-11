
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="toggleTask(this)">Complete</button>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = '';
}

function toggleTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}