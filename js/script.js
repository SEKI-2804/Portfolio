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

jQuery('.rain').raindrops(//指定したエリアに描画
  {
    color: '#010B22',//水の色を指定
    canvasHeight: 150, //canvasの高さを指定。初期値は親の高さの50%。
    waveLength: 100,//波の長さ(広がり)を指定。数値が大きいほど長さは小さくなる。初期値は340。
    waveHeight: 140,//波の高さを指定。数値が大きいほど高さは高くなる。初期値は100。
    rippleSpeed: 0.05, //波紋のスピードを指定。数値が大きいほど波紋は速くなる。初期値は0.1。
    density: 0.03,//水の波紋の量を指定。数値が大きいほど波紋は小さくなる。初期値は0.02。
    frequency: 4//雨粒の落ちる頻度を指定。数値が大きいほど頻度は多くなる。初期値は3。
  }
);
