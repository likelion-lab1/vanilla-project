// 전체 체크 전체 체크 해제

import { getInputValue, getNode, getNodes, } from "../lib/index.js"

let allCheck = getNode('.all-check');
let subCheck = getNodes('.sub-check');
let submitCheck = getNode('#submit1')

// let passwordCheck = getNode('#submit-password')

const REGPASSSWORD = /(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,20}$/;

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
// 활성화버튼
const register = document.querySelector('.register');

let pw = document.querySelector('.pw-input');
let email = document.querySelector('.email-input');
let resgisterButton =document.querySelector('.register-button');


function keycheck(e){
  e = e.target
  // if(e ==pw){
  //   console.log('pw');
  // }
  // if(e == email){
  //   console.log('eamil')
  // }
 
  if (pw.value.length >= 8&&email.value.includes('@') && email.value.includes('.') )
  {
    // disable 쓰지마세요
    resgisterButton.disabled = false
  } else{
    resgisterButton.disabled = true
  }
}

register.addEventListener('keyup',keycheck)
// document.querySelector('.pw-input').value.length>=9
// document.querySelector('.email-input').value.includes('@')
// document.querySelector('.email-input').value.includes(',')
// document.querySelector('.email-input').value.includes('.')








