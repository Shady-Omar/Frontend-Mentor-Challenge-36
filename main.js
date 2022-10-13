let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let slideOne = document.querySelector(".slide-one");
let slideTwo = document.querySelector(".slide-two");

prev.addEventListener('click', () => {
    if (slideOne.classList.contains("active")) {
        slideOne.classList.remove("active");
        slideTwo.classList.add("active");
    } else if (slideTwo.classList.contains("active")) {
        slideTwo.classList.remove("active");
        slideOne.classList.add("active");
    }
});

next.addEventListener('click', () => {
    if (slideOne.classList.contains("active")) {
        slideOne.classList.remove("active");
        slideTwo.classList.add("active");
    } else if (slideTwo.classList.contains("active")) {
        slideTwo.classList.remove("active");
        slideOne.classList.add("active");
    }
});