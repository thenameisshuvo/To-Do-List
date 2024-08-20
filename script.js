document.getElementById('add-button').addEventListener('click', addTask);
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  addTask();
});

const themeSwitch = document.getElementById('switch');
themeSwitch.addEventListener('change', function() {
  document.body.classList.toggle('light-mode');
});

function addTask() {
  const input = document.getElementById('input');
  const task = input.value.trim();

  if (task === '') return;

  const todos = document.getElementById('todos');
  const li = document.createElement('li');
  li.textContent = task;

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  li.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    li.remove();
  });

  todos.appendChild(li);
  input.value = '';
}

li.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  li.classList.add('removed');
  setTimeout(() => li.remove(), 500);
});

