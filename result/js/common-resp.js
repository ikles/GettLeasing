jQuery(document).ready(function( $ ) {


  var i = 0;
  
  
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
    $('.tal').prop("checked", true);
  }   

  $('.objcov').prop('checked', false);    
  if ($('#active').css('object-fit') == 'cover') {      
    $('.objcov').prop("checked", true);
  } 
  
  $('.flwrap').prop('checked', false);    
  if ($('#active').css('flex-wrap') == 'wrap') {
    $('.flwrap').prop("checked", true);
  } 



  $('.tac').prop('checked', false);    
  if ($('#active').css('text-align') == 'center') {      
    $('.tac').prop("checked", true);
  }  

  $('.tar').prop('checked', false);    
  if ($('#active').css('text-align') == 'right') {      
    $('.tar').prop("checked", true);
  } 

  $('.bordaround').prop('checked', false);    
  $('.bordright').prop('checked', false);
  $('.bordtop').prop('checked', false);
  $('.bordbot').prop('checked', false);
  $('.bordleft').prop('checked', false);


  $('.dblock').prop('checked', false);
  if ($('#active').css('display') == 'block') {
    $('.dblock').prop("checked", true);
  } 
  $('.dinline').prop('checked', false);
  if ($('#active').css('display') == 'inline') {
    $('.dinline').prop("checked", true);
  } 
  $('.dinlineblock').prop('checked', false);
  if ($('#active').css('display') == 'inline-block') {
    $('.dinlineblock').prop("checked", true);
  }

  $('.fd_col').prop('checked', false);
  if ($('#active').css('flex-deriction') == 'column') {
    $('.fd_col').prop("checked", true);
  }

  $('.fd_row').prop('checked', false);
  if ($('#active').css('flex-deriction') == 'row') {
    $('.fd_row').prop("checked", true);
  }

  $('.dflex').prop('checked', false);
  if ($('#active').css('display') == 'flex') {
    $('.dflex').prop("checked", true);
  } 
  
  $('.ai1').prop('checked', false);
  if ($('#active').css('align-items') == 'flex-start') {
    $('.ai1').prop("checked", true);
  } 

  $('.ai2').prop('checked', false);
  if ($('#active').css('align-items') == 'center') {
    $('.ai2').prop("checked", true);
  } 

  $('.ai3').prop('checked', false);
  if ($('#active').css('align-items') == 'flex-end') {
    $('.ai3').prop("checked", true);
  } 

  $('.jc1').prop('checked', false);
  if ($('#active').css('justify-content') == 'flex-start') {
    $('.jc1').prop("checked", true);
  } 

  $('.jc2').prop('checked', false);
  if ($('#active').css('justify-content') == 'space-between') {
    $('.jc2').prop("checked", true);
  } 

  $('.jc3').prop('checked', false);
  if ($('#active').css('justify-content') == 'flex-end') {
    $('.jc3').prop("checked", true);
  } 

  $('.jc4').prop('checked', false);
  if ($('#active').css('justify-content') == 'center') {
    $('.jc4').prop("checked", true);
  } 

  $('.dnone').prop('checked', false);
  if ($('#active').css('display') == 'none') {
    $('.dnone').prop("checked", true);
  } 

  $('.iflex').prop('checked', false);
  if ($('#active').css('display') == 'inline-flex') {
    $('.iflex').prop("checked", true);
  } 

  


  $('.ma').prop('checked', false);
  $('.mha').prop('checked', false);
  if ($('#active').css('min-height') == 'auto') {      
    $('.mha').prop("checked", true);
  }    


  $('.fsi').prop('checked', false);
  if ($('#active').css('font-style') == 'italic') {      
    $('.fsi').prop("checked", true);
  } 

  $('.bornone').prop('checked', false);
  if ($('#active').css('border') == 'none') {
    $('.bornone').prop("checked", true);
  } 

  $('.float1').prop('checked', false);
  if ($('#active').css('float') == 'left') {      
    $('.float1').prop("checked", true);
  }    

  $('.float2').prop('checked', false);
  if ($('#active').css('float') == 'right') {      
    $('.float2').prop("checked", true);
  }  

  $('.float3').prop('checked', false);
  if ($('#active').css('float') == 'none') {      
    $('.float3').prop("checked", true);
  }  



  $('.ltop').prop('checked', false);
  if ($('#active').css('background-position') == 'left top') {
    $('.ltop').prop("checked", true);
  } 

  $('.topce').prop('checked', false);
  if ($('#active').css('background-position') == 'top center') {
    $('.topce').prop("checked", true);
  } 

  $('.ritop').prop('checked', false);
  if ($('#active').css('background-position') == 'right top') {
    $('.ritop').prop("checked", true);
  } 

  $('.ricentr').prop('checked', false);
  if ($('#active').css('background-position') == 'right center') {
    $('.ricentr').prop("checked", true);
  } 

  $('.ribot').prop('checked', false);
  if ($('#active').css('background-position') == 'right bottom') {
    $('.ribot').prop("checked", true);
  } 

  $('.botcentr').prop('checked', false);
  if ($('#active').css('background-position') == 'bottom center') {
    $('.botcentr').prop("checked", true);
  } 

  $('.lebot').prop('checked', false);
  if ($('#active').css('background-position') == 'left bottom') {
    $('.lebot').prop("checked", true);
  } 


  $('.lecentr').prop('checked', false);
  if ($('#active').css('background-position') == 'left center') {
    $('.lecentr').prop("checked", true);
  } 


  $(".overflow1").prop('checked', false);


  $(".overflow2").prop('checked', false);


  $(".posre").prop('checked', false);
  if ($('#active').css('position') == 'relative') {      
    $('.posre').prop("checked", true);
  } 
  $(".posa").prop('checked', false);
  if ($('#active').css('position') == 'absolute') {      
    $('.posa').prop("checked", true);
  }
  $(".possta").prop('checked', false);
}



/*$('.form-my2').append('<span style="cursor: pointer; position: absolute; left: 140px; top: 115px; margin-right: 0; width: 84px;" class="butospan stroove">st id rem</span>');

$('.form-my2').append('<span style="cursor: pointer; position: absolute; left: 140px; top: 170px; margin-right: 0; width: 84px;" class="butospan copy-html">copy htm</span>');
*/
$('.stroove').click(function() {
  $('*').removeAttr('style');
  $('*').removeAttr('id');  
});


$('.form-my2').prepend('<span class="hide"></span>');

$('.copy-html').click(function() {
  $('.hide').html('');
  $('.hide').append($('#active').clone()); 
  $('.hide #active, .hide #active *').removeAttr('id');
  $('.styless').val('');
  $('.styless_2').val('');
  $('.styless').val($('.hide').html());
  $('.styless_2').val($('.hide').html());
});

$('.eye2').click(function() {
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
$('body').keydown(function(e) {
  if (e.keyCode == 113) {
    $('.wrapper').toggleClass('bord');
  }
});

$('body').keydown(function(e) {
  if (e.ctrlKey && e.keyCode == 46) {
    $('#active:not(.wrapper, .remove)').remove();
  }
});

/*
 $('.remove').click(function () {
  $('#active:not(.wrapper, .remove)').remove();
});
*/




$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 112) {
    //$('#active').remove();    
    $('.w-row, .w-col-6, .w-col-4, .w-col-2, .w-ul, .w-li, .w-a, .w-span, .w-textarea, .w-form, .w-input-text, .w-subm, .w-table, .w-tr, .w-td, .w-tbody, .w-thead, .w-wrap').toggleClass('redbord');
  }
});


$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 81) {
   $('.text_val_add_2').fadeToggle();
   main_function();  
 }
});


$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 87) {
   $('.styless_2').fadeToggle();   
   main_function();  
 }
});


//q - 81
//w - 87


$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 67) {
    copy = '';
    copy = $('#active').clone();    
  }
});

$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 86) {
    $('#active').append(copy);
    main_function();    
  }
});


//alt+z 90 переход на родителя


$('body').keydown(function(e) {
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

$('body').keydown(function(e) {
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

$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 40) {
    if( $('#active').children().length > 0 ) {
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

$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 37) {


    if( $('#active').prev().length > 0 ) {
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

$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 39) {


   if( $('#active').next().length > 0 ) {
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


$('body').keydown(function(e) {
  if (e.altKey && e.keyCode == 113) {    
    $('.wrapper').toggleClass('bord2').removeClass('bord');    
  }
});



$('.eye').click(function() {
  if ( ! $('.wrapper').hasClass('bord') ) {
    $('.wrapper').addClass('bord');
  }
  else {
   $('.wrapper').removeClass('bord').removeClass('padd'); 
 }
});

function main_function() {
  $(".wrapper *, .wrapper").mouseover(function(event){
    $('a').click(function (e) {
      e.preventDefault();
    });
    event.stopPropagation();

    var podskaz = $(this).attr('class');   
    $('.classs').append('<span class="podskaz2">'+podskaz+'</span>'); 
   //$(this).addClass('active2');
 }).mouseout(function(event){

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
$('.wrapper *:not(.remove), .wrapper').on('click', function(event) {      
  $(this).removeClass('active2');    
    //$('*').attr('id', '');
    $('*').removeAttr('id');
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
      $('.tal').prop("checked", true);
    }    

    $('.objcov').prop('checked', false);    
    if ($('#active').css('object-fit') == 'cover') {      
      $('.objcov').prop("checked", true);
    }   
    $('.flwrap').prop('checked', false);    
    if ($('#active').css('flex-wrap') == 'wrap') {      
      $('.flwrap').prop("checked", true);
    }   



    $('.tac').prop('checked', false);    
    if ($('#active').css('text-align') == 'center') {      
      $('.tac').prop("checked", true);
    }  

    $('.tar').prop('checked', false);    
    if ($('#active').css('text-align') == 'right') {      
      $('.tar').prop("checked", true);
    } 

    $('.bordaround').prop('checked', false);    
    $('.bordright').prop('checked', false);
    $('.bordtop').prop('checked', false);
    $('.bordbot').prop('checked', false);
    $('.bordleft').prop('checked', false);


    $('.dblock').prop('checked', false);
    if ($('#active').css('display') == 'block') {
      $('.dblock').prop("checked", true);
    } 
    $('.dinline').prop('checked', false);
    if ($('#active').css('display') == 'inline') {
      $('.dinline').prop("checked", true);
    } 
    $('.dinlineblock').prop('checked', false);
    if ($('#active').css('display') == 'inline-block') {
      $('.dinlineblock').prop("checked", true);
    } 

    $('.fd_col').prop('checked', false);
    if ($('#active').css('flex-direction') == 'column') {
      $('.fd_col').prop("checked", true);
    } 

    $('.fd_row').prop('checked', false);
    if ($('#active').css('flex-direction') == 'row') {
      $('.fd_row').prop("checked", true);
    } 

    $('.dflex').prop('checked', false);
    if ($('#active').css('display') == 'flex') {
      $('.dflex').prop("checked", true);
    } 

    $('.ai1').prop('checked', false);
    if ($('#active').css('align-items') == 'flex-start') {
      $('.ai1').prop("checked", true);
    } 

    $('.ai2').prop('checked', false);
    if ($('#active').css('align-items') == 'center') {
      $('.ai2').prop("checked", true);
    } 

    $('.ai3').prop('checked', false);
    if ($('#active').css('align-items') == 'flex-end') {
      $('.ai3').prop("checked", true);
    } 

    $('.jc1').prop('checked', false);
    if ($('#active').css('justify-content') == 'flex-start') {
      $('.jc1').prop("checked", true);
    } 

    $('.jc2').prop('checked', false);
    if ($('#active').css('justify-content') == 'space-between') {
      $('.jc2').prop("checked", true);
    } 

    $('.jc3').prop('checked', false);
    if ($('#active').css('justify-content') == 'flex-end') {
      $('.jc3').prop("checked", true);
    } 

    $('.jc4').prop('checked', false);
    if ($('#active').css('justify-content') == 'center') {
      $('.jc4').prop("checked", true);
    } 

    $('.dnone').prop('checked', false);
    if ($('#active').css('display') == 'none') {
      $('.dnone').prop("checked", true);
    } 

    $('.iflex').prop('checked', false);
    if ($('#active').css('display') == 'inline-flex') {
      $('.iflex').prop("checked", true);
    } 


    $('.ma').prop('checked', false);
    $('.mha').prop('checked', false);
    if ($('#active').css('min-height') == 'auto') {      
      $('.mha').prop("checked", true);
    }    


    $('.fsi').prop('checked', false);
    if ($('#active').css('font-style') == 'italic') {      
      $('.fsi').prop("checked", true);
    } 

    $('.bornone').prop('checked', false);
    if ($('#active').css('border') == 'none') {
      $('.bornone').prop("checked", true);
    } 

    $('.float1').prop('checked', false);
    if ($('#active').css('float') == 'left') {      
      $('.float1').prop("checked", true);
    }    

    $('.float2').prop('checked', false);
    if ($('#active').css('float') == 'right') {      
      $('.float2').prop("checked", true);
    }  

    $('.float3').prop('checked', false);
    if ($('#active').css('float') == 'none') {      
      $('.float3').prop("checked", true);
    }  


    $('.ltop').prop('checked', false);
    if ($('#active').css('background-position') == 'left top') {
      $('.ltop').prop("checked", true);
    }

    $('.topce').prop('checked', false);
    if ($('#active').css('background-position') == 'top center') {
      $('.topce').prop("checked", true);
    } 

    $('.ritop').prop('checked', false);
    if ($('#active').css('background-position') == 'right top') {
      $('.ritop').prop("checked", true);
    } 

    $('.ricentr').prop('checked', false);
    if ($('#active').css('background-position') == 'right center') {
      $('.ricentr').prop("checked", true);
    } 

    $('.ribot').prop('checked', false);
    if ($('#active').css('background-position') == 'right bottom') {
      $('.ribot').prop("checked", true);
    } 

    $('.botcentr').prop('checked', false);
    if ($('#active').css('background-position') == 'bottom center') {
      $('.botcentr').prop("checked", true);
    } 

    $('.lebot').prop('checked', false);
    if ($('#active').css('background-position') == 'left bottom') {
      $('.lebot').prop("checked", true);
    } 


    $('.lecentr').prop('checked', false);
    if ($('#active').css('background-position') == 'left center') {
      $('.lecentr').prop("checked", true);
    } 


    $(".overflow1").prop('checked', false);


    $(".overflow2").prop('checked', false);
    

    $(".posre").prop('checked', false);
    if ($('#active').css('position') == 'relative') {      
      $('.posre').prop("checked", true);
    } 


    $(".posa").prop('checked', false);
    if ($('#active').css('position') == 'absolute') {      
      $('.posa').prop("checked", true);
    }
    $(".possta").prop('checked', false);
  });

$('.class-name2').val('');

$('.text_val2').val('');



}// end main_function

$('.line_height').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "line-height",  $('.line_height').val());
});

$('.width').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;  
  $(wi_cl).css( "width",  $('.width').val());
  //$('#active').css( "width",  $('.width').val());
});

$('.color').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "color",  $('.color').val());
});

$('.bgColor').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-color",  $('.bgColor').val());
});


$('.fSize').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "font-size",  $('.fSize').val()+'px');
});

$('.fWeight').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "font-weight",  $('.fWeight').val());
});



$('.bordwidth').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "border-width",  $('.bordwidth').val());
});

$('.height').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "height",  $('.height').val());
});

$('.minheight').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl
  $(wi_cl).css( "min-height",  $('.minheight').val()+'px');
});

$('.maxwidth').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "max-width",  $('.maxwidth').val());
});

$('.margin_bottom').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "margin-bottom",  $('.margin_bottom').val()+'px');
});

$('.margin_top').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "margin-top",  $('.margin_top').val()+'px');
});

$('.margin_right').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "margin-right",  $('.margin_right').val()+'px');
});

$('.margin_left').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "margin-left",  $('.margin_left').val()+'px');
});


/*****************/
$('.padding_bottom').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "padding-bottom",  $('.padding_bottom').val()+'px');
});

$('.padding_top').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "padding-top",  $('.padding_top').val()+'px');
});

$('.padding_right').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "padding-right",  $('.padding_right').val()+'px');
});

$('.padding_left').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "padding-left",  $('.padding_left').val()+'px');
});

$('.position_bottom').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "bottom",  $('.position_bottom').val()+'px');
});

$('.position_top').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "top",  $('.position_top').val()+'px');
});

$('.position_right').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "right",  $('.position_right').val()+'px');
});

$('.position_left').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "left",  $('.position_left').val()+'px');
});

$('.z_index').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "z-index",  $('.z_index').val());
});

$('.opacity').bind('textchange', function() {        
  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "opacity",  $('.opacity').val());
});






/*****************/

$('.form-my .butt').click(function () {

}); //end click butt




$(".tal").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "text-align", "left" );
});

$(".objcov").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "object-fit", "cover" );
});

$(".flwrap").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "flex-wrap", "wrap" );
});



$(".tac").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "text-align", "center" );
});

$(".tar").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "text-align", "right" );
});

$(".ma").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "margin", "auto" );
});

$(".mha").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "min-height", "auto" );
});

$(".fsi").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "font-style", "italic" );
});

$(".bornone").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "border", "none" );
});

$(".bordaround").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "border", "1px solid #000" ); 
});

$(".bordleft").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "border-left", "1px solid #000" ); 
});

$(".bordtop").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "border-top", "1px solid #000" ); 
});

$(".bordbot").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "border-bottom", "1px solid #000" ); 
});

$(".bordright").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "border-right", "1px solid #000" ); 
});

$(".float1").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "float", "left" ); 
  $(wi_cl).css( "float", "left" ); 
});

$(".float2").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "float", "right" ); 
  $(wi_cl).css( "float", "right" );
});

$(".float3").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "float", "none" ); 
  $(wi_cl).css( "float", "none" );
});


$('.ltop').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "left top" );
});

$('.topce').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "top center" ); 
});

$('.ritop').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "right top" ); 
});

$('.ricentr').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "right center" ); 
});

$('.ribot').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "right bottom" ); 
});


$('.botcentr').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "bottom center" ); 
});

$('.lebot').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "left bottom" ); 
});

$('.lecentr').click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "background-position", "left center" ); 
});


$(".dblock").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "display", "block" ); 
});
$(".dinline").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "display", "inline" ); 
});
$(".dinlineblock").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "display", "inline-block" ); 
});

$(".fd_col").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "flex-direction", "column" ); 
});

$(".fd_row").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "flex-direction", "row" ); 
});


$(".dflex").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "display", "flex" ); 
});

$(".ai1").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "align-items", "flex-start"); 
});

$(".ai2").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "align-items", "center"); 
});

$(".ai3").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "align-items", "flex-end"); 
});

$(".jc1").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "justify-content", "flex-start" ); 
});

$(".jc2").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "justify-content", "space-between" ); 
});

$(".jc3").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "justify-content", "flex-end" ); 
});

$(".jc4").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "justify-content", "center" ); 
});

$(".dnone").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "display", "none" ); 
});

$(".iflex").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "display", "inline-flex" ); 
});


$(".overflow1").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "overflow", "hidden" ); 
  $(wi_cl).css( "overflow", "hidden" ); 
});

$(".overflow2").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "overflow", "visible" ); 
  $(wi_cl).css( "overflow", "visible" );
});


$(".posre").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "position", "relative" ); 
});


$(".posa").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "position", "absolute" ); 
});

$(".possta").click(function() {

  var wi_cl = $('#active').attr('class');
  var wi_cl = '.'+wi_cl;
  $(wi_cl).css( "position", "static" ); 
});





/*
  $(document).on('click','div',function(e){
    $('div').attr('id', '');
    $(this).attr('id', 'active');
 });
 */

 main_function();

 $('.form-my2 .butt2').click(function () {  
  if ( $('.class-name2').val() != '' ) {
    var inp2 = $(this).parent().find('.class-name2').val();
  }
  else {
   var inp2 = 'div-block';
 }
 
 var textar22 = $(this).parent().find('.text_val2').val();

 var $elementJq2 = $('<div/>', {    
  class: inp2,
  style: textar12,
  text: textar22
}); 

 var $elementJq3 = $('<span/>', {    
  id: inp2,
  text: inp2
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

var timerId = setInterval(function() {
  $('.save').addClass('red');
}, 10000);
/*
$('.save').click(function () {
  var todos = $('.wrapper').html();
  localStorage.setItem('todos', todos);
  $('.save').removeClass('red');
});
*/
$('.save').click(function () {  
  var now2 = new Date();
  var todos = '<!--'+project+' '+now2+'--> '+$('.wrapper').html();
  localStorage.setItem('todos'+i, todos);
  $('.save').removeClass('red');
  if (i > 5) {
    i = 0;
  }
  i++;
});


var col1 = '<div class="w-row"></div>';
var col2 = '<div class="w-col-6"></div><div class="w-col-6"></div>';
var col3 = '<div class="w-col-4"></div><div class="w-col-4"></div><div class="w-col-4"></div>';
var col4 = '<div class="w-col-3"></div><div class="w-col-3"></div><div class="w-col-3"></div><div class="w-col-3"></div>';
var col6 = '<div class="w-col-2"></div><div class="w-col-2"></div><div class="w-col-2"></div><div class="w-col-2"></div><div class="w-col-2"></div><div class="w-col-2"></div>';
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

var cols_50 =  '<div class="cols-50" style="display: flex;"><div class="col-50" style="width: 50%;">1</div><div class="col-50" style="width: 50%;">2</div></div>';


var cols_50_w = '<div class="cols-50" style="display: flex;"><div class="col-50" style="width: 50%;"><div class="w-row">w1</div></div><div class="col-50" style="width: 50%;"><div class="w-row">w2</div></div></div>';


$('.coll-w').click(function () {
  $('#active').wrap("<div class='w-wrap'></div>");
  main_function();
});



$('.link').click(function() {
  $('#active').append('<a class="w-a">Link</a>');
  main_function();
});

$('.span').click(function() {
  $('#active').append('<span class="w-span">span</span>');
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

$('.rw').click(function () {
  $('#active').append(rw);
  main_function();
});

$('.coll_table').click(function () {
  $('#active').append('<table class="w-table"><thead class="w-thead" style="background-color: #ccc; color: #FFF;"><tr class="w-tr"><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td></tr></thead><tbody class="w-tbody"><tr class="w-tr"><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td><td class="w-td">Ячейка</td></tr></tbody></table>');
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
  $('#active').append(coll_h6);
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
$('body').keydown(function(e) {
  if (e.ctrlKey && e.keyCode == 16) {    
    var now = new Date();
    var todos = '<!--'+project+' '+now+'--> '+$('.wrapper').html();
    localStorage.setItem('todos'+i, todos);
    $('.save').removeClass('red');    
    if (i > 5) {
      i = 0;
    }
    i++;
  }
});


$('.text_val_add').keydown(function(e) {
  if (e.keyCode == 13) {
    var text_val_add = $('.text_val_add').val();
    $('#active').html(text_val_add);
    $('.text_val_add').val('');
    main_function();
  }
});

$('.text_val_add_2').keydown(function(e) {
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

$('.placeholder').keydown(function(e) {
  if (e.keyCode == 13) {    
    $('#active').attr( "placeholder",  $('.placeholder').val());
    main_function();
  }
});

$('.submit_value').keydown(function(e) {
  if (e.keyCode == 13) {    
    $('#active').attr( "value",  $('.submit_value').val());
    main_function();
  }
});




$('.class-name').keydown(function(e) {
  if (e.keyCode == 13) {
    var class_name = $('.class-name').val();
    $('#active').attr('class', class_name);
    $('.class-name').val('');
    //$('#active').after('<!--'+class_name+'-->');
    main_function();
  }
});


$('.styless').keydown(function(e) {
  if (e.keyCode == 13) {
    var textar1 = $(this).parent().find('.styless').val();  
    //$('#active').attr('style', textar1);
    var wi_cl = $('#active').attr('class');
    var wi_cl = '.'+wi_cl;
    $(wi_cl).attr('style', textar1);
    main_function();
  }
});

$('.styless_2').keydown(function(e) {
  if (e.keyCode == 13) {
    var textar2 = $(this).parent().find('.styless_2').val();  
    $('#active').attr('style', textar2);
    main_function();
  }
});


$('.bordcol').keydown(function(e) {
  if (e.keyCode == 13) {
    var bordcol = $('.bordcol').val();  
    $('#active').css('border-color', bordcol);    
    main_function();
  }
});

$('.bordwidth').keydown(function(e) {
  if (e.keyCode == 13) {
    var bordwidth = $('.bordwidth').val();  
    $('#active').css('border-width', bordwidth);    
    main_function();
  }
});


$(".type_file").change(function(){
  var f_name = [];
  for (var i = 0; i < $(this).get(0).files.length; ++i) {
    f_name.push('' + $(this).get(0).files[i].name);
  }
  var img_src = f_name.join(',');
  $('#active').append('<img src="img/'+img_src+'">');
  main_function();
});



$(".type_file2").change(function(){
  var f_name = [];
  for (var i = 0; i < $(this).get(0).files.length; ++i) {
    f_name.push('' + $(this).get(0).files[i].name);
  }
  var img_bg = f_name.join(',');    
  $('#active')
  .css('background-image', 'url(img/'  + img_bg + ')')
  .css('background-repeat', 'no-repeat')
  .css('background-position', 'left top');  
  main_function();
});




$('a, input[type="submit"]').click(function (e) {
  e.preventDefault();  
});

$('.before').click(function() {
  $('#active').before('<div class="w-row"></div>');
  main_function();
});


$('.radius').click(function(event) {
  $('#active').css('border-radius', '50%')
  .css('overflow', 'hidden');
});

$('.but_form_1').click(function(event) {
  $('#active').append('<form class="w-form"><input class="w-input-text" type="text" placeholder="Ваш телефон"></form>');
  main_function();
});

$('.but_form_2').click(function(event) {
  $('#active').append('<form class="w-form"><div class="v-label"><span class="v-label-txt">Ваше имя</span><input type="text" class="w-input-text" placeholder="Александр"></div></form>');
  main_function();
});



$('.but_text').click(function(event) {
  $('#active').append('<input class="w-input-text" type="text" placeholder="Ваш телефон">');
  main_function();
});

$('.but_textarea').click(function(event) {
  $('#active').append('<textarea class="w-textarea" placeholder="Ваш телефон"></textarea>');
  main_function();
});

$('.but_subm').click(function(event) {
  $('#active').append(' <input type="submit" class="w-subm">');
  main_function();
});



$('.but_ul').click(function(event) {
  $('#active').append('<ul class="w-ul"><li class="w-li">List item</li></ul>');
  main_function();
});

$('.but_li').click(function(event) {
  $('#active').append('<li class="w-li">List item</li>');
  main_function();
});

$('.but_dot').click(function(event) {
  $('#active').prepend('<div class="nedodot"></div>');
  main_function();
});





styless = '.two{background-color: #fff; }';

$('.style-2').prepend(styless);


}); //ready


