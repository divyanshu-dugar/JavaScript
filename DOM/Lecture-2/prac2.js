// Q-1

let newBtn = document.createElement('button');
newBtn.innerText = 'Click Me!';

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

// -------------------------------------------------

// Q-2
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
// Overwriting the previous class
para.setAttribute("class","newClass");

// Class List - add/remove
para.classList.add("para");

console.log(para.classList);

