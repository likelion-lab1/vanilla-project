// 쿠키 생성 유틸함수 만들기
// function setCookie(name,value,day){
//   // 지금으로부터 하루 후
//   let date = new Date(Date.now() + day);
//   date = date.toUTCString();
//   document.cookie = name + '=' + value; 'expires=' + date;
// }
// setCookie('user','mike',86400e3)

// 우리 사이트에 들어왔었는지 확인을 해야하기 때문에 만드는 유틸함수
// 원하는 쿠키가 있는지 확인(내가 원하는 name과 value가 있는지 확인)
// 특정문자를 기준으로 배열생성(.split)
// function getCookie(name) {
//   let cookies = document.cookie.split(';');

//   for(let i in cookies){

//     if(cookies[i].indexOf(name) > -1){
//       console.log(cookies[i]);
//     }
//   }

// }

// getCookie('mike');


// 쿠키 삭제



// 작업시작
let popupButtonLeft = document.querySelector('.popupButtonLeft');
// let popupImg = document.querySelector('.popupImg');
// let popupLink = document.querySelector('.popupLink');
// let popupButton = document.querySelector('.popupButton');
let popup = document.querySelector('.popup');


function setCookie(name,value,day){
  // 지금으로부터 하루 후
  // let date = new Date(Date.now() + day);
  // date = date.toUTCString();
  // document.cookie = name + '=' + value; 'expires=' + date;

  let date = new Date();
  date.setDate(date.getDate() + day);

  let mycookie = '';
  mycookie += name + '=' + value + ';';
  mycookie += 'Expires=' + date.toUTCString();

  document.cookie = mycookie
  
}
setCookie('user','tom',86400e3)

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
      let visited = true;
      console.log(visited);
    }
  }
    console.log(visited);

    if(visited === true){
      // 재방문
      popup.style.display = 'none';
    }else {
      // 신규방문
      popup.style.display = 'inlineblock';
    }
}

getCookie('tom');


popupButtonLeft.addEventListener('click',function(){
  // setCookie('user','mike',1)
  popup.style.display = 'none';
})












