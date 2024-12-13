const check = document.querySelectorAll(".hero .tasks .raw_task i");
const input_value = document.querySelector(".box .list_search input");
const button = document.querySelector(".box .list_search button");
const tasks = document.querySelector(".hero .tasks");
const clear = document.querySelector(".container .hero .clear button");

let data = localStorage.getItem("allTasks") ? JSON.parse(localStorage.getItem("allTasks")) : []; // Initialize data from localStorage

// Display tasks on page load
addTask();
toggleClearButton();

button.addEventListener("click", () => {
    let data_input = input_value.value.trim(); // Get user input
    if (data_input) {
        data.push(data_input); // Add input to data array
        localStorage.setItem("allTasks", JSON.stringify(data)); // Save updated data to localStorage
        addTask(); // Update the task list in the DOM
        input_value.value = ""; // Clear input field
        toggleClearButton();
    }
});

function addTask() {
    tasks.innerHTML = ""; // Clear existing tasks
    let container = ""; // Reset container
    for (let i = 0; i < data.length; i++) {
        container += `
            <div class="raw_task">
                <div class="task_text">
                    <i class="check_icon fa-regular fa-circle"></i>
                    <p class="">${data[i]}</p>
                </div>
                <div class="task_icon">
                    <i class="fa-solid fa-trash"  onclick="deleteItem(${i})"></i>
                </div>
            </div>
        `;
    }
    tasks.innerHTML = container; // Add tasks to the DOM
}

tasks.addEventListener("click", (event) => {
    if (event.target.tagName === "I" && event.target.classList.contains("check_icon")) {
        const element = event.target;
        const paragraph = element.parentElement.querySelector("p");

        if (element.classList.contains("fa-solid")) {
            element.classList.remove("fa-solid", "fa-circle-check");
            element.classList.add("fa-regular", "fa-circle");
            paragraph.classList.remove("checked");
        } else {
            element.classList.remove("fa-regular", "fa-circle");
            element.classList.add("fa-solid", "fa-circle-check");
            paragraph.classList.add("checked");
        }
    }
});

function deleteItem(index) {
    data.splice(index, 1); // Remove task from array
    localStorage.setItem("allTasks", JSON.stringify(data)); // Update localStorage
    addTask(); // Re-render tasks
    toggleClearButton(); // Update clear button visibility
}

// Clear all tasks
clear.addEventListener("click",()=>{
    console.log("clear");
    data=[];
    localStorage.setItem("allTasks", JSON.stringify(data));
    addTask()
    console.log(data);
    toggleClearButton()
});

// Utility: Toggle clear button visibility
function toggleClearButton() {
    if (data.length === 0) {
        clear.classList.add("display_none");
    } else {
        clear.classList.remove("display_none");
    }
}




// //The correct to apply checked and add a new task


// const check = document.querySelectorAll(".hero .tasks .raw_task i");
// const input_value = document.querySelector(".box .list_search input");
// const button = document.querySelector(".box .list_search button");
// const tasks = document.querySelector(".hero .tasks");
// const clear = document.querySelector(".container .hero .clear button");

// let data = localStorage.getItem("allTasks") ? JSON.parse(localStorage.getItem("allTasks")) : []; // Initialize data from localStorage

// // Display tasks on page load
// addTask();
// toggleClearButton();

// button.addEventListener("click", () => {
//     let data_input = input_value.value.trim(); // Get user input
//     if (data_input) {
//         data.push({ task: data_input, checked: false }); // Add input to data array with checked state
//         localStorage.setItem("allTasks", JSON.stringify(data)); // Save updated data to localStorage
//         addTask(); // Update the task list in the DOM
//         input_value.value = ""; // Clear input field
//         toggleClearButton();
//     }
// });

// function addTask() {
//     tasks.innerHTML = ""; // Clear existing tasks
//     let container = ""; // Reset container
//     for (let i = 0; i < data.length; i++) {
//         container += `
//             <div class="raw_task">
//                 <div class="task_text">
//                     <i class="check_icon ${data[i].checked ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}"></i>
//                     <p class="${data[i].checked ? 'checked' : ''}">${data[i].task}</p>
//                 </div>
//                 <div class="task_icon">
//                     <i class="fa-solid fa-trash" onclick="deleteItem(${i})"></i>
//                 </div>
//             </div>
//         `;
//     }
//     tasks.innerHTML = container; // Add tasks to the DOM
// }

// tasks.addEventListener("click", (event) => {
//     if (event.target.tagName === "I" && event.target.classList.contains("check_icon")) {
//         const element = event.target;
//         const paragraph = element.parentElement.querySelector("p");
//         const index = Array.from(element.closest('.raw_task').parentElement.children).indexOf(element.closest('.raw_task'));

//         // Toggle checked state in data array
//         data[index].checked = !data[index].checked;
//         localStorage.setItem("allTasks", JSON.stringify(data)); // Update localStorage

//         // Toggle classes for the check icon and paragraph
//         if (data[index].checked) {
//             element.classList.remove("fa-regular", "fa-circle");
//             element.classList.add("fa-solid", "fa-circle-check");
//             paragraph.classList.add("checked");
//         } else {
//             element.classList.remove("fa-solid", "fa-circle-check");
//             element.classList.add("fa-regular", "fa-circle");
//             paragraph.classList.remove("checked");
//         }
//     }
// });

// function deleteItem(index) {
//     data.splice(index, 1); // Remove task from array
//     localStorage.setItem("allTasks", JSON.stringify(data)); // Update localStorage
//     addTask(); // Re-render tasks
//     toggleClearButton(); // Update clear button visibility
// }

// // Clear all tasks
// clear.addEventListener("click", () => {
//     data = [];
//     localStorage.setItem("allTasks", JSON.stringify(data)); // Clear localStorage
//     addTask(); // Re-render tasks
//     toggleClearButton(); // Update clear button visibility
// });

// // Utility: Toggle clear button visibility
// function toggleClearButton() {
//     if (data.length === 0) {
//         clear.classList.add("display_none");
//     } else {
//         clear.classList.remove("display_none");
//     }
// }

