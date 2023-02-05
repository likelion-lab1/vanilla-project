// 전체 체크 전체 체크 해제

import {removeClass,insertAfter,getInputValue, getNode, getNodes,insertLast,showAlert,typeError, clearContents, addClass } from "../lib/index.js"




// 전체항목 선태 
let allCheck = getNode('.all-check');
let subCheck = getNodes('.sub-check');
let submitCheck = getNode('#submit1')
let userIdError = getNode('.alert-error')

// let passwordCheck = getNode('#submit-password')
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


// 아이디 인증버튼
const REGISTERID = /^[a-z]+[a-z0-9]{5,19}$/g
function clickIdHandler(e) {
  e.preventDefault();
  let name = getInputValue('#nameField')
  if(!name){
    // addClass(userIdError,'is-active')
    removeClass(userIdError, 'deactive')
    console.log(userIdError);
    return
  } else {
    // removeClass(userIdError, 'is-active')
    addClass(userIdError,'deactive')
  }
  if(name.length<6){
    alert('6글자 이상 입력해주세요')
  }else{
    alert('인증되었습니다')
    return
  }
}


// 이메일 검사




// 활성화버튼
const register = document.querySelector('.register');
let password = document.querySelector('.pw-input');
let email = document.querySelector('.email-input');
let resgisterButton =document.querySelector('.register-button');

async function registerCheck(e){
  e.preventDefault();
  if (!password){
    alert('password를 입력해주세요')
  }
  // if(password.value.length < 8 ){
  //   alert('비밀번호를 8자리 이상 입력해주세요')
  //   return;
  // }
  // if (password.value.length < 8 || password.value.length > 20){
  
  // }
}







// addEventListener('keyup',passwordCheck)
register.addEventListener('keyup',registerCheck)
allCheck.addEventListener('click',checkhandler)
submitCheck.addEventListener('click',clickIdHandler)
// document.querySelector('.pw-input').value.length>=9
// document.querySelector('.email-input').value.includes('@')
// document.querySelector('.email-input').value.includes(',')
// document.querySelector('.email-input').value.includes('.')








