const input = document.querySelector("#input");
const button = document.getElementById("button");
const list = document.querySelector("#list");

button.addEventListener("click", ()=>{
    const newP = document.createElement("p");
    newP.innerHTML = input.value;
    input.value = "";

    const newButton = document.createElement("button");
    newButton.textContent = "삭제";
    newButton.addEventListener("click", ()=>{
        const deleteTarget = newButton.closest("li"); // closet??, https://developer.mozilla.org/en-US/docs/Web/API/Element/closest/
        list.removeChild(deleteTarget);
    })

    const newDiv = document.createElement("div");
    newDiv.appendChild(newP);
    newDiv.appendChild(newButton);

    const newLi = document.createElement("li");
    newLi.appendChild(newDiv);

    list.appendChild(newLi); 
});