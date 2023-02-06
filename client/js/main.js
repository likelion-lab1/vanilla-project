import {  getNode  } from "../lib/index.js"



let button = getNode('.AdClose');
function handler(){
  let AD = getNode('.TopAd');
  AD.style.display = 'none';
}
button.addEventListener('click',handler);
