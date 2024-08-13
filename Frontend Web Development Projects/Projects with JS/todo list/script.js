// let listContainer = document.getElementById('list-container')
// let head = document.querySelector('head')
// let inputBox = document.getElementById('input-box')

// function addTask(){
//     if(inputBox.value == ''){
//         alert('Please Enter the Text')
//     }
//     else{
//         const task = document.createElement('li')
//         task.textContent = inputBox.value;
//         listContainer.appendChild(task)
//         // inputBox.value = ''
//         let span = document.createElement('span')
//         span.textContent = "\u00d7"
//         task.appendChild(span)
//         span.style.right = '0px';
//     }
//     inputBox.value = '';
//     saveData()
// }

// listContainer.addEventListener('click', (e)=>{
//     if(e.target.tagName === 'LI'){
//         e.target.classList.toggle("checked")
//         saveData()
//     }
//     else if(e.target.tagName === 'SPAN'){
//         e.target.parentElement.remove()
//         saveData()
//     }
// })

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML)
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }

// showTask()

let todo = document.querySelector("#list-container");
let inputBox = document.querySelector("#input-box");
let button = document.querySelector("button");

addtask = () => {
  if (inputBox.value === "") {
    alert("enter task please");
  } else {
    let task = document.createElement("li");
    task.textContent = inputBox.value;
    todo.appendChild(task);
  }
  inputBox.value = "";
  savedata();
};

button.addEventListener("click", (e) => {
  addtask();
  savedata();
});

todo.addEventListener("click", (e) => {
  e.target.classList.toggle("checked");
  savedata();
});

todo.addEventListener("contextmenu", (e) => {
  e.target.remove();
  e.preventDefault();
  //   return false;
  savedata();
});

savedata = () => {
  localStorage.setItem("da", todo.innerHTML);
};

function getdata() {
    todo.innerHTML=localStorage.getItem("da");
}

getdata();
