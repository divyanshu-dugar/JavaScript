// Event handing in JS
/*
node.event = () => {
    // handle here
}
*/

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn 1 was clicked");
}

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
    console.log("btn2 was clicked");
}

let div1 = document.querySelector("#div1");

div1.onmouseover = () => {
    console.log("Mouse Over Div!");
}

// Event Listeners
btn1.addEventListener("click",() =>{
    console.log('button was clickedddd!');
});

