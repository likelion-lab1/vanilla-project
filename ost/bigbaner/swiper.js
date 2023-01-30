const data = [
  {
    id: 1,
    src: "banner01.png",
    alt: "부드러운 달콤한 컬리 과일 가게",
  },
  {
    id: 2,
    src: "banner02.png",
    alt: "한눈에 보는 이달의 카드 혜택",
  },
  {
    id: 3,
    src: "banner03.png",
    alt: "KURLY PURPLE WEEK",
  },
  {
    id: 4,
    src: "banner05.png",
    alt: "컬리 장보기의 특권 이 주의 특가 한 눈에 보기",
  },
];

const swiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  parallax:true,
  speed: 2000,
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "bullet", // bullet 이라고 클래스를 바꾼것
    bulletActiveClass: "is-active", // active 클래스를 바꾼것
  },
});
