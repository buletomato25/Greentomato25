$(function () {
  function activateTabFromHash() {
    // URLのハッシュ部分がある場合
    if (window.location.hash) {
      var target = $(window.location.hash);
      if (target.length) {
        $("#tab-btn a").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $("a[data-tab='" + window.location.hash + "']").addClass("is-active"); // ハッシュに対応するタブリンクにis-activeクラスを追加
        $("#tab-contents .tab-contents-item").removeClass("is-active"); //もともとついているis-activeクラスを取り除き、
        target.addClass("is-active"); // ハッシュに対応するタブ内容を表示
      }
    }
  }

  // 初期設定: 最初のタブをアクティブにする
  $("#tab-btn .btn:first-of-type a").addClass("is-active"); //最初のbtnのaにis-activeクラスを追加
  $("#tab-contents .tab-contents-item:first-of-type").addClass("is-active"); //最初の.tab-contents-itemにis-activeクラスを追加

  // ページ読み込み時にハッシュ値があればそのタブをアクティブにする
  activateTabFromHash();

  // タブクリック時の処理
  $("#tab-btn a").click(function () {
    $("#tab-btn a").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
    $(this).addClass("is-active"); //クリックしたタブにis-activeクラスを追加
    $("#tab-contents .tab-contents-item").removeClass("is-active"); //もともとついているis-activeクラスを取り除き、
    $($(this).attr("data-tab")).addClass("is-active"); // クリックしたタブに対応する内容を表示
    return false; // デフォルトのリンク動作を無効にする
  });

  // URLのハッシュ部分が変わった場合にも対応
  $(window).on("hashchange", function () {
    activateTabFromHash();
  });
});
