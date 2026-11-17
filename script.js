let countlive = 0;
let idno = 1;
let listcontainer = document.getElementById("check-list");

function deleteitem(listitem){
    listcontainer.removeChild(listitem);
}

let inputboxElement = document.getElementById("inputbox");
inputboxElement.addEventListener("keydown",function(e)  {
    if(e.key === "Enter"){
        addToList(inputboxElement.textContent);
        inputboxElement.value = ""
    }
});

function addToList(){
    idno += 1;
    let inputtext = document.getElementById("inputbox").value ;
    if (inputtext == "" || inputtext == null){
        alert("enter something")
        return
    }
    else{
        console.log("entered correctly");
        let listitem = document.createElement("li");
        listitem.classList.add("list-item" ,"mt-2");
        listitem.setAttribute("id",inputtext);
        let itemcontainer = document.createElement("div");
        itemcontainer.classList.add("todo-item", "d-flex", "flex-row");

        let inputcontainer = document.createElement("input");
        inputcontainer.setAttribute("type","checkbox");
        inputcontainer.setAttribute("id",idno);
        inputcontainer.classList.add("check",);
        
        let checkcontainer = document.createElement("div");
        checkcontainer.classList.add("check-container", "d-flex", "flex-row", "justify-content-between");
        let labelcontainer = document.createElement("label");
        labelcontainer.textContent = inputtext;
        labelcontainer.setAttribute("for",idno);

        let trashcontainer = document.createElement("a");
        let iconcontainer = document.createElement("i");
        iconcontainer.classList.add("fa-solid", "fa-trash", "pt-2");

        trashcontainer.appendChild(iconcontainer);
        checkcontainer.appendChild(labelcontainer);
        checkcontainer.appendChild(trashcontainer);

        itemcontainer.appendChild(inputcontainer);
        itemcontainer.appendChild(checkcontainer);

        listitem.appendChild(itemcontainer);
        listcontainer.appendChild(listitem);

        inputcontainer.onclick = function(){
            labelcontainer.classList.toggle("checked");
        }

        trashcontainer.onclick = function(){
            console.log(inputtext);
            deleteitem(listitem)
        }
        inputboxElement.value = "";

    }
}
