const swiper1 = new Swiper(".swiper-product-1", {
  slidesPerView: 4, // 슬라이드 갯수 나누기
  spaceBetween: 30, // 슬라이드 사이 간격
  slidesPerGroup: 4, // 슬라이드 4개씩 들어가기
  watchOverflow: true,
  observer: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination", // 버튼을 담을 태그 설정
    type: "fraction", // 기본 슬라이더를 fraction으로 변경
  },
  navigation: {
    // 버튼
    nextEl: ".product-next-1",
    prevEl: ".product-prev-1",
  },
});

const swiper2 = new Swiper(".swiper-product-2", {
  slidesPerView: 4, // 슬라이드 갯수 나누기
  spaceBetween: 30, // 슬라이드 사이 간격
  slidesPerGroup: 4, // 슬라이드 4개씩 들어가기
  watchOverflow: true,
  observer: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination", // 버튼을 담을 태그 설정
    type: "fraction", // 기본 슬라이더를 fraction으로 변경
  },
  navigation: {
    // 버튼
    nextEl: ".product-next-2",
    prevEl: ".product-prev-2",
  },
});
