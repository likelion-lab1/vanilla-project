import {  getNode  } from "../lib/index.js"


let popupBtn =  getNode('.popup-button-right');
function handler(){
  let AD =  getNode('.popup');
  AD.style.display = 'none';
}
popupBtn.addEventListener('click',handler);

