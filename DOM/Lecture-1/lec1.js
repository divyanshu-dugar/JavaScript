console.dir(window);
console.dir(window.document); // This will display the body object
console.log(document.body); // This will display the body code of HTML 

console.dir(document.body.childNodes[1]);

// What to do with it? - Dynamic changes to our style and content based on user interaction!

document.body.style.backgroundColor = "gold"; // Changing the background color to gold
document.body.childNodes[3].innerText = "Welcome!"; // Changin the h1

// DOM Manipulation

//1. Getting element by ID
let heading = document.getElementById("heading"); //h1
console.log(heading);
console.dir(heading);

//2. Getting element by Class - It is very similar to an array (HTML Collection)
let content = document.getElementsByClassName("content");
console.log(content);
console.dir(content);

//3. Getting element by Tags 
let  paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.dir(paragraphs);

//4. Getting element by Query Selector - We can pass anything in the query selection
let element = document.querySelector("#heading");
console.log(element);
console.dir(element);

// Query Selector returns nodes list

// Selecting 1st element 
let firstEle = document.querySelector("p");
console.log(firstEle);
console.dir(firstEle);

// Selecting all elements at once
let allEle = document.querySelectorAll("p");
console.log(allEle);
console.dir(allEle);

// Selecting all classes
let allClasses = document.querySelectorAll(".content");
console.log(allClasses);
console.dir(allClasses);

// Properties
// ----------
// tagName - Returns tag for element nodes
// innerText - returns the text content fo the element and all it's children
// inner HTML : returns the plain text or HTTML contents in the elemnt
// textContent : returns textual  content even for hidden elements

console.log(firstEle.tagName);
console.log(firstEle.innerText);

// 3 Types of notes 
// - Text Nodes
// - Comment Nodes
// - Elements (we work with this during development)

// FirstChild, LastChild, Children - used for navigation
// Read about - text, comment and element
console.log(document.querySelector("body").children);
console.dir(document.querySelector("div").children);

// innerText

