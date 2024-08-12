
$(function () {

	// ハンバーガーメニューをクリックした時
	$(".hamburger").on("click", function () {
		$("header").toggleClass("open");
	});
	// メニューのリンクをクリックした時
	$(".navi a").on("click", function () {
		$("header").toggleClass("open");
	});

	//アコーディオンをクリックした時の動作
	$('.question-title').on('click', function () {//タイトル要素をクリックしたら
		var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
		$(findElm).slideToggle();//アコーディオンの上下動作

		if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
			$(this).removeClass('close');//クラス名を除去し
		} else {//それ以外は
			$(this).addClass('close');//クラス名closeを付与
		}
	});

	//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
	$(window).on('load', function () {
		$('.question li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
		$(".open").each(function (index, element) {	//openクラスを取得
			var Title = $(element).children('.question-title');	//openクラスの子要素のtitleクラスを取得
			$(Title).addClass('close');				//タイトルにクラス名closeを付与し
			var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
			$(Box).slideDown(500);					//アコーディオンを開く
		});
	});

	function PageTopAnime() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {//上から100pxスクロールしたら
			$('.page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
			$('.page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
		} else {
			if ($('.page-top').hasClass('UpMove')) {//すでに#page-topにUpMoveというクラス名がついていたら
				$('.page-top').removeClass('UpMove');//UpMoveというクラス名を除き
				$('.page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
			}
		}
	}

	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function () {
		PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
	});

	// ページが読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function () {
		PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
	});


	// #page-topをクリックした際の設定
	$('.page-top').click(function () {
		var scroll = $(window).scrollTop(); //スクロール値を取得
		if (scroll > 0) {
			$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
			$('body,html').animate({
				scrollTop: 0
			}, 2000, function () {//スクロールの速さ。数字が大きくなるほど遅くなる
				$('.page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
			});
		}
		return false;//リンク自体の無効化
	});

	$(window).scroll(function () {

    $(".inview-balloon").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + (100)) {
        $(this).addClass("balloon");
      }
    });
  });


});