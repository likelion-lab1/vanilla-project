const menuNavigation = document.querySelector('.menu-navigation');
const menuList = document.querySelectorAll('.menu-main-name');
const subList = document.querySelectorAll('.menu-sub-list');


function menuhandler(e){
    e = e.target;
    if(e==menuList[1]){
      
      subList[0].classList.toggle('is-active-hidden')
    }
    if(e==menuList[2]){
      
      subList[1].classList.toggle('is-active-hidden')
    }
    if(e==menuList[3]){
    
      subList[2].classList.toggle('is-active-hidden')
    }
    if(e==menuList[4]){
     
      subList[3].classList.toggle('is-active-hidden')
    }
    if(e==menuList[5]){
      
      subList[4].classList.toggle('is-active-hidden')
    }
    if(e==menuList[6]){
      
      subList[5].classList.toggle('is-active-hidden')
    }
    
}

// 장바구니 수량 증감, 총 금액 
menuNavigation.addEventListener('click',menuhandler);


let plus = document.querySelector(".add-quantiy");
let minus = document.querySelector(".minus-quantity");
let result = document.querySelector("#add-cart-result");
let totalCost = document.querySelector(".total-cost");
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
    totalCost.textContent = 0;
  }
});

//팝업
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