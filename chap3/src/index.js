const title = document.getElementById("title");
//console.log(title);

const title2 = document.querySelector("#title"); // 처음 보는 함수
//console.log(title2);

const container1 = document.querySelector(".container");
//console.log(container1);

const containers = document.querySelectorAll(".container");
//console.log(containers);


/**/
const divEl = document.createElement("div");

const pEl = document.createElement("p");

const h2El = document.createElement("h2");

divEl.prepend(pEl); // prepend 함수
divEl.prepend(h2El);

//console.log(divEl);


/**/

const button = document.createElement("button");
button.textContent = "버튼";

const cont1 = document.querySelector(".container");

cont1.appendChild(button);

/** */

const h1El = document.querySelector("#title");

const bodyEl = document.querySelector("body");

bodyEl.removeChild(h1El);
