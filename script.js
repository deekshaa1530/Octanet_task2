document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', addTask);
  
    function addTask(e) {
      e.preventDefault();
  
      const taskName = document.getElementById('task-name').value;
      const deadline = document.getElementById('deadline').value;
      const priority = document.getElementById('priority').value;
      const label = document.getElementById('label').value;
  
      const task = document.createElement('div');
      task.classList.add('task');
  
      task.innerHTML = `
        <div class="task-info">
          <h3>${taskName}</h3>
          <p>Deadline: ${deadline}</p>
          <p>Priority: ${priority}</p>
          <p>Label: ${label}</p>
        </div>
        <div class="task-buttons">
          <button onclick="completeTask(this)">Complete</button>
          <button onclick="removeTask(this)">Remove</button>
        </div>
      `;
  
      taskList.appendChild(task);
  
      taskForm.reset();
    }
  });
  
  function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('completed');
  }
  
  function removeTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
  }
  