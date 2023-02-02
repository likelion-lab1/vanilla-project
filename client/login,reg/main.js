// 전체 체크 전체 체크 해제

import { getInputValue, getNode, getNodes, } from "../lib/index.js"

let allCheck = getNode('.all-check');
let subCheck = getNodes('.sub-check');
let submitCheck = getNode('#submit1')

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

function clickIdHandler(e) {
  e.preventDefault();
  let name = getInputValue('#nameField')
  if(!name){
    alert('아이디를 입력해주세요')
    return

  }
  if(name.length<6){
    alert('6글자 이상 입력해주세요')
  }else{
    alert('인증되었습니다')
    return
  }


  






}



allCheck.addEventListener('click',checkhandler)
submitCheck.addEventListener('click',clickIdHandler)



