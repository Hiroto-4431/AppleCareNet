/* ===============================================
# ハンバーガーメニュー
=============================================== */
const HMGButton = document.querySelector(".l-hmg__btn");

// ハンガーメニューボタンをクリックしたら
HMGButton.addEventListener("click", function () {
  const Header = document.querySelector(".l-header");
  const HMGLines = document.querySelectorAll(".l-hmg__btn__content--line");
  const ContactSpace = document.querySelector(".l-header__contact");
  // const HMGContent = document.querySelector(".l-hmg__content");
  for (const HMGLine of HMGLines) {
    HMGLine.classList.toggle("open-line");
    if (HMGLine.classList.contains("open-line")) {
      // ハンバーガーメニューが開いたとき
      Header.classList.add("open-header");
      ContactSpace.classList.add("open-contact");
      // HMGContent.classList.add("open-hmgContent");
      HMGButton.classList.add("open-btnBack");
      bodyScrollLock.disableBodyScroll(".l-hmg__content");
    } else {
      // ハンバーガーメニューを閉じたとき
      Header.classList.remove("open-header");
      ContactSpace.classList.remove("open-contact");
      // HMGContent.classList.remove("open-hmgContent");
      HMGButton.classList.remove("open-btnBack");
      bodyScrollLock.clearAllBodyScrollLocks();
    }
  }
});
