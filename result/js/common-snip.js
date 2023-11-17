jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $('.wrapper').prepend('<span class="eye-3"></span>');


  $('.eye-3').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('active');
  });



  function popup(openLink, windowEl, closeEl) {
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl, '.modal-overlay').click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
  }








  

}); //ready

