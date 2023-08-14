$(function () {

  //ページ内スクロール
  var $nav = $(".header");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      600,
      "swing"
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  //ハンバーガーメニュー
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

  $(function () {
    $('.hamburger').click(function () {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
        $('.globalMenuSp').addClass('active');
      } else {
        $('.globalMenuSp').removeClass('active');
      }
    });
  });

  // //fadeup
  // // 動きのきっかけとなるアニメーションの名前を定義
  // function fadeAnime() {

  //   $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
  //     var elemPos = $(this).offset().top - 40;//要素より、40px上の
  //     var scroll = $(window).scrollTop();
  //     var windowHeight = $(window).height();
  //     if (scroll >= elemPos - windowHeight) {
  //       $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
  //     }
  //   });
  // }

  // // 画面をスクロールをしたら動かしたい場合の記述
  // $(window).scroll(function () {
  //   fadeAnime();/* アニメーション用の関数を呼ぶ*/
  // });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // // 画面が読み込まれたらすぐに動かしたい場合の記述
  // $(window).on('load', function () {
  //   fadeAnime();/* アニメーション用の関数を呼ぶ*/
  // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
});

// ローディング
  window.onload = function () {
    const cube = document.getElementById('loading');
    cube.classList.add('loaded');
  }

