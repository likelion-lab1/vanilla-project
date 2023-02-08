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
