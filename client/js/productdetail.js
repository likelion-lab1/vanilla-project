// 수량 증감,총 금액 변경
let plus = document.querySelector(".count-button-plus");
let minus = document.querySelector(".count-button-minus");
let result = document.querySelector(".count-number");
let totalCost = document.querySelector(".total-price");
let i = 1;

plus.addEventListener("click", () => {
  i++;
  result.textContent = i;
  let totalCostNum = i * 4980;
  totalCost.textContent = totalCostNum.toLocaleString();
});

minus.addEventListener("click", () => {
  if (i > 0) {
    i--;
    result.textContent = i;
    let totalCostNum = i * 4980;
    totalCost.textContent = totalCostNum.toLocaleString();
  } else {
    totalCost.textContent = 0 + 1;
  }
});


//cart bubble
let cartBtn = document.querySelector('.product-detail-info-cart-btn');

function handler(){
let bubble = document.querySelector('.cart-bubble');
bubble.style.display = 'flex';
setTimeout(function(){
bubble.style.display = 'none';
}, 3000);
}

cartBtn.addEventListener('click',handler);


//하트 색상 변경 
// let heart = document.querySelector(".product-detail-heart-icon");
// const CLICKED_CLASS = "clicked";

// function handleClick() {
//     heart.classList.toggle(CLICKED_CLASS);
// }

// heart.addEventListener("click", handleClick);

// function init() {
//     handleClick();
// }

// init();


let button = document.querySelector(".product-detail-heart-icon");

button.addEventListener("click", function() {
    if (button.style.backgroundColor === "red") {
   button.style.backgroundColor = "";
  } else {
   button.style.backgroundColor = "red";
  }
});



//item count
// const number = document.querySelector(".count-number");
// const increase = document.querySelector(".count-button-plus");
// const decrease = document.querySelector(".count-button-minus");

// increase.onclick = () => {
//   const current = parseInt(number.innerText, 10);
//   number.innerText = current + 1;
// };

// decrease.onclick = () => {
//   const current = parseInt(number.innerText, 10);
//   number.innerText = current - 1;
// };





//총 금액 
// let price = document.querySelector(".product-detail-itmem-price")

// function sum(number, price) {
//   let total = number * price;
//   return total = document.querySelector(".total-price");
//   }
  
//   let total = sum(number, price);


