const swiper = new Swiper('.swiper', {
  autoplay: true,
  loop: true, // 무한루프로 걸어서 맨 앞으로 후루룩 돌아오는 걸 방지
  parallax:true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination', // 버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
  },
  navigation: { // 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})