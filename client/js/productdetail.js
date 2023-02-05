

//item count
const number = document.querySelector(".count-number");
const increase = document.querySelector(".count-button-plus");
const decrease = document.querySelector(".count-button-minus");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};


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



//총 금액 
// let price = document.querySelector(".product-detail-itmem-price")

// function sum(number, price) {
//   let total = number * price;
//   return total = document.querySelector(".total-price");
//   }
  
//   let total = sum(number, price);