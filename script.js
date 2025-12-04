/* I am selecting the important elements from the HTML using their IDs */
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

/* I am loading the ding sound which will play when a task is marked as done */
const dingSound = new Audio("ding.mp3");

/* When the user clicks the Add button, I call the addTask function */
addBtn.addEventListener("click", addTask);

/* I also allow the user to press Enter inside the input to add a task */
taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

/* This function adds a new task to the list */
function addTask() {

    /* I get the text typed by the user */
    const taskText = taskInput.value.trim();

    /* If the user enters nothing, I stop the function */
    if (taskText === "") return;

    /* I create a new <li> element to represent the task */
    const li = document.createElement("li");

    /* 
       I am building the HTML structure for each task. 
       - First row: task text + delete button 
       - Second row: "Mark as done" button
    */
    li.innerHTML = `
        <div class="task-top">
            <span class="task-text">${taskText}</span>
            <span class="delete-btn">X</span>
        </div>
        <button class="done-btn">Mark as done</button>
    `;

    /* I add the new task to the main list on the page */
    taskList.appendChild(li);

    /* After adding the task, I clear the input box */
    taskInput.value = "";

    /* I get references to the delete button and done button */
    const deleteBtn = li.querySelector(".delete-btn");
    const doneBtn = li.querySelector(".done-btn");

    /* 
       When the user clicks the "Mark as done" button: 
       - I add the .done class 
       - I play the ding sound 
       - I disable the button so it cannot be clicked twice
    */
    doneBtn.addEventListener("click", function () {

        /* I check if the task is already marked as done */
        if (li.classList.contains("done")) return;

        /* I add the visual effect of a done task */
        li.classList.add("done");

        /* I rewind the sound to the beginning and play it */
        dingSound.currentTime = 0;
        dingSound.play();

        /* I change the button text and disable it */
        doneBtn.innerText = "Done";
        doneBtn.disabled = true;
    });

    /* 
       When the user clicks the delete button (X), 
       I simply remove the entire <li> from the list.
    */
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
}