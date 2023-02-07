const swiper1 = new Swiper(".recommend-list-swiper", {
  slidesPerView: 4,
  spaceBetween: 18,
  slidesPerGroup: 4,
  loop: false,
  speed: 500,

  navigation: {
    nextEl: ".recommend-list-next",
    prevEl: ".recommend-list-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const swiper2 = new Swiper(".special-deal-list-siwper", {
  slidesPerView: 4, // 슬라이드 갯수 나누기
  spaceBetween: 18, // 슬라이드 사이 간격
  slidesPerGroup: 4, // 슬라이드 4개씩 들어가기
  loop: true, // 무한루프로 걸어서 맨 앞으로 후루룩 돌아오는 걸 방지
  speed: 500,

  navigation: {
    // 버튼
    nextEl: ".special-deal-list-next",
    prevEl: ".special-deal-list-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const swiper3 = new Swiper(".recent-product-swiper", {
  direction: "vertical",
  slidesPerView: 2.5,
  spaceBetween: 4,
  speed: 300,
  navigation: {
    nextEl: ".recent-list-button-next",
    prevEl: ".recent-list-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  firstSlideMessage: "첫번째 상품 입니다",
  lastSlideMessage: "마지막 상품 입니다",
});
