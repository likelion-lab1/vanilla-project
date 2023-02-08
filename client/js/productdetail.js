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
  if (i > 1) {
    i--;
    result.textContent = i;
    let totalCostNum = i * 4980;
    totalCost.textContent = totalCostNum.toLocaleString();
  } else {
    totalCost.textContent = totalCostNum.toLocaleString(i * 4980);
  }
});


//cart bubble
let cartBtn = document.querySelector('.product-detail-info-cart-btn');

function bubbleHandler(){
let bubble = document.querySelector('.cart-bubble');
bubble.style.display = 'flex';
setTimeout(function(){
bubble.style.display = 'none';
}, 3000);
}

cartBtn.addEventListener('click',bubbleHandler);



//heart color 
let heartButton = document.querySelector('.cart-button');
let heart = document.querySelector('.heart-path');

heartButton.addEventListener('click',()=>{

  
  heart.classList.toggle('fill-red')
})
