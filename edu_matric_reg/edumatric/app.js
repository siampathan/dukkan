//disabling mouse right click
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

//deterring F12 Key
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 123) {
    event.preventDefault();
  }
});

//disabling ctrl and u block at a time
document.addEventListener("keydown", (event) => {
  if (
    event.ctrlKey &&
    (event.keyCode === 85 || event.keyCode === 65 || event.keyCode === 83)
  ) {
    event.preventDefault();
  }
});
