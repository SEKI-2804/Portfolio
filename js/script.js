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
    $(this).toggleClass('active-btn');//ボタン自身に activeクラスを付与し
    $("#nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active-btn');//ボタンの activeクラスを除去し
    $("#nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
  
});

// ローディング
  window.onload = function () {
    const cube = document.getElementById('loading');
    cube.classList.add('loaded');
  }

