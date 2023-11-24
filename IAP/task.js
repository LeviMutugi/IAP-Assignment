const submit = document.getElementById('submit');
const newTaskInput = document.getElementById('task');

submit.disabled = true;

newTaskInput.addEventListener('input', function() {
    submit.disabled = !newTaskInput.value.trim();
});


document.querySelector('form').addEventListener('submit', function() {
    event.preventDefault();
    const taskValue = newTaskInput.value.trim();

    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskValue;

    document.getElementById('tasks').appendChild(newTaskItem);
    newTaskInput.value = '';

});
