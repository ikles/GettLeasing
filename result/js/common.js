jQuery(document).ready(function( $ ) {



  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });


  $('*[class$="__btn"], .btn__or').each(function () {
    $(this).append('<div class="flash_wrap-effects"><div class="flash_effects"></div></div>');
  })


//levels menu
  let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

  let body = document.querySelector('body');


  if ( isMobile.any() ) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.menu-arrow');
    arrow.forEach(function (item) {
      let thisLink = item.previousElementSibling;
      let subMenu = item.nextElementSibling;
      let thisArrow = item;

      thisLink.classList.add('parent');
      item.addEventListener('click', function () {      
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    });
  }
  else {
    body.classList.add('mouse')
  }


  $('.cases__slider').slick({
    infinite: true,    
    speed: 800,
    cssEase: 'ease-out',
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,    
    autoplaySpeed: 0,  
    centerMode: true,    
    arrows: true,    
    variableWidth: false,
    pauseOnHover: true,  
  });

  $('.rev__slider--1, .rev__slider--2').slick({
    infinite: true,    
    speed: 800,
    cssEase: 'ease-out',
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 4,    
    autoplaySpeed: 0,      
    arrows: true, 
    dots: true,   
    pauseOnHover: true, 
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    ,
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 2
      }
    },
    ]
  });


  $(".revvid").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      media : {}
    }
  });

  



  let currentSlide = $('.gal__slider').slick('slickCurrentSlide') + 1;
  const slideCount = $(".gal__slider").slick("getSlick").slideCount;


  $(".gal__slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".gal__actions span").text(currentSlide + 1);
  });


  $('.gal__actions span').html(currentSlide);
  $('.gal__actions div').html(slideCount);


/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/

  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link', '.modal-overlay_1', '.modal-close_1');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }


  $(function(){
    $(".calc_init").mortgageCalculator({

// Стоимость квартиры (руб.)
flatPriceSlider          :     '.apartment_price-slider', // Слайдер
flatPriceInput           :     '.apartment_price-input',  // Вывод значения
flatPriceMin             :     500000,  // От
flatPriceMax             :     50000000, // До

// Первоначальный взнос (руб.)
firstPaymentSlider      :     '.first_payment-slider', // Слайдер
firstPaymentInput       :     '.first_payment-input',  // Вывод значения
firstPaymentMin         :     0,        // От
firstPaymentMax         :     25000000, // До
firstPaymentCurrent     :     2000000,        // Значение по умолчанию

// Сумма кредита (руб.)

//del

credSumSlider           :     '.credit_sum-slider', // Слайдер
credSumInput            :     '.credit_sum-input', // Вывод значения
credSumCheckbox         :     '.credit_sum-checkbox',  // Переключатель (checkbox)
credSumMin              :     1000000,  // От
credSumMax              :     15000000, // До
credSumCurrent          :     5000000,  // Значение по умолчанию



// Срок кредита (мес.)
credDurationSlider      :     '.credit_duration-slider',   // Слайдер
credDurationInput       :     '.credit_duration-input',    // Вывод значения
credDurationCheckbox    :     '.credit_duration-checkbox', // Переключатель (checkbox)
credDurationMin         :     12,   // От
credDurationMax         :     60, // До
credDurationCurrent     :     24,  // Значение по умолчанию

// Ставка (%)
credRateSlider          :     '.credit_rate-slider', // Слайдер
credRateInput           :     '.credit_rate-input',  // Вывод значения
credRateMin             :     1,  // От
credRateMax             :     5, // До
credRateCurrent         :     0, // Значение по умолчанию

// Ежемесячный платеж (руб.)


//dell
monthPaymentSlider      :     '.monthly_payment-slider',   // Слайдер
monthPaymentInput       :     '.monthly_payment-input',    // Вывод значения
monthPaymentCheckbox    :     '.monthly_payment-checkbox', // Переключатель (checkbox)
monthPaymentMin         :     5000,   // От
monthPaymentMax         :     1000000 // До


});
  });


  /*$(".curr").on("keyup", function(){  
    const self = $(this);
    $(this).val(String(self.val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽');
  });*/





  /*$('input[type="text"].form-control').on('input', function() {
    const self = $(this);
    $(this).val(String(self.val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽');
  });*/ 








/*


 $('.credit_sum-input').next('.div-control').find('.div-control-value').html($('.credit_sum-input').val());
 $('.monthly_payment-input').next('.div-control').find('.div-control-value').html($('.monthly_payment-input').val());




 function inputCalcValueToDiv(controlElem, InputElem) {        
  $(InputElem).next('.div-control').find('.div-control-value').html($(InputElem).val());
  if ($(controlElem)) {
    $(controlElem).mouseup(function () {
      $(InputElem).next('.div-control').find('.div-control-value').html($(InputElem).val());
      $('.div-control').show();


      $('.credit_sum-input').next('.div-control').find('.div-control-value').html($('.credit_sum-input').val());
      $('.monthly_payment-input').next('.div-control').find('.div-control-value').html($('.monthly_payment-input').val());

    });
  }
}



inputCalcValueToDiv('.first_payment-slider', '.first_payment-input');
inputCalcValueToDiv('.credit_duration-slider', '.credit_duration-input');
inputCalcValueToDiv('.credit_rate-slider', '.credit_rate-input');
inputCalcValueToDiv('.apartment_price-slider', '.apartment_price-input');*/


  function tabs(element) {    
    $(element).find('.tabs__list-item').click(function () {
      $(element).find('.tabs__list-item').removeClass('active');
      $(this).addClass('active');    
      let num = $(this).index();
      $(element).find('.tabs__content-list-item').removeClass('active');
      $(element).find('.tabs__content-list-item').eq(num).addClass('active');    
    });
  }

  tabs('.rev__choice-tabs');


  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).next().slideToggle().toggleClass('open-content');
  });


}); //ready

