// keydown and keyup event

// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.

const container = document.getElementById("container");
const display = document.getElementById("display");

// adding a keydown event listener to the document
document.addEventListener("keydown" , (e)=>{
display.style.color = "red";
display.innerText = e.key + " is keyDown";
})

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
    display.style.color = "green";
    display.innerText = e.key + " is keyUp";
  });