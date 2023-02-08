const openButton = document.querySelector("#cart1");
const container = document.querySelector(".add-cart-hidden");
const addCartOverlay = document.querySelector(".add-cart-overlay");
const closeButton = document.querySelector("#close");

openButton.addEventListener("click", () => {
  container.style.display = "flex";
  container.focus();
  // openButton.style.display = "none";
});
closeButton.addEventListener("click", () => {
  container.style.display = "none";
  openButton.style.display = "block";
});
addCartOverlay.addEventListener("click", () => {
  container.style.display = "none";
  openButton.style.display = "block";
});
container.addEventListener("keydown", (e) => {
  if (e.key === "Escape") container.style.display = "none";
});

//Add cart bubble
let addCartButton = document.querySelector("#in-cart");

function bubbleHandler() {
  let bubble1 = document.querySelector("#add-cart-bubble");
  bubble1.style.display = "flex";
  container.style.display = "none";
  openButton.style.display = "block";
  setTimeout(function () {
    bubble1.style.display = "none";
  }, 4000);
}

addCartButton.addEventListener("click", bubbleHandler);
