const swiper1 = new Swiper(".recommend-list-swiper", {
  slidesPerView: 4,
  spaceBetween: 18,
  slidesPerGroup: 4,
  loop: false,
  speed: 680,

  navigation: {
    nextEl: ".recommend-list-next",
    prevEl: ".recommend-list-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  a11y: {
    prevSlideMessage: "이전 상품",
    nextSlideMessage: "다음 상품",
    firstSlideMessage: "첫번째 상품 입니다",
    lastSlideMessage: "마지막 상품 입니다",
  },
});

const swiper2 = new Swiper(".special-deal-list-siwper", {
  slidesPerView: 4,
  spaceBetween: 18,
  slidesPerGroup: 4,
  loop: false,
  speed: 680,

  navigation: {
    nextEl: ".special-deal-list-next",
    prevEl: ".special-deal-list-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  a11y: {
    prevSlideMessage: "이전 상품",
    nextSlideMessage: "다음 상품",
    firstSlideMessage: "첫번째 상품 입니다",
    lastSlideMessage: "마지막 상품 입니다",
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

  a11y: {
    prevSlideMessage: "이전 상품",
    nextSlideMessage: "다음 상품",
    firstSlideMessage: "첫번째 상품 입니다",
    lastSlideMessage: "마지막 상품 입니다",
  },
});
