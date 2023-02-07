import {  getNode  } from "../lib/index.js"


// 헤더 닫기버튼
let button = getNode('.adClose');
function handler(){
  let AD = getNode('.topAd');
  AD.style.display = 'none';
}

button.addEventListener('click',handler);

