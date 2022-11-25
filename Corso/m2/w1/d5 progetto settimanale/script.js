console.log("perhce nn vai");

let nav = document.querySelector(".nav");
let btnStarted = document.querySelector(".btn-started");
// quando cambia colore è 400
console.log(nav);

window.onscroll = function () {
  let top = window.scrollY;
  console.log(top);
  if (top >= 400) {
    nav.classList.add("active");
    btnStarted.classList.add("attivo");
  } else {
    nav.classList.remove("active");
    btnStarted.classList.remove("attivo");
  }
};
