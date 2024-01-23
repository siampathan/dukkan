const items = document.querySelectorAll(".slider .list .item");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const thumbnails = document.querySelectorAll(".thumbnail .item");

//config params
let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};

//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

//auto run slider
let refershInterval = setInterval(() => {
  next.click();
}, 5000);

function showSlider() {
  //remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  //active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  //clear auto time run slider
  clearInterval(refershInterval);
  refershInterval = setInterval(() => {
    next.click();
  }, 5000);
}

//click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
