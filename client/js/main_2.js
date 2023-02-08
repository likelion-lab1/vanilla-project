/** 빅배너 Swiper */

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

/** 메인 Main Swiper */

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

/** 메인 aside Swiper */

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

/* Add cart 모달창 팝업 */

const openButton = document.querySelector("#cart1");
const container = document.querySelector(".add-cart-hidden");
const addCartOverlay = document.querySelector(".add-cart-overlay");
const closeButton = document.querySelector("#close");

openButton.addEventListener("click", () => {
  container.style.display = "flex";
  container.focus();
  // openButton.style.display = "none";
});
closeButton.addEventListener("click", () => {
  container.style.display = "none";
  openButton.style.display = "block";
});
addCartOverlay.addEventListener("click", () => {
  container.style.display = "none";
  openButton.style.display = "block";
});
container.addEventListener("keydown", (e) => {
  if (e.key === "Escape") container.style.display = "none";
});

//Add cart bubble
let addCartButton = document.querySelector("#in-cart");

function bubbleHandler() {
  let bubble1 = document.querySelector("#add-cart-bubble");
  bubble1.style.display = "flex";
  container.style.display = "none";
  openButton.style.display = "block";
  setTimeout(function () {
    bubble1.style.display = "none";
  }, 4000);
}

addCartButton.addEventListener("click", bubbleHandler);

// Add cart 상품 수량 합계

let plus = document.querySelector(".add-quantiy");
let minus = document.querySelector(".minus-quantity");
let result = document.querySelector("#add-cart-result");
let totalCost = document.querySelector(".total-cost");
let i = 1;

plus.addEventListener("click", () => {
  i++;
  result.textContent = i;
  let totalCostNum = i * 4980;
  totalCost.textContent = totalCostNum.toLocaleString();
});

minus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    result.textContent = i;
    let totalCostNum = i * 4980;
    totalCost.textContent = totalCostNum.toLocaleString();
  } else {
    totalCost.textContent = totalCostNum.toLocaleString(i * 4980);
  }
});
