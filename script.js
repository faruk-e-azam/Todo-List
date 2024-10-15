const inputMain = document.getElementById("create--todo");
const listContainer = document.querySelector(".store--todo");


function addTodo() {
    if(inputMain.value === ""){
        alert("Please write something!")
    }
    else {
        let listItem = document.createElement("li");
        listItem.innerHTML= inputMain.value;
        listContainer.appendChild(listItem);
        let clear = document.createElement("span");
        clear.innerHTML="\u00d7"
         listItem.appendChild(clear);
    }
    inputMain.innerHTML= "";
    saveData()
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
} , false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask()


let icon = document.getElementById("icon");

icon.onclick=function() {
    document.body.classList.toggle("light");
}

