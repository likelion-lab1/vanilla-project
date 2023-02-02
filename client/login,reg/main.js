// 전체 체크 전체 체크 해제

import { getNode, getNodes, } from "../lib/index.js"

let allCheck = getNode('.all-check');
let subCheck = getNodes('.sub-check');
let s

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

function inputCheck(el,maxlength){
  if(el.value.length > maxlength){
    el.value = el.value.substr(0, maxlength);
  }
}



allCheck.addEventListener('click',checkhandler)



