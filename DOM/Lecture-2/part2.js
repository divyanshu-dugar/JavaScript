let div = document.querySelector("div");
console.log(div);

// Getting the attributes of a class
let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// Setting the attributes of a class
para.setAttribute("class","newClass");
console.log(para.getAttribute("class"));

// Style
console.log(div.style);

div.style.backgroundColor="red";

div.style.fontSize= "30px";

//div.innerText = "Hello World!";

//div.style.visibility = "hidden";

// ACCESS, CHANGE

// INSERT - CREATE THEN ADD
let newBtn = document.createElement("button");
newBtn.innerText = 'Click Me';
console.log(newBtn);
// Adding the element after creating
div.append(newBtn);

// - append child, remove child