// 헤더 닫기버튼
let button = document.querySelector('.adClose');
function handler(){
  let AD = document.querySelector('.topAd');
  AD.style.display = 'none';
}

button.addEventListener('click',handler);

