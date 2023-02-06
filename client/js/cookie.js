import {  getNode  } from "../lib/index.js"


// 작업시작
let popupButtonLeft = getNode('.popup-button-left');
let popup = getNode('.popup');


function setCookie(name,value,day){

  let date = new Date();
  date.setDate(date.getDate() + day);

  let mycookie = '';
  mycookie += name + '=' + value + ';';
  mycookie += 'Expires=' + date.toUTCString();

  document.cookie = mycookie
  
}

//쿠키 삭제
function delCookie(name){
  setCookie(name, "", {
    'max-age': -1
  })
}

// 쿠키 확인


function getCookie(name) {
  let cookies = document.cookie.split(';');
  console.log(cookies);
  let visited = false;

  for(let i in cookies){

    if(cookies[i].indexOf(name) > -1){
      visited = true;
      console.log(visited);
    }
  }

    if(visited){
      // 재방문
      popup.style.display = 'none';
    }else {
      // 신규방문
      popup.style.display = 'flex';
    }
}

getCookie('mike');


popupButtonLeft.addEventListener('click',function(){
  setCookie('user','mike',1)
  popup.style.display = 'none';
})












