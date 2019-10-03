$(document).ready(function(){

  $("#skills").click(function() {
    $('html, body').animate({
      scrollTop: $('#scrollToSkills').offset().top
    }, 500);
  });

  $("#projects").click(function() {
    $('html, body').animate({
      scrollTop: $('#scrollToProjects').offset().top
    }, 500);
  });

  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $('#scrollToAbout').offset().top
    }, 500);
  });

  $("#intro").click(function() {
    $('html, body').animate({
      scrollTop: $('#scrollToIntro').offset().top
    }, 500);
  });

});
