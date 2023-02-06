const openButton = document.querySelector("#cart1");
const container = document.querySelector(".add-cart-hidden");
const closeButton = document.querySelector("#close");

openButton.addEventListener("click", () => {
  container.style.display = "flex";
  // openButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
  container.style.display = "none";
  openButton.style.display = "block";
});
