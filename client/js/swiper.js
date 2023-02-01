const swiper = new Swiper(".swiper", {
  slidesPerView: 4, // 슬라이드 갯수 나누기
  spaceBetween: 30, // 슬라이드 사이 간격
  slidesPerGroup: 4, // 슬라이드 4개씩 들어가기
  loop: true, // 무한루프로 걸어서 맨 앞으로 후루룩 돌아오는 걸 방지
  speed: 500,
  pagination: {
    el: ".swiper-pagination", // 버튼을 담을 태그 설정
    type: "fraction", // 기본 슬라이더를 fraction으로 변경
  },
  navigation: {
    // 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
