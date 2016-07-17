
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

$(function () {

  $('.adpic, .p01, .x01').imgLiquid ({verticalAlign: 'center'});
  
  $('#menu > div').click (function () {
    if (!$('#menu').hasClass ('show')) return $('#menu').addClass ('show');
    if ($(this).hasClass ('sp')) return $('#menu').removeClass ('show');
     $(this).addClass ('sp').siblings ().removeClass ('sp');
  });
  $(window).scroll (function () {
    var t = $(this).scrollTop ();
    if (t > 10) $('#top').addClass ('show');
    else $('#top').removeClass ('show');
  });

  $('#top').click (function () {
    $('body').animate ({ scrollTop: 0 }, 'slow');
  });

});