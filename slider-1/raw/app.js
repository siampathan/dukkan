const slideImg = document.getElementById("sliderImg");
const text = document.getElementById("change-text");

let images = new Array("assets/bg-1.jpg", "assets/bg-2.jpg", "assets/bg-3.jpg");
let texts = new Array(
  "Let's Start Here",
  "Develop By Siam Pathan",
  "Another One"
);

let len = images.length;
let i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }
  // } else {
  //   slideImg.src = images[i];
  //   text.textContent = texts[i];
  //   i++;
  // }
  slideImg.src = images[i];
  text.textContent = texts[i];
  i++;
  setTimeout("slider()", 4000);
}

window.onload = slider;
