let countlive = 0;
let idno = 1;

function deleteitem(){
    if (countlive == 0){
        let paraitem = document.createElement("p");
        paraitem.textContent = "cant do that";
        let contitem = document.getElementById("check-list");
        contitem.append(paraitem);
        countlive = 1;
    }
    
}

let listcontainer = document.getElementById("check-list");

function addToList(){
    idno += 1;
    let textContent = document.getElementById("inputbox").value ;
    if (textContent == "" || textContent == null){
        console.log("enter something");
    }
    else{
        console.log("entered correctly");
        let listitem = document.createElement("li");
        listitem.classList.add("list-item" ,"mt-2");
        listitem.setAttribute("id",textContent);
        let itemcontainer = document.createElement("div");
        itemcontainer.classList.add("todo-item", "d-flex", "flex-row");

        let inputcontainer = document.createElement("input");
        inputcontainer.setAttribute("type","checkbox");
        inputcontainer.setAttribute("id",idno);
        inputcontainer.classList.add("check");
        
        let checkcontainer = document.createElement("div");
        checkcontainer.classList.add("check-container", "d-flex", "flex-row", "justify-content-between");
        let labelcontainer = document.createElement("label");
        labelcontainer.textContent = textContent;
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

    }
}
