/*
$('document').ready(function() {
    $('#show2').click(function() {
        $('#two').slideToggle();

        $('html, body').animate({
      scrollTop: $("#two").offset().top + $('window').height()
    }, 2000);
    });
}); */


$("h1").on("click",function()
{
  console.log("rakesh");
  $(".homepagetext").slideDown().animate({opacity:0.1});
});
