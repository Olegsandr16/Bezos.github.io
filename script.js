let slides = document.querySelectorAll("img");
let i = 0;

function sayHi() {
  ++i
    if (i >= slides.length) {
        slides[i-1].classList.remove("block");
        i = 0;
        slides[i].classList.add("block");
    } else {
        slides[i-1].classList.remove("block");
        slides[i].classList.add("block");
    }
}

let timerId = setInterval(() => sayHi(), 2500);

