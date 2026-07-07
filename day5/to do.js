let heading=document.getElementById("head");

heading.style.fontFamily="cursive";
heading.style.color="purple";
heading.style.textAlign="center";

let paragraph=document.getElementsByClassName("para");
 
paragraph[0].style.color="darkgray";
paragraph[0].style.textAlign="center";

let input=document.getElementsByTagName("input");

input[0].style.marginLeft="400px";
input[0].style.paddingTop="15px";
input[0].style.paddingBottom="15px";
input[0].style.width="600px";
input[0].style.border="3px solid purple";
input[0].style.borderRadius="10px";
input[0].style.fontFamily="cursive";
input[0].style.fontSize="medium";
input[0].style.color="black";

let button=document.getElementsByClassName("btn");

button[0].style.borderRadius="15px"
button[0].style.width="150px"
button[0].style.height="50px"
button[0].style.borderRadius="8px"
button[0].style.backgroundColor="skyblue"
button[0].style.marginLeft="20px"

button[0].addEventListener("click", function () {

    let task = taskInput.value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    li.style.listStyle = "none";
    li.style.marginTop = "20px";
    li.style.marginLeft = "400px";
    li.style.fontSize = "20px";
    li.style.fontFamily = "cursive";

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.style.marginLeft = "20px";
    deleteBtn.style.width = "100px";
    deleteBtn.style.height = "35px";
    deleteBtn.style.backgroundColor = "purple";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "8px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.style.marginLeft = "10px";
    editBtn.style.width = "100px";
    editBtn.style.height = "35px";
    editBtn.style.backgroundColor = "purple";
    editBtn.style.color = "white";
    editBtn.style.border = "none";
    editBtn.style.borderRadius = "8px";
    editBtn.style.cursor = "pointer";
    editBtn.addEventListener("click", function () {

    let newTask = prompt("Edit your task:", li.firstChild.textContent);

    if (newTask !== null && newTask !== "") {
        li.firstChild.textContent = newTask;
    }

});

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});
