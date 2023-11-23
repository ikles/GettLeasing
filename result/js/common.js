jQuery(document).ready(function( $ ) {



  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".header__col").click(function (e) {
    e.stopPropagation();
  });


  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });

  $('.burger__close').click(function () {    
    $('body').removeClass("body-open");
    $('.header__col').removeClass("open");    
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
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    },    
    {
      breakpoint: 571,
      settings: {
        slidesToShow: 2
      }
    },    
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 1
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

  
  $(".tel").mask("+ 7 (999)-999-99-99");


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



  $(function() {
    $('#dg-container').gallery({      
      interval  : 500  
    });
  });


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

  popup('.header__btn', '.modal-overlay_8', '.modal-close_8');
  popup('.leasing__it .btn__or', '.modal-overlay_8', '.modal-close_8');
  popup('.leasing__get .btn__or', '.modal-overlay_7', '.modal-close_7');
  popup('.answ__btn', '.modal-overlay_7', '.modal-close_7');
  
  popup('.leasing__modal-i_1', '.modal-overlay_1', '.modal-close_1');
  popup('.leasing__modal-i_2', '.modal-overlay_2', '.modal-close_2');
  popup('.leasing__modal-i_3', '.modal-overlay_3', '.modal-close_3');
  popup('.leasing__modal-i_4', '.modal-overlay_4', '.modal-close_4');
  popup('.leasing__modal-i_5', '.modal-overlay_5', '.modal-close_5');
  popup('.leasing__modal-i_6', '.modal-overlay_6', '.modal-close_6');






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




  
  var touchStartX = 0;
  var touchEndX = 0;

  $('.dg-container').on('touchstart', function(eStart) {
    touchStartX = eStart.originalEvent.touches[0].pageX;
  });

  $('.dg-container').on('touchend', function(eEnd) {
    touchEndX = eEnd.originalEvent.changedTouches[0].pageX;
    var swipeDirection = getSwipeDirection(touchStartX, touchEndX);

    // Ваш код для обработки направления свайпа
    if (swipeDirection === 'left') {
      /*console.log('Свайп влево');*/
      $('.dg-next').trigger('click');
    } else if (swipeDirection === 'right') {
      /*console.log('Свайп вправо');*/
      $('.dg-prev').trigger('click');
    }
  });

  function getSwipeDirection(startX, endX) {
    var sensitivity = 50; // Чувствительность свайпа

    if (endX - startX > sensitivity) {
      return 'right';
    } else if (startX - endX > sensitivity) {
      return 'left';
    }

    // Если не определено направление, возвращаем null или другое значение по умолчанию
    return null;
  }



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

