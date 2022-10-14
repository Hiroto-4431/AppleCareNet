/* ===============================================
# ハンバーガーメニュー
=============================================== */
function HMGHandler() {
  const HMGButton = document.querySelector(".l-hmg__btn");
  const HMGLines = document.querySelectorAll(".l-hmg__btn__content--line");
  const HMGContent = document.querySelector('.l-hmg__content');
  const Header = document.querySelector(".l-header");
  const ContactSpace = document.querySelector(".l-header__contact");
  const Main = document.querySelector('.l-main');

  // ハンバーガーマークの変更
  const changeChevronBack = function() {
    HMGButton.classList.toggle("open-btnBack");
  }

  // コンテンツを開く
  const contentsOpen = function() {
    HMGContent.classList.toggle("open-hmgContent");
  }

  // ヘッダーの変更
  const headerHandler = function() {
    Header.classList.toggle("open-header");
  }

  const mainHandler = function() {
    Main.classList.toggle('pointer-none');
  }

  // スクロールロック
  const scrollLock = function() {
    if(HMGButton.classList.contains("open-btnBack")) {
      bodyScrollLock.disableBodyScroll(".l-hmg__content");
    } else {
      bodyScrollLock.clearAllBodyScrollLocks();
    }
  }

  // お問い合わせ
  const contactHandler = function() {
    ContactSpace.classList.toggle("open-contact");
  }

  // クリックしたときの処理
  const clickHandler = function() {
    changeChevronBack();
    contentsOpen();
    headerHandler();
    scrollLock();
    mainHandler();
    contactHandler();
  }

  // クリックされたときの処理
  HMGButton.addEventListener("click", function () {
    clickHandler();
    for(let i = 0; i <= HMGLines.length; i++) {
      HMGLines[i].classList.toggle("open-line");
    }
  });

  // 中のリンクを押したときの処理
  const links = document.querySelectorAll('.l-hmg__content a');
  for(let i = 0; i <= links.length; i++) {
    links[i].addEventListener('click', function() {
      clickHandler();
      for(let i = 0; i <= HMGLines.length; i++) {
        HMGLines[i].classList.toggle("open-line");
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', HMGHandler());