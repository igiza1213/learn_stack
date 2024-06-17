$(function () {
  $(".mainmenu > li").on("mouseover", function () {
    $(this).find(".submenu").stop().slideDown(500);
  });

  $(".mainmenu > li").on("mouseout", function () {
    $(this).find(".submenu").stop().slideUp(500);
  });

  slide();

  tabmenu();

  popup();
});

function slide() {
  let curimg = 0;
  $(".inner").hide().first().show();

  setInterval(function () {
    let nxtimg = (curimg + 1) % 3;

    $(".inner").eq(curimg).fadeOut(1200);
    $(".inner").eq(nxtimg).fadeIn(1200);

    curimg = nxtimg;
  }, 3000);
}

function tabmenu() {
  const tabcon = $(".t_content > ul");

  tabcon.hide().eq(0).show();

  $(".tabnav > a").on("click", function () {
    const index = $(this).index();

    console.log(index);

    $(this).addClass("active").siblings().removeClass("active"); //클릭한 버튼에 클래스를 추가하고 나머지는 제거함
    tabcon.eq(index).show().siblings().hide();
  });
}

function popup() {
  $(".notice > li > a")
    .eq(0)
    .on("click", function () {
      $(".popup").show();
    });

  $(".close").on("click", function () {
    $(".popup").hide();
  });
}
