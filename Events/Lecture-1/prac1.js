let modeBtn = document.querySelector("#mode");
let mode = "light";

modeBtn.addEventListener("click", function (){
    if(mode === "light"){
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(mode);
});