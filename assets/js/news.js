function tabHandler() {
  const tabs = document.querySelectorAll('.l-content__tab__name');
  const news = document.querySelectorAll('.l-content__list__all');
  
  for(let i = 0; i < tabs.length; i++) {
    // デフォルト設定
    function defaultHandler() {
      tabs[0].classList.add('news__open');
      for(let i = 0; i < tabs.length; i++) {
        news[i].classList.add('news__active');
      }
    }
    // デフォルト解除
    function defaultReleaseHandler() {
      tabs[0].classList.remove('news__open');
      for(let i = 0; i < tabs.length; i++) {
        news[i].classList.remove('news__active');
      }
    }
    // アンダーライン
    function underLine() {
      for(let tab of tabs) {
        tab.classList.remove('news__open');
      }
      tabs[i].classList.add('news__open');
    }

    // ニュース
    function newsHandler() {
      for(let singleNews of news) {
        singleNews.classList.remove('news__active');
      }
        news[i].classList.add('news__active');
    }

    // クリックしたときの処理
    tabs[i].addEventListener('click', function() {
      defaultReleaseHandler();
      underLine();
      newsHandler();
      if(i === 0) {
        defaultHandler();
      }
    });
  }

  // 上記の動きをページが読み込まれたらすぐに動かす
  document.addEventListener('DOMContentLoaded', defaultHandler());
}
document.addEventListener('DOMContentLoaded', tabHandler());

function selectHandler() {
  const tags = document.querySelectorAll(".c-tag");
  let select = document.querySelector("select[name=tag]");
  let options = document.querySelectorAll("select[name=tag] option");
  let activeArticleLabels = document.querySelectorAll(".news__active");

  function selectChangeHandler() {

    select.addEventListener('change', function() {
      for(let option of options) {
        if(option.selected) {
          let optionText = option.textContent;

          for(let activeArticleLabel of activeArticleLabels) {
            console.log(activeArticleLabel.length);
          }
        }
      }
    });
  }
  selectChangeHandler();

  

}
document.addEventListener('DOMContentLoaded', selectHandler());