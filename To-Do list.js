function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete on click
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.style.background = "red";
  delBtn.style.color = "white";
  delBtn.style.border = "none";
  delBtn.style.cursor = "pointer";
  delBtn.onclick = function (event) {
    event.stopPropagation(); // prevent toggle when deleting
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
