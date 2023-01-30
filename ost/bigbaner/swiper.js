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


const swiper = new Swiper('.swiper', {
  autoplay: true,
  loop: true, // 무한루프로 걸어서 맨 앞으로 후루룩 돌아오는 걸 방지
  speed: 1000,
  pagination: {
    el: '.pagination',
  },
})
