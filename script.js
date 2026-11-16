let headingElement = document.getElementById("main-head");
let headstatus = true;
let parastatus = false;
let buttonElement = document.getElementById("parabutton");
let contElement = document.getElementById("container1");


function headchange(){
    if(headstatus){
        headingElement.classList.remove("main-head");
        headingElement.classList.add("main-head2");
        headstatus = false;
    }
    else{
        headingElement.classList.remove("main-head2");
        headingElement.classList.add("main-head");
        headstatus = true;
    }
}

function changepara(){
    let paraElement = document.createElement("p");
    paraElement.textContent = "Here is a added paragraph";
    contElement.appendChild(paraElement);
}