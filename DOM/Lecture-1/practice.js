let text = document.querySelector("h2");
text.innerText += " from Apna College students"

let divs = document.querySelectorAll(".box");
console.log(divs); // NodeList[div, div, div]
console.log(divs[0]);
divs[0].innerText = "New Unique Value 1";
divs[1].innerText = "New Unique Value 2";
divs[2].innerText = "New Unique Value 3";

let idx = 1;
for(let div of divs){
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}