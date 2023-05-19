//using add event listener
// getting the html elements
const dnrc = document.getElementById("dnrc");
const inrc = document.getElementById("inrc");
const res = document.getElementById("res");
const screen = document.getElementById("screen");

// for decrement button click
dnrc.addEventListener("click", () => {
  const value = Number(screen.innerText);
  if (value > 0) {
    screen.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button click
inrc.addEventListener("click", () => {
  const value = Number(screen.innerText);
  if (value >= 99) {
    alert("99+ values are not allowed");
  } else {
    screen.innerText = value + 1;
  }
});

// for reset button click
res.addEventListener("click", () => {
  screen.innerText = 0;
});