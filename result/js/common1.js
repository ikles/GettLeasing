jQuery(document).ready(function ($) {
  var pattern = '^todos[0-9]';

  var lcs = localStorage;

  $('#active *').each(function () {
    let cls1 = $(this).attr('class');
    if (!$(this).hasClass('contain')) {
      $(this).attr('class', 'advs' + cls1);
      console.log(cls1);
    }
  });

  if (localStorage.getItem('todos_num') !== null) {
  } else {
    localStorage.setItem('todos_num', 0);
  }

  var i = localStorage.todos_num;

  //$('.wrapper').html(window.localStorage['todos5']);

  /*
if ( $('').val().search(pattern) != 0 ) {

}
*/
  /*
for (key in lcs) {
  if ( lcs[key].search(pattern) != 0 ) {
    console.log(lcs[key]);
  }
}
*/

  $('body').append('<div class="keylinks341-w"> <ul class="keylinks341"></ul></div>');

  /********************/
  /********************/
  /********************/
  /********************/

  /*
for (var key in lcs) {
  //lcs[key];  
  if ( key.search(pattern) == 0 ) {

    $('.keylinks341').append('<li class="'+key+'"><span>'+key+'</span><li>'); 
  }
}
*/

  for (var i = 0; i < lcs.todos_num; i++) {
    //console.log(localStorage.getItem('todos'+i));

    $('.keylinks341').append('<li class="' + i + '"><span>' + 'todos' + i + '</span><li>');
  }

  /********************/
  /********************/
  /********************/
  /********************/
  /********************/

  /*localStorage.clear();*/

  /*
  $('*').removeAttr('style');
  $('*').removeAttr('id');
  */

  /**
  $('input[type="submit"]').click(function (e) {
    e.preventDefault();
  });
  */
  /*
  $('label').click(function (e) {
    e.preventDefault();
  });
  */

  $('a').click(function (e) {
    e.preventDefault();
  });

  function css_values() {
    $('.width').val('');
    var css_width = $('#active').css('width');
    $('.width').attr('placeholder', css_width);

    $('.radius_input').val('');
    var radius_input = $('#active').css('border-radius');
    $('.radius_input').attr('placeholder', radius_input);

    $('.color').val('');
    var css_color = $('#active').css('color');
    $('.color').attr('placeholder', css_color);

    $('.bgColor').val('');
    var css_bgColor = $('#active').css('background-color');
    $('.bgColor').attr('placeholder', css_bgColor);

    $('.fSize').val('');
    var css_fSize = $('#active').css('font-size');
    $('.fSize').attr('placeholder', css_fSize);

    $('.fWeight').val('');
    var css_fWeight = $('#active').css('font-weight');
    $('.fWeight').attr('placeholder', css_fWeight);

    $('.bordcol').val('');
    $('.bordwidth').val('');

    var css_bordwidth = $('#active').css('border-width');
    $('.bordwidth').attr('placeholder', css_bordwidth);

    $('.height').val('');
    var css_height = $('#active').css('height');
    $('.height').attr('placeholder', css_height);

    $('.minheight').val('');
    var css_minheight = $('#active').css('min-height');
    $('.minheight').attr('placeholder', css_minheight);

    $('.maxwidth').val('');
    var css_maxwidth = $('#active').css('max-width');
    $('.maxwidth').attr('placeholder', css_maxwidth);

    $('.line_height').val('');
    var css_line_height = $('#active').css('line-height');
    $('.line_height').attr('placeholder', css_line_height);

    $('.padmargs').val('');
    var css_padmargs = $('#active').css('margin-left');
    $('.padmargs').attr('placeholder', css_padmargs);




    $('.gap').val('');
    var css_gap = $('#active').css('gap');
    $('.gap').attr('placeholder', css_gap);

    $('.margin_top').val('');
    var css_margin_top = $('#active').css('margin-top');
    $('.margin_top').attr('placeholder', css_margin_top);

    $('.margin_right').val('');
    var css_margin_right = $('#active').css('margin-right');
    $('.margin_right').attr('placeholder', css_margin_right);

    $('.margin_bottom').val('');
    var css_margin_bottom = $('#active').css('margin-bottom');
    $('.margin_bottom').attr('placeholder', css_margin_bottom);

    $('.margin_left').val('');
    var css_margin_left = $('#active').css('margin-left');
    $('.margin_left').attr('placeholder', css_margin_left);

    $('.text_val_add').val('');
    var text_val_add = $('#active').html();
    $('.text_val_add').val(text_val_add);

    $('.text_val_add_2').val('');
    var text_val_add_2 = $('#active').html();
    $('.text_val_add_2').val(text_val_add_2);

    $('.padding_top').val('');
    var css_padding_top = $('#active').css('padding-top');
    $('.padding_top').attr('placeholder', css_padding_top);

    $('.padding_right').val('');
    var css_padding_right = $('#active').css('padding-right');
    $('.padding_right').attr('placeholder', css_padding_right);

    $('.padding_bottom').val('');
    var css_padding_bottom = $('#active').css('padding-bottom');
    $('.padding_bottom').attr('placeholder', css_padding_bottom);

    $('.padding_left').val('');
    var css_padding_left = $('#active').css('padding-left');
    $('.padding_left').attr('placeholder', css_padding_left);

    $('.position_top').val('');
    var css_position_top = $('#active').css('top');
    $('.position_top').attr('placeholder', css_position_top);

    $('.position_right').val('');
    var css_position_right = $('#active').css('right');
    $('.position_right').attr('placeholder', css_position_right);

    $('.position_bottom').val('');
    var css_position_bottom = $('#active').css('bottom');
    $('.position_bottom').attr('placeholder', css_position_bottom);

    $('.position_left').val('');
    var css_position_left = $('#active').css('left');
    $('.position_left').attr('placeholder', css_position_left);

    $('.z_index').val('');
    var css_z_index = $('#active').css('z-index');
    $('.z_index').attr('placeholder', css_z_index);

    $('.opacity').val('');
    var css_opacity = $('#active').css('opacity');
    $('.opacity').attr('placeholder', css_opacity);

    $('.placeholder').val('');
    var css_placeholder = $('#active').attr('placeholder');
    $('.placeholder').attr('placeholder', css_placeholder);

    $('.submit_value').val('');
    var css_svalue = $('#active').attr('value');
    $('.submit_value').attr('placeholder', css_svalue);

    $('.tal').prop('checked', false);
    if ($('#active').css('text-align') == 'left') {
      $('.tal').prop('checked', true);
    }

    $('.objcov').prop('checked', false);
    if ($('#active').css('object-fit') == 'cover') {
      $('.objcov').prop('checked', true);
    }

    $('.flwrap').prop('checked', false);
    if ($('#active').css('flex-wrap') == 'wrap') {
      $('.flwrap').prop('checked', true);
    }

    $('.flwrap2').prop('checked', false);
    if ($('#active').css('flex-wrap') == 'nowrap') {
      $('.flwrap2').prop('checked', true);
    }

    $('.grow_none').prop('checked', false);
    if ($('#active').css('flex') == '0 0 auto') {
      $('.grow_none').prop('checked', true);
    }

    $('.grow1').prop('checked', false);
    if ($('#active').css('flex') == '1 1 auto') {
      $('.grow1').prop('checked', true);
    }

    $('.tac').prop('checked', false);
    if ($('#active').css('text-align') == 'center') {
      $('.tac').prop('checked', true);
    }

    $('.tar').prop('checked', false);
    if ($('#active').css('text-align') == 'right') {
      $('.tar').prop('checked', true);
    }

    $('.bordaround').prop('checked', false);
    $('.bordright').prop('checked', false);
    $('.bordtop').prop('checked', false);
    $('.bordbot').prop('checked', false);
    $('.bordleft').prop('checked', false);

    $('.dblock').prop('checked', false);
    if ($('#active').css('display') == 'block') {
      $('.dblock').prop('checked', true);
    }
    $('.dinline').prop('checked', false);
    if ($('#active').css('display') == 'inline') {
      $('.dinline').prop('checked', true);
    }
    $('.dinlineblock').prop('checked', false);
    if ($('#active').css('display') == 'inline-block') {
      $('.dinlineblock').prop('checked', true);
    }

    $('.fd_col').prop('checked', false);
    if ($('#active').css('flex-deriction') == 'column') {
      $('.fd_col').prop('checked', true);
    }

    $('.fd_row').prop('checked', false);
    if ($('#active').css('flex-deriction') == 'row') {
      $('.fd_row').prop('checked', true);
    }

    $('.dflex').prop('checked', false);
    if ($('#active').css('display') == 'flex') {
      $('.dflex').prop('checked', true);
    }

    $('.ai1').prop('checked', false);
    if ($('#active').css('align-items') == 'flex-start') {
      $('.ai1').prop('checked', true);
    }

    $('.ai2').prop('checked', false);
    if ($('#active').css('align-items') == 'center') {
      $('.ai2').prop('checked', true);
    }

    $('.ai3').prop('checked', false);
    if ($('#active').css('align-items') == 'flex-end') {
      $('.ai3').prop('checked', true);
    }

    $('.jc1').prop('checked', false);
    if ($('#active').css('justify-content') == 'flex-start') {
      $('.jc1').prop('checked', true);
    }

    $('.jc2').prop('checked', false);
    if ($('#active').css('justify-content') == 'space-between') {
      $('.jc2').prop('checked', true);
    }

    $('.jc3').prop('checked', false);
    if ($('#active').css('justify-content') == 'flex-end') {
      $('.jc3').prop('checked', true);
    }

    $('.jc4').prop('checked', false);
    if ($('#active').css('justify-content') == 'center') {
      $('.jc4').prop('checked', true);
    }

    $('.dnone').prop('checked', false);
    if ($('#active').css('display') == 'none') {
      $('.dnone').prop('checked', true);
    }

    $('.iflex').prop('checked', false);
    if ($('#active').css('display') == 'inline-flex') {
      $('.iflex').prop('checked', true);
    }

    $('.mla').prop('checked', false);
    $('.mra').prop('checked', false);
    $('.ma').prop('checked', false);
    $('.mha').prop('checked', false);
    if ($('#active').css('min-height') == 'auto') {
      $('.mha').prop('checked', true);
    }

    $('.fsi').prop('checked', false);
    if ($('#active').css('font-style') == 'italic') {
      $('.fsi').prop('checked', true);
    }

    $('.bornone').prop('checked', false);
    if ($('#active').css('border') == 'none') {
      $('.bornone').prop('checked', true);
    }

    $('.float1').prop('checked', false);
    if ($('#active').css('float') == 'left') {
      $('.float1').prop('checked', true);
    }

    $('.float2').prop('checked', false);
    if ($('#active').css('float') == 'right') {
      $('.float2').prop('checked', true);
    }

    $('.float3').prop('checked', false);
    if ($('#active').css('float') == 'none') {
      $('.float3').prop('checked', true);
    }

    $('.ltop').prop('checked', false);
    if ($('#active').css('background-position') == 'left top') {
      $('.ltop').prop('checked', true);
    }

    $('.topce').prop('checked', false);
    if ($('#active').css('background-position') == 'top center') {
      $('.topce').prop('checked', true);
    }

    $('.ritop').prop('checked', false);
    if ($('#active').css('background-position') == 'right top') {
      $('.ritop').prop('checked', true);
    }

    $('.ricentr').prop('checked', false);
    if ($('#active').css('background-position') == 'right 0px center') {
      $('.ricentr').prop('checked', true);
    }

    $('.ribot').prop('checked', false);
    if ($('#active').css('background-position') == 'right bottom') {
      $('.ribot').prop('checked', true);
    }

    $('.botcentr').prop('checked', false);
    if ($('#active').css('background-position') == 'bottom center') {
      $('.botcentr').prop('checked', true);
    }

    $('.lebot').prop('checked', false);
    if ($('#active').css('background-position') == 'left bottom') {
      $('.lebot').prop('checked', true);
    }

    $('.lecentr').prop('checked', false);
    if ($('#active').css('background-position') == 'left center') {
      $('.lecentr').prop('checked', true);
    }

    $('.overflow1').prop('checked', false);

    $('.overflow2').prop('checked', false);

    $('.posre').prop('checked', false);
    if ($('#active').css('position') == 'relative') {
      $('.posre').prop('checked', true);
    }
    $('.posa').prop('checked', false);
    if ($('#active').css('position') == 'absolute') {
      $('.posa').prop('checked', true);
    }
    $('.possta').prop('checked', false);
  }

  /*
$('.form-my2').append('<span style="cursor: pointer; position: absolute; left: 140px; top: 115px; margin-right: 0; width: 84px;" class="butospan stroove">st id rem</span>');

$('.form-my2').append('<span style="cursor: pointer; position: absolute; left: 140px; top: 170px; margin-right: 0; width: 84px;" class="butospan copy-html">copy htm</span>');
*/

  $('.stroove').click(function () {
    $('*').removeAttr('style');
    $('*').removeAttr('id');
  });

  $('.form-my2').prepend('<span class="hide"></span>');

  $('.copy-html').click(function () {
    $('.hide').html('');
    $('.hide').append($('#active').clone());
    $('.hide #active, .hide #active *').removeAttr('id');
    $('.styless').val('');
    $('.styless_2').val('');
    $('.styless').val($('.hide').html());
    $('.styless_2').val($('.hide').html());
  });

  $('.eye2').click(function () {
    $('.wrapper').toggleClass('bord2').removeClass('bord');
    /*
    if ( ! $('.wrapper').hasClass('bord2') ) {
      $('.wrapper').addClass('bord2');
    }
    else {
     $('.wrapper').removeClass('bord2'); 
   }
   */
  });
  $('body').keydown(function (e) {
    if (e.keyCode == 113) {
      $('.wrapper').toggleClass('bord');
    }
  });

  $('body').keydown(function (e) {
    if (e.ctrlKey && e.keyCode == 46) {
      $('#active:not(.wrapper, .remove)').remove();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 114) {
      $('.keylinks341-w').toggleClass('active');
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 83) {
      $('#active').append('<span class="w-span">span</span>');
      main_function();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 66) {
      $('#active').append(colb);
      main_function();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 76) {
      $('#active').append('<a class="w-a">Link</a>');
      main_function();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 73) {
      $('#active').append(
        '<a class="w-row" style="display: flex; width: 80px; height: 80px; flex: 0 0 auto;"></a>',
        );
      main_function();
    }
  });

  //O
  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 79) {
      $('#active').css('object-fit', 'cover').css('width', '100%').css('height', '100%');
      main_function();
    }
  });

  $('.obb_img').click(function () {
    $('#active').css('object-fit', 'cover').css('width', '100%').css('height', '100%');
    main_function();
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 49) {
      //$('.left-tools, .top_pan, .form-my, .dop-info').toggleClass('hide');
      //$('.wrapper').toggleClass('w1920').toggleClass('bord');
      $('#active').append('<div class="w-row"></div>');
      main_function();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 50) {
      $('#active').append('<div class="contain"></div>');
      main_function();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 52) {
      $('#active').append('<div class="w-row">Text content</div>');
      main_function();
    }
  });

  $('.coll-8').click(function () {
    $('#active').append(
      '<div class="__row" style="margin-left: -10px; margin-right: -10px; display: flex; flex-wrap: wrap;"><div class="__col" style="padding-left: 10px; padding-right: 10px; width: 33.333%;"></div></div>',
      );
    main_function();
  });


  $('#hdr').click(function () {
    $('#active').append(
      '<header class="header"></header>',
      );
    main_function();
  });

  $('#footer').click(function () {
    $('#active').append(
      '<footer class="footer"></footer>',
      );
    main_function();
  });

  $('#main').click(function () {
    $('#active').append(
      '<main class="main"></main>',
      );
    main_function();
  });
  
  


  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 51) {
      $('#active').append(
        '<div class="w-row" style="display: flex; flex-wrap: wrap; justify-content: space-between;"></div>',
        );
      main_function();
    }
  });

  //

  /*
 $('.remove').click(function () {
  $('#active:not(.wrapper, .remove)').remove();
});
*/

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 112) {
      //$('#active').remove();
      $(
        '.w-row, .w-col-6, .w-col-4, .w-col-2, .w-ul, .w-li, .w-a, .w-span, .w-textarea, .w-form, .w-input-text, .w-subm, .w-table, .w-tr, .w-td, .w-tbody, .w-thead, .w-wrap',
        ).toggleClass('redbord');
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 81) {
      $('.text_val_add_2').fadeToggle();
      main_function();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 87) {
      $('.left-const').slideToggle();
      main_function();
    }
  });

  //q - 81
  //w - 87

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 67) {
      copy = '';
      copy = $('#active').clone();
    }
  });

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 86) {
      $('#active').append(copy);
      main_function();
    }
  });

  //alt+z 90 переход на родителя

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 90) {
      $('#active').attr('id', '').parent().attr('id', 'active');
      var parent_class = $('#active').attr('class');
      $('.classs').html(parent_class);
      $('.class-name').val(parent_class);

      var styless = $('#active').attr('style');
      $('.styless').val('');
      $('.styless').val(styless);
      $('.classs2').text($('#active').get(0).tagName);

      var styless_2 = $('#active').attr('style');
      $('.styless_2').val('');
      $('.styless_2').val(styless_2);

      css_values();
    }
  });

  //alt + стрелка вверх 38 переход на родителя

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 38) {
      $('#active').attr('id', '').parent().attr('id', 'active');
      var parent_class = $('#active').attr('class');
      $('.classs').html(parent_class);
      $('.class-name').val(parent_class);

      var styless = $('#active').attr('style');
      $('.styless').val('');
      $('.styless').val(styless);
      $('.classs2').text($('#active').get(0).tagName);

      var styless_2 = $('#active').attr('style');
      $('.styless_2').val('');
      $('.styless_2').val(styless_2);

      css_values();
    }
  });

  // alt + вниз 40 ребенок

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 40) {
      if ($('#active').children().length > 0) {
        $('#active').attr('id', '').children().first().attr('id', 'active');
        var child_class = $('#active').attr('class');
        $('.classs').html(child_class);
        $('.class-name').val(child_class);

        var styless = $('#active').attr('style');
        $('.styless').val('');
        $('.styless').val(styless);

        var styless_2 = $('#active').attr('style');
        $('.styless_2').val('');
        $('.styless_2').val(styless_2);

        $('.classs2').text($('#active').get(0).tagName);
        css_values();
      }
    }
  });

  // alt + лево 37 пред сосед

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 37) {
      e.preventDefault();

      if ($('#active').prev().length > 0) {
        $('#active').attr('id', '').prev().attr('id', 'active');
        var prev_class = $('#active').attr('class');
        $('.classs').html(prev_class);
        $('.class-name').val(prev_class);

        var styless = $('#active').attr('style');
        $('.styless').val('');
        $('.styless').val(styless);

        var styless_2 = $('#active').attr('style');
        $('.styless_2').val('');
        $('.styless_2').val(styless_2);

        $('.classs2').text($('#active').get(0).tagName);
        css_values();
      }
    }
  });

  // alt + право 39 след сосед

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 39) {
      if ($('#active').next().length > 0) {
        $('#active').attr('id', '').next().attr('id', 'active');
        var next_class = $('#active').attr('class');
        $('.classs').html(next_class);
        $('.class-name').val(next_class);

        var styless = $('#active').attr('style');
        $('.styless').val('');
        $('.styless').val(styless);

        var styless_2 = $('#active').attr('style');
        $('.styless_2').val('');
        $('.styless_2').val(styless_2);

        $('.classs2').text($('#active').get(0).tagName);
        css_values();
      }
    }
  });

  /*
лево 37
вверх 38
впрво 39
вниз 40
*/

  $('body').keydown(function (e) {
    if (e.altKey && e.keyCode == 113) {
      $('.wrapper').toggleClass('bord2').removeClass('bord');
    }
  });

  $('.eye').click(function () {
    if (!$('.wrapper').hasClass('bord')) {
      $('.wrapper').addClass('bord');
    } else {
      $('.wrapper').removeClass('bord').removeClass('padd');
    }
  });

  $('.tools-close').click(function (e) {
    e.preventDefault();
    $(this).parent().hide();
  });

  function main_function() {
    $('.wrapper *, .wrapper')
    .mouseover(function (event) {
      $('a').click(function (e) {
        e.preventDefault();
      });
      event.stopPropagation();

      var podskaz = $(this).attr('class');
      $('.classs').append('<span class="podskaz2">' + podskaz + '</span>');
        //$(this).addClass('active2');
    })
    .mouseout(function (event) {
      event.stopPropagation();
        //$(this).removeClass('active2');
      $('.podskaz2').remove();
    });
    /*
 $('input[type="submit"]').click(function (e) {
  e.preventDefault();
});

 $('label').click(function (e) {
  e.preventDefault();
});
*/

    $('.wrapper *:not(.remove), .wrapper *:not(.tool-btn-w), .wrapper *:not(.tools), .wrapper').on(
      'click',
      function (event) {
        $(this).removeClass('active2');

        $('.tool-btn-w').remove();
        //$('.tools').hide();

        //$(this).prepend('<span class="tool-btn-w"><span class="tool-btn"></span></span>');

        $('.fonst-labels-group').css({ top: event.pageY, left: event.pageX });

        $('.tool-btn').click(function () {
          $('.fonst-labels-group').show();
        });

        //$('.fonst-labels-group').css({'top': event.pageY, 'left': event.pageX, 'position': 'absolute'}).show();
        //$('.flexjcai-labels-group').css({'top': event.pageY-120, 'left': event.pageX, 'position': 'absolute'}).show();

        //$('*').attr('id', '');
        $('.wrapper, .wrapper *').removeAttr('id');
        event.stopPropagation();
        $(this).attr('id', 'active');
        active_class = $(this).attr('class');

        var styless = $('#active').attr('style');
        $('.styless').val('');
        $('.styless').val(styless);

        var styless_2 = $('#active').attr('style');
        $('.styless_2').val('');
        $('.styless_2').val(styless_2);

        var class_name = $('#active').attr('class');
        $('.class-name').val('');
        $('.class-name').val(class_name);
        $('.classs').text(class_name);
        $('.classs2').text($('#active').get(0).tagName);
        /*
    var text_val = $('#active').text();
    $('.text_val').val('');
    $('.text_val').val(text_val);
    */
        $('.width').val('');
        var css_width = $('#active').css('width');
        $('.width').attr('placeholder', css_width);

        $('.radius_input').val('');
        var radius_input = $('#active').css('border-radius');
        $('.radius_input').attr('placeholder', radius_input);

        /*$('.widthCalc').val('');
    var css_width = $('#active').css('width');    
    $('.widthCalc').attr('placeholder', css_width);*/

        $('.color').val('');
        var css_color = $('#active').css('color');
        $('.color').attr('placeholder', css_color);

        $('.bgColor').val('');
        var css_bgColor = $('#active').css('background-color');
        $('.bgColor').attr('placeholder', css_bgColor);

        $('.fSize').val('');
        var css_fSize = $('#active').css('font-size');
        $('.fSize').attr('placeholder', css_fSize);

        $('.fWeight').val('');
        var css_fWeight = $('#active').css('font-weight');
        $('.fWeight').attr('placeholder', css_fWeight);

        $('.bordcol').val('');
        $('.bordwidth').val('');

        var css_bordwidth = $('#active').css('border-width');
        $('.bordwidth').attr('placeholder', css_bordwidth);

        $('.height').val('');
        var css_height = $('#active').css('height');
        $('.height').attr('placeholder', css_height);

        $('.minheight').val('');
        var css_minheight = $('#active').css('min-height');
        $('.minheight').attr('placeholder', css_minheight);

        $('.maxwidth').val('');
        var css_maxwidth = $('#active').css('max-width');
        $('.maxwidth').attr('placeholder', css_maxwidth);

        $('.line_height').val('');
        var css_line_height = $('#active').css('line-height');
        $('.line_height').attr('placeholder', css_line_height);

        $('.padmargs').val('');
        var css_padmargs = $('#active').css('margin-left');
        $('.padmargs').attr('placeholder', css_padmargs);

        $('.gap').val('');
        var css_gap = $('#active').css('gap');
        $('.gap').attr('placeholder', css_gap);

        $('.margin_top').val('');
        var css_margin_top = $('#active').css('margin-top');
        $('.margin_top').attr('placeholder', css_margin_top);

        $('.margin_right').val('');
        var css_margin_right = $('#active').css('margin-right');
        $('.margin_right').attr('placeholder', css_margin_right);

        $('.margin_bottom').val('');
        var css_margin_bottom = $('#active').css('margin-bottom');
        $('.margin_bottom').attr('placeholder', css_margin_bottom);

        $('.margin_left').val('');
        var css_margin_left = $('#active').css('margin-left');
        $('.margin_left').attr('placeholder', css_margin_left);

        $('.text_val_add').val('');
        var text_val_add = $('#active').html();

        $('.text_val_add').val(text_val_add);

        $('.text_val_add_2').val('');
        var text_val_add_2 = $('#active').html();
        $('.text_val_add_2').val(text_val_add_2);

        $('.padding_top').val('');
        var css_padding_top = $('#active').css('padding-top');
        $('.padding_top').attr('placeholder', css_padding_top);

        $('.padding_right').val('');
        var css_padding_right = $('#active').css('padding-right');
        $('.padding_right').attr('placeholder', css_padding_right);

        $('.padding_bottom').val('');
        var css_padding_bottom = $('#active').css('padding-bottom');
        $('.padding_bottom').attr('placeholder', css_padding_bottom);

        $('.padding_left').val('');
        var css_padding_left = $('#active').css('padding-left');
        $('.padding_left').attr('placeholder', css_padding_left);

        $('.position_top').val('');
        var css_position_top = $('#active').css('top');
        $('.position_top').attr('placeholder', css_position_top);

        $('.position_right').val('');
        var css_position_right = $('#active').css('right');
        $('.position_right').attr('placeholder', css_position_right);

        $('.position_bottom').val('');
        var css_position_bottom = $('#active').css('bottom');
        $('.position_bottom').attr('placeholder', css_position_bottom);

        $('.position_left').val('');
        var css_position_left = $('#active').css('left');
        $('.position_left').attr('placeholder', css_position_left);

        $('.z_index').val('');
        var css_z_index = $('#active').css('z-index');
        $('.z_index').attr('placeholder', css_z_index);

        $('.opacity').val('');
        var css_opacity = $('#active').css('opacity');
        $('.opacity').attr('placeholder', css_opacity);

        $('.placeholder').val('');
        var css_placeholder = $('#active').attr('placeholder');
        $('.placeholder').attr('placeholder', css_placeholder);

        $('.submit_value').val('');
        var css_svalue = $('#active').attr('value');
        $('.submit_value').attr('placeholder', css_svalue);

        $('.tal').prop('checked', false);
        if ($('#active').css('text-align') == 'left') {
          $('.tal').prop('checked', true);
        }

        $('.objcov').prop('checked', false);
        if ($('#active').css('object-fit') == 'cover') {
          $('.objcov').prop('checked', true);
        }
        $('.flwrap').prop('checked', false);
        if ($('#active').css('flex-wrap') == 'wrap') {
          $('.flwrap').prop('checked', true);
        }

        $('.flwrap2').prop('checked', false);
        if ($('#active').css('flex-wrap') == 'nowrap') {
          $('.flwrap2').prop('checked', true);
        }

        $('.grow_none').prop('checked', false);
        if ($('#active').css('flex') == '0 0 auto') {
          $('.grow_none').prop('checked', true);
        }

        $('.grow1').prop('checked', false);
        if ($('#active').css('flex') == '1 1 auto') {
          $('.grow1').prop('checked', true);
        }

        $('.tac').prop('checked', false);
        if ($('#active').css('text-align') == 'center') {
          $('.tac').prop('checked', true);
        }

        $('.tar').prop('checked', false);
        if ($('#active').css('text-align') == 'right') {
          $('.tar').prop('checked', true);
        }

        $('.bordaround').prop('checked', false);
        $('.bordright').prop('checked', false);
        $('.bordtop').prop('checked', false);
        $('.bordbot').prop('checked', false);
        $('.bordleft').prop('checked', false);

        $('.dblock').prop('checked', false);
        if ($('#active').css('display') == 'block') {
          $('.dblock').prop('checked', true);
        }
        $('.dinline').prop('checked', false);
        if ($('#active').css('display') == 'inline') {
          $('.dinline').prop('checked', true);
        }
        $('.dinlineblock').prop('checked', false);
        if ($('#active').css('display') == 'inline-block') {
          $('.dinlineblock').prop('checked', true);
        }

        $('.fd_col').prop('checked', false);
        if ($('#active').css('flex-direction') == 'column') {
          $('.fd_col').prop('checked', true);
        }

        $('.fd_row').prop('checked', false);
        if ($('#active').css('flex-direction') == 'row') {
          $('.fd_row').prop('checked', true);
        }

        $('.dflex').prop('checked', false);
        if ($('#active').css('display') == 'flex') {
          $('.dflex').prop('checked', true);
        }

        $('.ai1').prop('checked', false);
        if ($('#active').css('align-items') == 'flex-start') {
          $('.ai1').prop('checked', true);
        }

        $('.ai2').prop('checked', false);
        if ($('#active').css('align-items') == 'center') {
          $('.ai2').prop('checked', true);
        }

        $('.ai3').prop('checked', false);
        if ($('#active').css('align-items') == 'flex-end') {
          $('.ai3').prop('checked', true);
        }

        $('.jc1').prop('checked', false);
        if ($('#active').css('justify-content') == 'flex-start') {
          $('.jc1').prop('checked', true);
        }

        $('.jc2').prop('checked', false);
        if ($('#active').css('justify-content') == 'space-between') {
          $('.jc2').prop('checked', true);
        }

        $('.jc3').prop('checked', false);
        if ($('#active').css('justify-content') == 'flex-end') {
          $('.jc3').prop('checked', true);
        }

        $('.jc4').prop('checked', false);
        if ($('#active').css('justify-content') == 'center') {
          $('.jc4').prop('checked', true);
        }

        $('.dnone').prop('checked', false);
        if ($('#active').css('display') == 'none') {
          $('.dnone').prop('checked', true);
        }

        $('.iflex').prop('checked', false);
        if ($('#active').css('display') == 'inline-flex') {
          $('.iflex').prop('checked', true);
        }

        $('.mla').prop('checked', false);
        $('.mra').prop('checked', false);
        $('.ma').prop('checked', false);
        $('.mha').prop('checked', false);
        if ($('#active').css('min-height') == 'auto') {
          $('.mha').prop('checked', true);
        }

        $('.fsi').prop('checked', false);
        if ($('#active').css('font-style') == 'italic') {
          $('.fsi').prop('checked', true);
        }

        $('.bornone').prop('checked', false);
        if ($('#active').css('border') == 'none') {
          $('.bornone').prop('checked', true);
        }

        $('.float1').prop('checked', false);
        if ($('#active').css('float') == 'left') {
          $('.float1').prop('checked', true);
        }

        $('.float2').prop('checked', false);
        if ($('#active').css('float') == 'right') {
          $('.float2').prop('checked', true);
        }

        $('.float3').prop('checked', false);
        if ($('#active').css('float') == 'none') {
          $('.float3').prop('checked', true);
        }

        $('.ltop').prop('checked', false);
        if ($('#active').css('background-position') == 'left top') {
          $('.ltop').prop('checked', true);
        }

        $('.topce').prop('checked', false);
        if ($('#active').css('background-position') == 'top center') {
          $('.topce').prop('checked', true);
        }

        $('.ritop').prop('checked', false);
        if ($('#active').css('background-position') == 'right top') {
          $('.ritop').prop('checked', true);
        }

        $('.ricentr').prop('checked', false);
        if ($('#active').css('background-position') == 'right 0px center') {
          $('.ricentr').prop('checked', true);
        }

        $('.ribot').prop('checked', false);
        if ($('#active').css('background-position') == 'right bottom') {
          $('.ribot').prop('checked', true);
        }

        $('.botcentr').prop('checked', false);
        if ($('#active').css('background-position') == 'bottom center') {
          $('.botcentr').prop('checked', true);
        }

        $('.lebot').prop('checked', false);
        if ($('#active').css('background-position') == 'left bottom') {
          $('.lebot').prop('checked', true);
        }

        $('.lecentr').prop('checked', false);
        if ($('#active').css('background-position') == 'left center') {
          $('.lecentr').prop('checked', true);
        }

        $('.overflow1').prop('checked', false);

        $('.overflow2').prop('checked', false);

        $('.posre').prop('checked', false);
        if ($('#active').css('position') == 'relative') {
          $('.posre').prop('checked', true);
        }

        $('.posa').prop('checked', false);
        if ($('#active').css('position') == 'absolute') {
          $('.posa').prop('checked', true);
        }
        $('.possta').prop('checked', false);
      },
      );

$('.class-name2').val('');

$('.text_val2').val('');
  } // end main_function

  $('.line_height').bind('textchange', function () {
    $('#active').css('line-height', $('.line_height').val());
  });

  $('.padmargs').bind('textchange', function () {    
    $('#active').css('margin-left', '-'+$('.padmargs').val() + 'px');
    $('#active').css('margin-right', '-'+$('.padmargs').val() + 'px');

    const col = $('#active').children();

    col.css('padding-left', $('.padmargs').val() + 'px');
    col.css('padding-right', $('.padmargs').val() + 'px');
  });

  

  $('.radius_input').bind('textchange', function () {
    $('#active').css('border-radius', $('.radius_input').val() + 'px');
  });

  $('.width').bind('textchange', function () {
    $('#active').css('width', $('.width').val());
  });

  $('.widthCalc').bind('textchange', function () {
    $('#active').css('width', $('.widthCalc').val());
  });

  $('.color').bind('textchange', function () {
    $('#active').css('color', $('.color').val());
  });

  $('.bgColor').bind('textchange', function () {
    $('#active').css('background-color', $('.bgColor').val());
  });

  $('.fSize').bind('textchange', function () {
    $('#active').css('font-size', $('.fSize').val() + 'px');
  });

  $('.fWeight').bind('textchange', function () {
    $('#active').css('font-weight', $('.fWeight').val());
  });

  $('.bordwidth').bind('textchange', function () {
    $('#active').css('border-width', $('.bordwidth').val());
  });

  $('.height').bind('textchange', function () {
    $('#active').css('height', $('.height').val());
  });

  $('.minheight').bind('textchange', function () {
    $('#active').css('min-height', $('.minheight').val() + 'px');
  });

  $('.maxwidth').bind('textchange', function () {
    $('#active').css('max-width', $('.maxwidth').val());
  });

  $('.margin_bottom').bind('textchange', function () {
    $('#active').css('margin-bottom', $('.margin_bottom').val() + 'px');
  });

  
  $('.gap').bind('textchange', function () {
    $('#active').css('gap', $('.gap').val() + 'px');
  });

  $('.margin_top').bind('textchange', function () {
    $('#active').css('margin-top', $('.margin_top').val() + 'px');
  });

  $('.margin_right').bind('textchange', function () {
    $('#active').css('margin-right', $('.margin_right').val() + 'px');
  });

  $('.margin_left').bind('textchange', function () {
    $('#active').css('margin-left', $('.margin_left').val() + 'px');
  });

  /*****************/
  $('.padding_bottom').bind('textchange', function () {
    $('#active').css('padding-bottom', $('.padding_bottom').val() + 'px');
  });

  $('.padding_top').bind('textchange', function () {
    $('#active').css('padding-top', $('.padding_top').val() + 'px');
  });

  $('.padding_right').bind('textchange', function () {
    $('#active').css('padding-right', $('.padding_right').val() + 'px');
  });

  $('.padding_left').bind('textchange', function () {
    $('#active').css('padding-left', $('.padding_left').val() + 'px');
  });

  $('.position_bottom').bind('textchange', function () {
    $('#active').css('bottom', $('.position_bottom').val() + 'px');
  });

  $('.position_top').bind('textchange', function () {
    $('#active').css('top', $('.position_top').val() + 'px');
  });

  $('.position_right').bind('textchange', function () {
    $('#active').css('right', $('.position_right').val() + 'px');
  });

  $('.position_left').bind('textchange', function () {
    $('#active').css('left', $('.position_left').val() + 'px');
  });

  $('.z_index').bind('textchange', function () {
    $('#active').css('z-index', $('.z_index').val());
  });

  $('.opacity').bind('textchange', function () {
    $('#active').css('opacity', $('.opacity').val());
  });

  /*****************/

  $('.form-my .butt').click(function () {}); //end click butt

  $('.tal').click(function () {
    $('#active').css('text-align', 'left');
  });

  $('.objcov').click(function () {
    $('#active').css('object-fit', 'cover');
  });

  $('.flwrap').click(function () {
    $('#active').css('flex-wrap', 'wrap');
  });

  $('.flwrap2').click(function () {
    $('#active').css('flex-wrap', 'nowrap');
  });

  $('.grow_none').click(function () {
    $('#active').css('flex', '0 0 auto');
  });

  $('.grow1').click(function () {
    $('#active').css('flex', '1 1 auto');
  });

  $('.tac').click(function () {
    $('#active').css('text-align', 'center');
  });

  $('.tar').click(function () {
    $('#active').css('text-align', 'right');
  });

  $('.ma').click(function () {
    $('#active').css('margin', 'auto');
  });

  $('.mla').click(function () {
    $('#active').css('margin-left', 'auto');
  });

  $('.mra').click(function () {
    $('#active').css('margin-right', 'auto');
  });

  $('.mha').click(function () {
    $('#active').css('min-height', 'auto');
  });

  $('.fsi').click(function () {
    $('#active').css('font-style', 'italic');
  });

  $('.bornone').click(function () {
    $('#active').css('border', 'none');
  });

  $('.bordaround').click(function () {
    $('#active').css('border', '1px solid #000');
  });

  $('.bordleft').click(function () {
    $('#active').css('border-left', '1px solid #000');
  });

  $('.bordtop').click(function () {
    $('#active').css('border-top', '1px solid #000');
  });

  $('.bordbot').click(function () {
    $('#active').css('border-bottom', '1px solid #000');
  });

  $('.bordright').click(function () {
    $('#active').css('border-right', '1px solid #000');
  });

  $('.float1').click(function () {
    $('#active').css('float', 'left');
  });

  $('.float2').click(function () {
    $('#active').css('float', 'right');
  });

  $('.float3').click(function () {
    $('#active').css('float', 'none');
  });

  $('.ltop').click(function () {
    $('#active').css('background-position', 'left top');
  });

  $('.topce').click(function () {
    $('#active').css('background-position', 'top center');
  });

  $('.ritop').click(function () {
    $('#active').css('background-position', 'right top');
  });

  $('.ricentr').click(function () {
    $('#active').css('background-position', 'right 0px center');
  });

  $('.ribot').click(function () {
    $('#active').css('background-position', 'right bottom');
  });

  $('.botcentr').click(function () {
    $('#active').css('background-position', 'bottom center');
  });

  $('.lebot').click(function () {
    $('#active').css('background-position', 'left bottom');
  });

  $('.lecentr').click(function () {
    $('#active').css('background-position', 'left center');
  });

  $('.dblock').click(function () {
    $('#active').css('display', 'block');
  });
  $('.dinline').click(function () {
    $('#active').css('display', 'inline');
  });
  $('.dinlineblock').click(function () {
    $('#active').css('display', 'inline-block');
  });

  $('.fd_col').click(function () {
    $('#active').css('flex-direction', 'column');
  });

  $('.fd_row').click(function () {
    $('#active').css('flex-direction', 'row');
  });

  $('.dflex').click(function () {
    $('#active').css('display', 'flex');
  });

  $('.ai1').click(function () {
    $('#active').css('align-items', 'flex-start');
  });

  $('.ai2').click(function () {
    $('#active').css('align-items', 'center');
  });

  $('.ai3').click(function () {
    $('#active').css('align-items', 'flex-end');
  });

  $('.jc1').click(function () {
    $('#active').css('justify-content', 'flex-start');
  });

  $('.jc2').click(function () {
    $('#active').css('justify-content', 'space-between');
  });

  $('.jc3').click(function () {
    $('#active').css('justify-content', 'flex-end');
  });

  $('.jc4').click(function () {
    $('#active').css('justify-content', 'center');
  });

  $('.dnone').click(function () {
    $('#active').css('display', 'none');
  });

  $('.iflex').click(function () {
    $('#active').css('display', 'inline-flex');
  });

  $('.overflow1').click(function () {
    $('#active').css('overflow', 'hidden');
  });

  $('.overflow2').click(function () {
    $('#active').css('overflow', 'visible');
  });

  $('.posre').click(function () {
    $('#active').css('position', 'relative');
  });

  $('.posa').click(function () {
    $('#active').css('position', 'absolute');
  });

  $('.possta').click(function () {
    $('#active').css('position', 'static');
  });

  /*
  $(document).on('click','div',function(e){
    $('div').attr('id', '');
    $(this).attr('id', 'active');
 });
 */

  main_function();

  $('.form-my2 .butt2').click(function () {
    if ($('.class-name2').val() != '') {
      var inp2 = $(this).parent().find('.class-name2').val();
    } else {
      var inp2 = 'div-block';
    }

    var textar22 = $(this).parent().find('.text_val2').val();

    var $elementJq2 = $('<div/>', {
      class: inp2,
      style: textar12,
      text: textar22,
    });

    var $elementJq3 = $('<span/>', {
      id: inp2,
      text: inp2,
    });

    /*Проверка на заполненность класса при создании*/
    /*
  if ( inp2 != '' ) {
    $('#active').append($elementJq2);
  }
  */

    $('#active').append($elementJq2);

    //$('.nav ul').append($elementJq3);
    //$('.nav ul span').attr('id', active_class).prepend($elementJq3);

    //$('.nav ul span').attr('id', active_class).html($elementJq3);

    main_function();
  }); //end click butt2

  $('.remove').click(function () {
    $('#active:not(.wrapper, .remove)').remove();
  });

  /*
localstorage
 var todos = $('.nav').html();
 localStorage.setItem('todos', todos);

 if(localStorage.getItem('todos')) {
  $('.wrapper').html(localStorage.getItem('todos'));
}
*/

  var timerId = setInterval(function () {
    $('.save').addClass('red');
  }, 10000);
  /*
$('.save').click(function () {
  var todos = $('.wrapper').html();
  localStorage.setItem('todos', todos);
  $('.save').removeClass('red');
});
*/

  function save() {
    var todos = $('.wrapper').html();

    Data = new Date();
    Hour = Data.getHours();
    Minutes = Data.getMinutes();
    Seconds = Data.getSeconds();

    var now2 = Hour + ':' + Minutes + ':' + Seconds;

    //localStorage.setItem('todos'+i+' '+project+' '+now2, todos);

    var todos = '<!--' + project + ' ' + now2 + '--> ' + $('.wrapper').html();
    localStorage.setItem('todos' + i, todos);

    $('.keylinks341').append('<li><span>todos' + i + '</span><li>');

    $('.save').removeClass('red');
    if (i > 10) {
      i = 0;
      localStorage.setItem('todos_num', 0);
    }
    i++;
    localStorage.setItem('todos_num', i);
  } //save

  $('.save').click(function () {
    save();
    main_function();
  });

  /*$('.save').click(function () {  
  var now2 = new Date();
  var todos = '<!--'+project+' '+now2+'--> '+$('.wrapper').html();
  localStorage.setItem('todos'+i, todos);
  $('.save').removeClass('red');
  if (i > 5) {
    i = 0;
  }
  i++;
  main_function();
});*/

  $('.keylinks341 span').click(function () {
    var texttt = $(this).text();
    //console.log(lcs[texttt]);
    $('.wrapper').html(lcs[texttt]);
    $('.keylinks341 span').removeClass('active');
    $(this).addClass('active');
    main_function();
  });

  var col1 = '<div class="w-row"></div>';
  var col2 =
  '<div class="w-col-6" style="width: 50%;"></div><div class="w-col-6" style="width: 50%;"></div>';
  var col3 =
  '<div class="w-col-4" style="width: 33.3333%;" id=""></div><div class="w-col-4" style="width: 33.3333%;"></div><div class="w-col-4" style="width: 33.3333%;"></div>';
  var col4 = `
  <div class="w-col-3" style="width: 25%;"></div><div class="w-col-3" style="width: 25%;"></div><div class="w-col-3" style="width: 25%;"></div><div class="w-col-3" style="width: 25%;"></div>`;
  var col6 = `<div class="w-col-2" style="width: 16.6667%;"></div><div class="w-col-2" style="width: 16.6667%;"></div><div class="w-col-2" style="width: 16.6667%;"></div><div class="w-col-2" style="width: 16.6667%;"></div><div class="w-col-2" style="width: 16.6667%;"></div><div class="w-col-2" style="width: 16.6667%;"></div>`;
  var col7 = '<div class="contain"></div>';
  var colp = '<p>Параграф</p>';
  var colb = '<strong>Жирный</strong>';
  var rw = '<div class="rw"></div>';

  var coll_h1 = '<h1>Заголвок 1</h1>';
  var coll_h2 = '<h2>Заголвок 2</h2>';
  var coll_h3 = '<h3>Заголвок 3</h3>';
  var coll_h4 = '<h4>Заголвок 4</h4>';
  var coll_h5 = '<h5>Заголвок 5</h5>';
  var coll_h6 = '<h6>Заголвок 6</h6>';
  var coll_bq = '<blockquote>Цитата</blockquote>';

  var cols_50 =
  '<div class="cols-50" style="display: flex;"><div class="col-50" style="width: 50%;">1</div><div class="col-50" style="width: 50%;">2</div></div>';

  var cols_50_w =
  '<div class="cols-50" style="display: flex;"><div class="col-50" style="width: 50%;"><div class="w-row">w1</div></div><div class="col-50" style="width: 50%;"><div class="w-row">w2</div></div></div>';

  $('.coll-w').click(function () {
    $('#active').wrap("<div class='w-wrap'></div>");
    main_function();
  });

  $('.coll-aw').click(function () {
    $('#active').wrap("<a class='w-a'></a>");
    main_function();
  });

  $('.link').click(function () {
    $('#active').append('<a class="w-a">Link</a>');
    main_function();
  });

  $('.span').click(function () {
    $('#active').append('<span class="w-span">span</span>');
    main_function();
  });

  $('#bredd').click(function () {
    $('#active').append(
      `<ul class="bread__ul" style="display: flex; flex-wrap: wrap; font-size: 13px; margin-bottom: -15px;"><li class="bread__lii" style="margin-right: 10px; margin-bottom: 15px;"><a class="bread__link">Активный</a></li><li class="bread__li" style="margin-right: 10px; margin-bottom: 15px;"><span class="bread__dis">Последний неактивный</span></li></ul>`,
      );
    main_function();
  });

  $('#neww').click(function () {
    $('#active').append(
      `<div class="" style="display: flex;"><a class="__img-w" style="width: 263px;  display: flex; align-items: center; justify-content: center;flex: none;"><img src="img/new-1.jpg" class="" style="object-fit: cover; width: 100%; height: 100%;"></a><div class="" style="padding: 35px;"><div class=""><a class="" style=" display: block; margin-bottom: 12px;">Классификация кранов на железнодорожном ходу</a><div class="" style="">Как правило, грузы перемещаются на малые расстояния. Этот вид техники бывает передвижным и стационарным. На некоторые виды можно оформить заказ услуги автокрана. Всего существует три группы кранов.</div></div></div></div>`,
      );
    main_function();
  });

  $('#taggss').click(function () {
    $('#active').append(
      `<ul class="__tags" style="display: flex; flex-wrap: wrap;"><li class="__tag" style="margin-right: 10px; margin-bottom: 10px;"><a class="__tag-link" style=" padding-left: 10px; padding-right: 10px; height: 30px; align-items: center; justify-content: center; display: inline-flex;">Автокраны</a></li></ul>`,
      );
    main_function();
  });

  /*

*/

  $('#elem1').click(function () {
    $('#active').append(
      `<div class="__item" style="position: relative; height: 193px;"><img src="img/works-6.jpg" class="__img" style="width: 100%; height: 100%; object-fit: cover;"><div class="" style="position: absolute; top: 3px; left: 3px;"><a class="" style="color: rgb(255, 255, 255); font-size: 10px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; background: rgb(231, 50, 55); border-radius: 10px; padding-left: 7px; padding-right: 7px; height: 18px; margin-right: 3px;"><img src="img/photo.svg" class="" style="margin-right: 5px; flex: 0 0 auto;">1 фото</a></div><div class="__title" style=" position: absolute; bottom: 22px; left: 24px;">Монтаж ветрогенераторов в Ставропольском крае</div></div>`,
      );
    main_function();
  });

  $('#elem2').click(function () {
    $('#active').append(
      `<div class="__item" style="padding: 30px;"><div class="" style="margin-bottom: 25px; display: flex; justify-content: space-between; align-items: center;"><div class="" style=" display: flex; align-items: center"><div class="" style="display: flex; align-items: flex-start; justify-content: flex-start; width: 30px; height: 30px; margin-right: 7px; flex: 0 0 auto;"><img src="img/profit-1.svg"></div><div class="" style="">4.5/5</div><span class="" style="display: inline-block; margin-left: 5px;">(14)</span></div><div class="">
      <label class="" style="margin-right: 10px;"><span class="label-span">1</span></label><label class="" style="margin-right: 10px;"><span class="label-span">2</span></label></div></div><a class="" style="display: block; margin-bottom: 20px;">Автокран 30 тонн Liebherr LTM 1030</a><a class="__img-w" style="width: 100%; height: 250px; display: block; margin-bottom: 30px;"><img src="img/prod-5.jpg" class="" style="object-fit: cover; width: 100%; height: 100%;"></a><div class="" style="font-size: 15px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center;"><div class="" style=" display: flex; align-items: center"><div class="" style="display: flex; align-items: flex-start; justify-content: flex-start; width: 12px; height: 12px; margin-right: 15px; flex: 0 0 auto; background: rgb(82, 209, 22); border-radius: 50%; overflow: hidden;"></div><div class="" style="">Есть в наличии</div></div><div class="" style="display: inline-block;">Гарантия 1 год</div></div><div class="" style="display: flex; justify-content: space-between;"><div class="" style="text-decoration-line: line-through;
      ">137 900 ₽</div><div class="">137 900 ₽</div></div><a class="btn" style="width: 100%; height: 48px; left: 1105px; top: 24px; background: rgb(82, 209, 22); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; padding-left: 34px; padding-right: 31px; margin-top: 25px;"><img src="img/callback.svg" class="btn-icon" style="margin-right: 10px; flex: 0 0 auto;"><span class="">в корзину</span></a><div class="" style="margin-top: 15px; display: flex; align-items: center; justify-content: space-between;"><a class="">Хочу дешевле</a><a class="">Купить в 1 клик</a></div></div>`,
      );
    main_function();
  });
  $('#card').click(function () {
    $('#active').append(
      `<div class="__item" style="padding: 30px;"><a class="__img-w" style="width: 100%; height: 80px; display: block; margin-bottom: 30px;"><img src="img/prod-5.jpg" class="" style="object-fit: cover; width: 100%; height: 100%;"></a><a class="" style="line-height: 1.4; font-weight: 600; display: block; margin-bottom: 20px;">Автокран 30 тонн Liebherr LTM 1030</a><div class="" style="font-size: 15px; margin-bottom: 30px;">Макс. грузоподъемность</div><a class="" style="
      padding-left: 25px; padding-right: 25px; height: 50px; display: inline-flex; align-items: center; justify-content: center;">Обратный звонок</a></div>`,
      );
    main_function();
  });
  /*

#
#

*/
  $('#vform').click(function () {
    $('#active').append(
      `<div class="__form" style="background: rgb(255, 255, 255); padding: 50px 60px 57px; width: 555px; position: relative;"><form class=""><label class="" style="margin-bottom: 21px; display: block;"><span class="" style="display: flex; align-items: flex-start; font-size: 13px; color: rgb(0, 0, 0); margin-bottom: 18px;">Имя<span class="" style="color: rgb(231, 50, 55); margin-bottom: 0px;">*</span></span><input type="text" class="" placeholder=" " style="
      height: 40px; 15px; padding-right: 15px; width: 100%;"></label><textarea class="ordform-textarea" placeholder="Ваш телефон" style="width: 100%; padding: 15px; height: 100px; margin-bottom: 20px;"></textarea> <a class="btn-o" style="padding-left: 25px; padding-right: 25px; height: 50px; display: inline-flex; align-items: center; justify-content: center;
      ">Обратный звонок</a></form><div class="" style="margin-top: 15px;">Время обработки заявки ~30 минут</div><a class="__close" style="width: 20px; height: 20px; position: absolute; top: 10px; right: 10px;"><img src="img/close.svg"></a></div>`,
      );
    main_function();
  });

  $('#vermnu').click(function () {
    $('#active').append(
      `<ul class=""><li class="" style="margin-bottom: 15px;"><a class="" style="display: block;">Mnuitem</a></li></ul>`,
      );
    main_function();
  });

  $('#hform').click(function () {
    $('#active').append(
      `<div class="" style="max-width: 794px; width: 100%; padding: 46px 50px; "><div class=""><div class="" style="">Получить прайс-лист</div><div class="" style="">Укажите ваш e-mail и мы вышлем полный
      актуальный прайс-лист в течение ~30 минут</div></div><form class="__form" style="width: 100%; display: flex; justify-content: space-between; margin-top: 34px; flex-wrap: nowrap; align-items: flex-end;"><label class="__label" style="margin-bottom: 0px; width: calc(33.3333% - 0px);"><span class="" style="display: flex; align-items: flex-start; font-size: 13px; color: rgb(0, 0, 0); margin-bottom: 18px;">Имя<span class="" style="color: rgb(231, 50, 55); margin-bottom: 0px;">*</span></span><input type="text" class="" placeholder=" " style="
      height: 40px; 15px; padding-right: 15px; width: 100%;"></label><label class="__label" style="margin-bottom: 0px; width: calc(33.3333% - 0px);"><span class="" style="display: flex; align-items: flex-start; font-size: 13px; color: rgb(0, 0, 0); margin-bottom: 18px;">Имя<span class="" style="color: rgb(231, 50, 55); margin-bottom: 0px;">*</span></span><input type="text" class="" placeholder=" " style="
      height: 40px; 15px; padding-right: 15px; width: 100%;"></label><a class="__btn" style="padding-left: 25px; padding-right: 25px; height: 50px; display: inline-flex; align-items: center; justify-content: center;
      ">Обратный звонок</a></form></div>`,
      );
    main_function();
  });

  $('#tabss').click(function () {
    $('#active').append(
      `<div class="accordion-section"><div class="contain">  <div class="accordion-container"> 
      <div class="accordion-item" style="border-bottom: 1px solid rgb(204, 204, 204); padding-bottom: 15px;">
      <div class="accordion-header" style="display: flex; justify-content: space-between; align-items: center;">                    
      <span class="accordion-header__ttile">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне?</span>
      <span class="accordion-header__control" style="font-size: 40px;">+</span></div> 
      <div class="accordion-content" style="display: block; margin-top: 20px;"> 
      Доставка в Россию, Беларусь, Казахстан 1
      </div>
      </div>
      </div></div></div>`,
      );
    main_function();
  });

  $('#bannr').click(function () {
    $('#active').append(
      `<div class="" style=""><div class="contain"><div class="__row" style="display: flex; justify-content: space-between;"><div class="" style="flex: 1 1 50%; padding-right: 50px; padding-top: 80px;"><div class="" style="margin-bottom: 15px;">Не нужно
      содержать штат сотрудников</div><div class="" style="margin-bottom: 15px;">Не нужно
      содержать штат сотрудников</div><div class="" style="">Не нужно
      содержать штат сотрудников</div><div class="__btns" style="display: flex; justify-content: flex-start; flex-wrap: wrap; margin-bottom: 0px; margin-top: 50px;"><a class="btn" style="width: 215px; height: 48px; left: 1105px; top: 24px; background: rgb(82, 209, 22); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; padding-left: 34px; padding-right: 31px;"><img src="img/callback.svg" class="btn-icon" style="margin-right: 10px; flex: 0 0 auto;"><span class="">в корзине</span><span class="" style="display: inline-flex; margin-left: 4px; width: 20px; height: 20px; border-radius: 50%; overflow: hidden; background-color: rgb(255, 255, 255); align-items: center; justify-content: center;">1</span></a><a class="btn-o" style="padding-left: 25px; padding-right: 25px; height: 50px; display: inline-flex; align-items: center; justify-content: center;
      ">Обратный звонок</a></div></div><div class="" style="flex: 1 1 50%;"><img src="img/works-6.jpg" class="" style="width: 100%;"></div></div></div></div>`,
      );
    main_function();
  });

  $('#it1').click(function () {
    $('#active').append(
      `<div class="" style="display: flex; align-items: center; text-align: center; flex-direction: column;"><div class="" style="margin-bottom: 21px; display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; overflow: hidden; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);">1</div><div class="" style="margin-bottom: 15px;">Не нужно
      содержать штат сотрудников</div><div class="" style="">Не нужно
      содержать штат сотрудников</div></div>`,
      );
    main_function();
  });

  $('#it2').click(function () {
    $('#active').append(
      `<div class="" style="text-align: center; display: flex; flex-direction: column; align-items: center;"><div class="" style="margin-bottom: 21px; display: flex; align-items: flex-start; justify-content: flex-start; width: 30px; height: 30px; flex: 0 0 auto;"><img src="img/profit-1.svg"></div><div class="" style="margin-bottom: 15px;">Не нужно
      содержать штат сотрудников</div><div class="" style="">Не нужно
      содержать штат сотрудников</div></div>`,
      );
    main_function();
  });

  $('#it3').click(function () {
    $('#active').append(
      `<div class="" style=" display: flex; align-items: center"><div class="" style="display: flex; align-items: flex-start; justify-content: flex-start; width: 30px; height: 30px; margin-right: 15px; flex: none;"><img src="img/profit-1.svg"></div><div class="" style="">Не нужно
      содержать штат сотрудников</div></div>`,
      );
    main_function();
  });

  $('#btn').click(function () {
    $('#active').append(
      `<a class="btn" style="width: 215px; height: 48px; left: 1105px; top: 24px; background: rgb(82, 209, 22); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; padding-left: 34px; padding-right: 31px;"><img src="img/callback.svg" class="btn-icon" style="margin-right: 10px; flex: 0 0 auto;"><span class="">в корзине</span><span class="" style="display: inline-flex; margin-left: 4px; width: 20px; height: 20px; border-radius: 50%; overflow: hidden; background-color: rgb(255, 255, 255); align-items: center; justify-content: center;">1</span></a>`,
      );
    main_function();
  });

  $('#paginn').click(function () {
    $('#active').append(
      `<ul style="display: flex; align-items: center; justify-content: center;" class="pagin">
      <li class="pagin__prev" style="margin-left: 10px; margin-right: 10px;"><a class="" style="transform: rotate(180deg)"></a></li>
      <li class="" style="margin-left: 10px; margin-right: 10px;"><a class="_active" style="font-weight: 700;">1</a></li><li class="" style="margin-left: 10px; margin-right: 10px;"><a class="">2</a></li><li class="" style="margin-left: 10px; margin-right: 10px;"><a class="">3</a></li><li class="pagin__next" style="margin-left: 10px; margin-right: 10px;"><a class=""></a></li></ul>`,
      );
    main_function();
  });

  $('#btno').click(function () {
    $('#active').append(
      `<a class="btn-o" style="padding-left: 25px; padding-right: 25px; height: 50px; display: inline-flex; align-items: center; justify-content: center;
      ">Обратный звонок</a>`,
      );
    main_function();
  });

  $('#socs').click(function () {
    $('#active').append(
      `<div class="__socials" style="display: flex; align-items: center;"><a class="__social" style="
      display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; "><img src="img/vk.svg"></a></div>`,
      );
    main_function();
  });

  $('#hedr').click(function () {
    $('#active').append(
      `<div class="header" style="height: auto;"><div class="contain"><div class="header__row" style="display: flex; align-items: center; justify-content: space-between;"><a class="logo" style="display: inline-flex; width: 160px; height: 50px;  align-items: center;"><img src="img/logogo.png"><div class="logo__slogan" style="margin-left: 20px;"><div class="" style="margin-bottom: 7px;">Компания</div><div class="">Слоган</div></div></a>

      <div class="" style="">

      <div class="" style="display: flex; align-items: center;">
      <div class="" style="flex: 0 0 auto;"><img src="img/phone.svg"></div>
      <div class="" style="margin-left: 10px;">
      <div class="" style="margin-bottom: 5px;">Телефон (круглосуточно)</div>
      <a class="">+ 7 (495) 505-20-29</a>
      </div>
      </div>

      </div>

      <div class="" style=""><div class="col-mnu">


      <ul class="" style="display: flex; justify-content: flex-start; align-items: center;"><li class="" style=""><a class="">Главная</a></li></ul></div></div><div class="__socials" style="display: flex; align-items: center;"><a class="__social" style="
      display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; "><img src="img/vk.svg"></a></div><div class="" style=""><a class="btn" style="padding-left: 25px; padding-right: 25px; height: 50px; display: inline-flex; align-items: center; justify-content: center; ">Обратный звонок</a></div></div></div></div>`,
      );
    main_function();
  });

  $('#contct').click(function () {
    $('#active').append(
      `<div class="" style="display: flex; align-items: center;">
      <div class="" style="flex: 0 0 auto;"><img src="img/phone.svg"></div>
      <div class="" style="margin-left: 10px;">
      <div class="" style="margin-bottom: 5px;">Телефон (круглосуточно)</div>
      <a class="">+ 7 (495) 505-20-29</a>
      </div>
      </div>`,
      );
    main_function();
  });

  $('.coll-1').click(function () {
    $('#active').append(col1);
    main_function();
  });

  $('.coll-2').click(function () {
    $('#active').append(col2);
    main_function();
  });

  $('.coll-3').click(function () {
    $('#active').append(col3);
    main_function();
  });

  $('.coll-4').click(function () {
    $('#active').append(col4);
    main_function();
  });

  $('.coll-6').click(function () {
    $('#active').append(col6);
    main_function();
  });

  $('.coll-7').click(function () {
    $('#active').append(col7);
    main_function();
  });

  $('#coluu_2').click(function () {
    $('#active').append(
      `<div class="w-row"><div class="contain"><div class="w-row" style="display: flex; justify-content: space-between;"><div class="w-col-6" style="width: 50%;"></div><div class="w-col-6" style="width: 50%;"></div></div></div></div>`,
      );
    main_function();
  });

  $('#coluu_3').click(function () {
    $('#active').append(
      `<div class="w-row"><div class="contain"><div class="w-row" style="display: flex; justify-content: space-between;"><div class="w-col-4" style="width: 33.3333%;"></div></div></div></div>`,
      );
    main_function();
  });

  $('#coluu_4').click(function () {
    $('#active').append(
      `<div class="w-row"><div class="contain"><div class="w-row" style="display: flex; justify-content: space-between;">
      <div class="w-col-3" style="width: 25%;"></div></div></div></div>`,
      );
    main_function();
  });

  $('#coluu_5').click(function () {
    $('#active').append(
      `<div class="w-row"><div class="contain"><div class="w-row" style="display: flex; justify-content: space-between;"><div class="w-row" style="width: 20%;"></div></div></div></div>`,
      );
    main_function();
  });

  $('#coluu_6').click(function () {
    $('#active').append(
      `<div class="w-row"><div class="contain"><div class="w-row" style="display: flex; justify-content: space-between;"><div class="w-col-2" style="width: 16.6667%;"></div></div></div></div>`,
      );
    main_function();
  });

  $('#coluu_w').click(function () {
    $('#active').append(
      `<div class="w-row"><div class="contain"><div class="w-row" style="display: flex; justify-content: space-between;"></div></div></div>`,
      );
    main_function();
  });

  $('.rw').click(function () {
    $('#active').append(rw);
    main_function();
  });

  $('.coll_table').click(function () {
    $('#active').append(
      '<table class="w-table"><thead class="w-thead" style="background-color: #ccc; color: #FFF;"><tr class="w-tr"><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td></tr></thead><tbody class="w-tbody"><tr class="w-tr"><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td></tr></tbody></table>',
      );
    main_function();
  });

  $('.coll_thead').click(function () {
    $('#active').append(col7);
    main_function('<thead class="w-thead" style="background-color: #ccc; color: #FFF;"></thead>');
  });
  $('.coll_tbody').click(function () {
    $('#active').append(col7);
    main_function('<tbody class="w-tbody"></tbody>');
  });
  $('.coll_tr').click(function () {
    $('#active').append(col7);
    main_function('<tr class="w-tr"></tr>');
  });
  $('.coll_td').click(function () {
    $('#active').append(col7);
    main_function('<td class="w-td">Ячейка</td>');
  });

  $('.coll-p').click(function () {
    $('#active').append(colp);
    main_function();
  });

  $('.coll-b').click(function () {
    $('#active').append(colb);
    main_function();
  });

  $('.coll-h1').click(function () {
    $('#active').append(coll_h1);
    main_function();
  });

  $('.coll-h2').click(function () {
    $('#active').append(coll_h2);
    main_function();
  });

  $('.coll-h3').click(function () {
    $('#active').append(coll_h3);
    main_function();
  });

  $('.coll-h4').click(function () {
    $('#active').append(coll_h4);
    main_function();
  });

  $('.coll-h5').click(function () {
    $('#active').append(coll_h5);
    main_function();
  });

  $('.coll-h6').click(function () {
    $('#active').append(`
      <label class="label">
      <input class="label-checkbox" type="checkbox">
      <span class="label-span"></span>
      <span class="label-span-txt">Текст</span>
      </label>

      <label class="label-checked">
      <input class="label-checkbox" type="checkbox">
      <span class="label-span-checked"></span>
      <span class="label-span-txt">Текст</span>
      </label>
      `);
    main_function();
  });

  $('.coll-bq').click(function () {
    $('#active').append(coll_bq);
    main_function();
  });

  /*
.coll-h2 
.coll-h3 
.coll-h4 
.coll-h5 
.coll-h6 
.coll-bq 
*/

  $('.copy').click(function () {
    copy = '';
    copy = $('#active').clone();
  });

  $('.add').click(function () {
    $('#active').append(copy);
    main_function();
  });

  $('.parent').click(function () {
    $('#active').attr('id', '').parent().attr('id', 'active');
    var parent_class = $('#active').attr('class');
    $('.classs').html(parent_class);
    $('.class-name').val(parent_class);

    var styless = $('#active').attr('style');
    $('.styless').val('');
    $('.styless').val(styless);

    var styless_2 = $('#active').attr('style');
    $('.styless_2').val('');
    $('.styless_2').val(styless_2);

    $('.classs2').text($('#active').get(0).tagName);

    css_values();
  });

  /*
$('body').keydown(function(e) {
  if (e.ctrlKey && e.keyCode == 16) {
    var todos = $('.wrapper').html();
    localStorage.setItem('todos', todos);
    $('.save').removeClass('red');
  }
});
*/
  $('body').keydown(function (e) {
    if (e.ctrlKey && e.keyCode == 16) {
      save();
      main_function();
    }
  });

  $('body').keydown(function (e) {
    if (e.key == 'Escape') {
      $('.tools').hide();
    }
  });

  $('.text_val_add').keydown(function (e) {
    if (e.keyCode == 13) {
      var text_val_add = $('.text_val_add').val();
      $('#active').html(text_val_add);
      $('.text_val_add').val('');
      main_function();
    }
  });

  $('.text_val_add_2').keydown(function (e) {
    if (e.keyCode == 13) {
      var text_val_add_2 = $('.text_val_add_2').val();
      $('#active').html(text_val_add_2);
      $('.text_val_add_2').val('');
      main_function();
    }
  });

  /*
$('.tag_name').keydown(function(e) {
  if (e.keyCode == 13) {
    var tag_name = $('.tag_name').val();
    $('#active').append(tag_name);
    $('.tag_name').val('');
    main_function();
  }
});
*/

  $('.placeholder').keydown(function (e) {
    if (e.keyCode == 13) {
      $('#active').attr('placeholder', $('.placeholder').val());
      main_function();
    }
  });

  $('.submit_value').keydown(function (e) {
    if (e.keyCode == 13) {
      $('#active').attr('value', $('.submit_value').val());
      main_function();
    }
  });

  $('.class-name').keydown(function (e) {
    //enter key
    if (e.keyCode == 13) {
      var class_name = $('.class-name').val();
      $('#active').attr('class', class_name);
      $('.class-name').val('');
      //$('#active').after('<!--'+class_name+'-->');
      main_function();
    }
  });

  /*
$('.styless').keydown(function(e) {
  if (e.keyCode == 13) {
    var textar1 = $(this).parent().find('.styless').val();  
    $('#active').attr('style', textar1);
    main_function();
  }
});
*/

  $('.styless').keydown(function (e) {
    if (e.keyCode == 13) {
      var textar1 = $(this).parent().find('.styless').val();
      $('#active').attr('style', textar1);
      main_function();

      var css_fSize = $('#active').css('font-size');
      var css_line_height_2 = $('#active').css('line-height');

      if (css_fSize != css_line_height_2) {
        if (css_fSize != '10.7px' && css_line_height_2 != '10.7px') {
          var css_line_height_tot = Number.parseInt(css_line_height_2) / Number.parseInt(css_fSize);
          css_line_height_tot = css_line_height_tot.toFixed(1);

          $('#active').css('line-height', css_line_height_tot);
        }
      } else {
        $('#active').css('line-height', '');
      }

      if ($('#active').css('line-height') == 'normal') {
        $('#active').css('line-height', '');
      }

      if ($('#active').css('letter-spacing') == '0') {
        $('#active').css('letter-spacing', '');
      }

      if ($('#active').css('text-align') == 'left') {
        $('#active').css('text-align', '');
      }

      if ($('#active').css('font-style') == 'normal') {
        $('#active').css('font-style', '');
      }

      if ($('#active').css('font-weight') == 'normal') {
        $('#active').css('font-weight', '');
      }

      if ($('#active').css('font-weight') == '400') {
        $('#active').css('font-weight', '');
      }
      if ($('#active').css('font-family')) {
        $('#active').css('font-family', '');
      }
      if ($('#active').css('font-feature-settings')) {
        $('#active').css('font-feature-settings', '');
      }
      
    }
  });

  $('.styless_2').keydown(function (e) {
    if (e.keyCode == 13) {
      var textar2 = $(this).parent().find('.styless_2').val();
      $('#active').attr('style', textar2);
      main_function();
    }
  });

  $('.bordcol').keydown(function (e) {
    if (e.keyCode == 13) {
      var bordcol = $('.bordcol').val();
      $('#active').css('border-color', bordcol);
      main_function();
    }
  });

  $('.bordwidth').keydown(function (e) {
    if (e.keyCode == 13) {
      var bordwidth = $('.bordwidth').val();
      $('#active').css('border-width', bordwidth);
      main_function();
    }
  });

  $('.type_file').change(function () {
    var f_name = [];
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      f_name.push('' + $(this).get(0).files[i].name);
    }
    var img_src = f_name.join(',');
    $('#active').append('<img src="img/' + img_src + '">');
    main_function();
  });

  $('.type_file2').change(function () {
    var f_name = [];
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      f_name.push('' + $(this).get(0).files[i].name);
    }
    var img_bg = f_name.join(',');
    $('#active')
    .css('background-image', 'url(img/' + img_bg + ')')
    .css('background-repeat', 'no-repeat')
    .css('background-position', 'left center');
    main_function();
  });

  $('a, input[type="submit"]').click(function (e) {
    e.preventDefault();
  });

  $('.before').click(function () {
    $('#active').before('<div class="w-row"></div>');
    main_function();
  });

  $('.radius').click(function (event) {
    $('#active').css('border-radius', '50%').css('overflow', 'hidden');
  });

  $('.but_form_1').click(function (event) {
    $('#active').append(
      '<form class="w-form"><input class="w-input-text" type="text" placeholder="Ваш телефон"></form>',
      );
    main_function();
  });

  $('.but_form_2').click(function (event) {
    $('#active').append(
      '<form class="w-form"><div class="v-label"><span class="v-label-txt">Ваше имя</span><input type="text" class="w-input-text" placeholder="Александр"></div></form>',
      );
    main_function();
  });

  $('.but_text').click(function (event) {
    $('#active').append('<input class="w-input-text" type="text" placeholder="Ваш телефон">');
    main_function();
  });

  $('.but_textarea').click(function (event) {
    $('#active').append('<textarea class="w-textarea" placeholder="Ваш телефон"></textarea>');
    main_function();
  });

  $('.but_subm').click(function (event) {
    $('#active').append(' <input type="submit" class="w-subm">');
    main_function();
  });

  $('.but_ul').click(function (event) {
    $('#active').append('<ul class="w-ul"><li class="w-li">List item</li></ul>');
    main_function();
  });

  $('.but_li').click(function (event) {
    $('#active').append('<li class="w-li">List item</li>');
    main_function();
  });

  $('.but_dot').click(function (event) {
    $('#active').prepend('<div class="nedodot"></div>');
    main_function();
  });

  styless = '.two{background-color: #fff; }';

  $('.style-2').prepend(styless);

  $(function () {
    $('#draggable').draggable();
  });

  /*$('.tool-btn').click(function () {  
  $('.fonst-labels-group').toggleClass('active');
});

$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 83) {    
    $('.fonst-labels-group').toggleClass('active');
  }
});*/

  $('.tool-btn-w, .tool-btn').click(function () {
    e.stopPropagation();
  });
}); //ready
