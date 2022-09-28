<!-- ===== 確認ページ ===== -->
<?php include('./header.php'); ?>
<!-- ===== メイン ===== -->
<main class="l-main l-confirm">
  <section class="l-top">
    <div class="l-top__main-text">
      <h1 class="c-text__common__main-title">お問い合わせ</h1>
      <p class="c-text__common__sub-title">CONTACT</p>
    </div>
  </section>
  <section class="l-content">
    <div class="c-bread__whole">
      <div class="c-bread__cell past__position">
        <p class="c-bread__text c-text__bread__white">入力</p>
        <div class="c-bread__line past__position">
          <div class="c-bread__square past__position"></div>
        </div>
      </div>
      <div class="c-bread__cell current__position">
        <p class="c-bread__text c-text__bread__white">確認</p>
        <div class="c-bread__line current__position">
          <div class="c-bread__square current__position"></div>
        </div>
      </div>
      <div class="c-bread__cell future__position">
        <p class="c-bread__text c-text__bread__black">完了</p>
      </div>
    </div>
    <div class="l-content__message">
      <p class="c-text__common__message">以下の内容にお間違いなければ<br class="md-under">「送信」ボタンを押してください。</p>
    </div>
    <form method="POST" action="./confirm.php" class="l-content__form">
      <div class="l-content__form__radio">
        <label for="1" class="l-content__form__radio--cell">
          <input id="1" type="radio" name="about"><span class="c-text__form__cell--content l-content__form__radio--name">お問い合わせ</span>
        </label>
        <label for="2" class="l-content__form__radio--cell">
          <input id="2" type="radio" name="about"><span class="c-text__form__cell--content l-content__form__radio--name">お問い合わせ</span>
        </label>
        <label for="3" class="l-content__form__radio--cell">
          <input id="3" type="radio" name="about"><span class="c-text__form__cell--content l-content__form__radio--name">お問い合わせ</span>
        </label>
      </div>
      <div class="l-content__form__cell">
        <p class="l-content__form__cell--title c-text__form__cell--title">お名前<span class="l-content__form__require_mark">※</span></p>
        <label for="name">
          <input id="name" type="text" placeholder="山田 太郎" class="l-content__form__name" required>
        </label>
      </div>
      <div class="l-content__form__cell">
        <p class="l-content__form__cell--title c-text__form__cell--title">メールアドレス<span class="l-content__form__require_mark">※</span></p>
        <label for="email">
          <input id="email" type="text" placeholder="abc@example.com" class="l-content__form__email" required>
        </label>
      </div>
      <div class="l-content__form__cell">
        <p class="l-content__form__cell--title c-text__form__cell--title">メールアドレス(確認用)<span class="l-content__form__require_mark">※</span></p>
        <label for="email_confirm">
          <input id="email_confirm" type="text" placeholder="abc@example.com" class="l-content__form__email_confirm" required>
        </label>
      </div>
      <div class="l-content__form__cell">
        <p class="l-content__form__cell--title-text c-text__form__cell--title">自由記入欄<span class="l-content__form__require_mark">※</span></p>
        <label for="free">
          <textarea id="free" placeholder="ご記入ください。" required></textarea>
        </label>
      </div>
      <div class="l-content__form__confirm">
        <input type="submit" value="確認する" class="l-content__form__btn">
      </div>
      <div class="l-content__form__back">
        <a href="./contact.php" class="l-content__form__back-btn">修正する</a>
      </div>

    </form>

  </section>
</main>
<?php include('./footer.php'); ?>