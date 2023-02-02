// 전체 체크 전체 체크 해제

import { getNode } from "../lib/index.js";

let allCheck = document.querySelector('.all-check');
let subCheck = document.querySelectorAll('.sub-check');
let idCheck = document.querySelectorAll('.button-size')



console.log()

function checkhandler(){
  
  if(allCheck.checked){
    subCheck.forEach((item)=>{
          item.checked = true;
    }) 
  } else{
    subCheck.forEach((item)=>{
      item.checked = false;})
  }
}

allCheck.addEventListener('click',checkhandler)

