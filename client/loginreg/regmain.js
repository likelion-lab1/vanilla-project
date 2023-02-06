// 전체 체크 전체 체크 해제

import {removeClass,insertAfter,getInputValue, getNode, getNodes,insertLast,showAlert,typeError, clearContents, addClass,tiger } from "../lib/index.js"


let allregister = getNode('.register')
let idCheck = getNode('#submit1')
let userIdError = getNode('.alert-error')
let emailCheck = getNode('#submit2')
let userEmailCheck = getNode('.alert-error-email')
let password = document.querySelector('.pw-input');
let email = document.querySelector('.email-input');
let resgisterButton =document.querySelector('.register-button');
let id = getNode('#nameField');





// 아이디 인증버튼
function clickIdHandler(e) {
  e.preventDefault();
  let name = getInputValue('#nameField')
  if(!name){
    // userID 라는 노드에 deactive 클래스를 지운다
    removeClass(userIdError, 'deactive') 
    console.log(userIdError);
    return
  } else {
    // 조건이 만족하면 userID에 deactive 클래스를 추가해준다.
    addClass(userIdError,'deactive')
  }
  if(name.length<6){
    alert('6글자 이상 입력해주세요')
  }else{
    alert('인증되었습니다')
    return
  }
}





// 전체항목 선태 
let allCheck = getNode('.all-check');
let subCheck = getNodes('.sub-check');

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
// 이메일 검사 
const REG = (/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);

function clickEmailHandler(e){
  e.preventDefault();
    let emailValue = getInputValue('#emailField')
    if(!emailValue){
      removeClass(userEmailCheck, 'deactive') 
      console.log(userEmailCheck);
      return
    } else{
      addClass(userEmailCheck,'deactive')
    }
    if(emailValue.match(REG)){
      alert('인증되었습니다.')

    }else if(!emailValue.match(REG)){
      alert('이메일 형식이 올바르지 않습니다.')
    }
}


// uniqueID 랜덤함수 생성

function welcomeAlert() {alert("회원이 되신것을 축하합니다.")}
function alreadyUserAlert() {alert("이미 존재하는 회원입니다.")}
function serverErrorAlert() {alert("알 수 없는 오류가 발생했습니다.")}

// signup에서 login으로 이동시킬 fetch 함수 //
function goToLogin() {
  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username": this.state.name,
      "password": this.state.password
    })
  })
  .then(res => {
    if (res.status === 200) {
      this.welcomeAlert();
      this.props.history.push('/');
    }
    if (res.status === 401) {
      this.alreadyUserAlert();
    }
    if (res.status === 400) {
      this.serverErrorAlert()
    }
  })
}


// 회원가입
//  function registerCheck(){
//   fetch("http://localhost:3000/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Test",
//     body: "I am testing!",
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//  }

 






  // if (!password){
  //   alert('password를 입력해주세요')
  // }


  // if(password.value.length < 8 ){
  //   alert('비밀번호를 8자리 이상 입력해주세요')
  //   return;
  // }
  // if (password.value.length < 8 || password.value.length > 20){
  
  // }








// addEventListener('keyup',passwordCheck)
// allInputValue.addEventListener('input',allregister)
resgisterButton.addEventListener('submit',goToLogin)
allCheck.addEventListener('click',checkhandler)
idCheck.addEventListener('click',clickIdHandler)
emailCheck.addEventListener('click',clickEmailHandler)
// document.querySelector('.pw-input').value.length>=9
// document.querySelector('.email-input').value.includes('@')
// document.querySelector('.email-input').value.includes(',')
// document.querySelector('.email-input').value.includes('.')








