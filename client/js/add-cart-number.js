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
  if (i > 1) {
    i--;
    result.textContent = i;
    let totalCostNum = i * 4980;
    totalCost.textContent = totalCostNum.toLocaleString();
  } else {
    totalCost.textContent = totalCostNum.toLocaleString(i * 4980);
  }
});
