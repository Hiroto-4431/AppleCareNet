const attempt = new Swiper(".l-attempt .swiper", {
  loop: true, /* 無限ループ */
  slidesPerView: 'auto', /* 表示枚数 */
  spaceBetween: 58, /* 間隔 */
  navigation: { /* ナビゲーション */
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const recipe = new Swiper(".l-recipe .swiper", {
  loop: true, /* 無限ループ */
  slidesPerView: 'auto', /* 表示枚数 */
  spaceBetween: 40, /* 間隔 */
  navigation: { /* ナビゲーション */
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});