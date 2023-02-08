const swiperB = new Swiper(".big-banner-swiper", {
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 2000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop: true, // 무한루프로 걸어서 맨 앞으로 후루룩 돌아오는 걸 방지
  parallax: true, // 시차를 이용한 효과
  speed: 1000,
  pagination: {
    el: ".swiper-pagination", // 버튼을 담을 태그 설정
    type: "fraction", // 기본 슬라이더를 fraction으로 변경
  },
  navigation: {
    // 버튼
    nextEl: ".big-banner-next",
    prevEl: ".big-banner-prev",
  },
  a11y: {
    prevEl: "Previous slide",
    nextEl: "Next slide",
  },
});
