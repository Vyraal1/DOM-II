// Events
const body = document.querySelector("body");
const logoHeading = document.querySelector("logo-heading");

const introImg = document.querySelector(".intro img");
introImg.addEventListener(`wheel`, e => {
  event.preventDefault();
});

//`mouseover`
const mainImages = document.querySelectorAll(".img-content img");
console.log(mainImages);

//`keydown``drag / drop``load``focus``resize`
//
//

const destination = document.querySelector(".destination");
//destination.addEventListener(`scroll`, e => {
destination.addEventListener(`click`, e => {
  body.style.color = "yellow";
  body.style.backgroundColor = "red";
});

//`select`;

// clicked twice on an element
//`dblclick`;
