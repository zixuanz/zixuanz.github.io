$("document").ready(function(){
  $(".aside-inner").hover(function(){
    $(this).toggleClass("cursor");
  });

  $(".aside-inner").click(function(){
    $('html, body').stop().animate({
        scrollTop: 0
    }, 500);
  });
});
