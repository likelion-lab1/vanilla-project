let popupBtn = document.querySelector('.popupButtonRight');
function handler(){
  let AD = document.querySelector('.popup');
  AD.style.display = 'none';
}
popupBtn.addEventListener('click',handler);

// 쿠키 생성 함수
	function setCookie(cName, cValue, cDay){
		var expire = new Date();
		expire.setDate(expire.getDate() + cDay);
		cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해
		if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
		document.cookie = cookies;
	}
    

	// 쿠키 가져오기 함수
	function getCookie(cName) {
		var x, y; var val = document.cookie.split(';');
		for (var i = 0; i < val.length; i++) {
			x = val[i].substr(0, val[i].indexOf('='));
			y = val[i].substr(val[i].indexOf('=') + 1);
			x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
			if (x == cName) {
				return unescape(y);
				// unescape로 디코딩 후 값 리턴
				}
		}
	}


 // 오늘 하루 보지 않기 닫기
	function todaycloseWin(cookiename) {
		setCookie(cookiename, "done" , 1);     // 저장될 쿠키명 , 쿠키 value값 , 기간
		var popId = 'popup' + cookiename.split('_')[1];
 		document.querySelector(popId).style.display = "none";    // 팝업창 아이디
	}
