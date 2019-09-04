// Events
const textInput = document.createElement("form");
const body = document.querySelector("body");

const introImg = document.querySelector(".intro img");
introImg.addEventListener(`wheel`, e => {
  event.preventDefault();
});

//
const mainImages = document.querySelectorAll(".img-content img");
mainImages.forEach(img => {
  console.log(img);
  img.addEventListener("mouseover", e => {
    event.preventDefault();
  });
});

// `keydown` - You're a blogger now
const logoHeading = document.querySelector(".logo-heading");
window.addEventListener("keydown", e => {
  logoHeading.textContent += event.key;
});

// `drag / drop`

// `load`
window.addEventListener("load", e => {
  alert("Did you know that oreos are vegan?");
});

// `focus`

// `resize`

const destinations = document.querySelectorAll(".destination");
//destination.addEventListener(`scroll`, e => {
destinations.forEach(dest => {
  dest.addEventListener(`click`, e => {
    body.style.color = "yellow";
    body.style.backgroundColor = "red";
  });
});

destinations.forEach(dest => {
  dest.addEventListener(`mouseover`, e => {
    dest.style.backgroundColor = "blue";
  });
  dest.addEventListener("mouseleave", e => {
    dest.style.backgroundColor = "white";
  });
});

//`select`;

//`dblclick`;
const ps = document.querySelectorAll("p");
ps.forEach(p =>
  p.addEventListener("dblclick", e => {
    p.style.color = body.style.color;
  })
);

// Questions
// * what are the most common ones we use in react?
// * how do you get the P elements to match the body color?
