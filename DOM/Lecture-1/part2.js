let div = document.querySelector("div");
console.dir(div);
console.log(div.tagName); // Returns the tag name
console.log(div.innerText); //  Returns the text content of the element (all child nodes converted to a string)
console.log(div.innerHTML);
console.log(div.textContent);
// div.innerText = "Divyanshu";
div.innerHTML = "<div>Inner Div</div>";

let heading = document.querySelector("h1");
console.log(heading);
heading.innerText = "New Heading";
heading.innerHTML = "<i>New Heading</i>";
