function deleteitem(){
    let paraitem = document.createElement("p");
    paraitem.textContent = "cant do that";
    let contitem = document.getElementById("check-list");
    contitem.append(paraitem);
}