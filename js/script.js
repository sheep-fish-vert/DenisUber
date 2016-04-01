var cor = true;
jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
var scroller=jQuery.browser.webkit ? "body": "html";
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function goTo(){
    $('.dv2 .ul_menu li a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        if(href=='#dv4'){
            var target = $(href).offset().top+90;
        }else{
            var target = $(href).offset().top;
        }

        $(scroller).animate({scrollTop:target},500);
    });
}
$(document).ready(function (){
    //Маски на телефоны
    $('input[type=tel]').mask('+9(999)999-99-99');
    //=====================================
    /*-------Обработчик форм---------*/
    var incorrect_name_placeholder = "Укажите Ваше имя";
    var incorrect_phone_placeholder = "Укажите Ваш телефон";
    var incorrect_email_placeholder = "Укажите Ваш E-mail";

    $("form").submit(function () {
        cor = true;
        var name = $(this).find("input[name='name']");
        var phone = $(this).find("input[name='phone']");
        var email = $(this).find("input[name='email']");
        var result = true;
        if (name.val() != "" && name.val() != incorrect_name_placeholder) {
            name.removeClass('incorrect');
        } else {
            name.addClass('incorrect');
            name.val(incorrect_name_placeholder);
            cor = false;
            result = false;
        }
        if (email.val() != "" && IsEmail(mail.val()) && email.val() != incorrect_email_placeholder) {
            email.removeClass('incorrect');
        } else {
            email.addClass('incorrect');
            email.val(incorrect_email_placeholder);
            cor = false;
            result = false;
        }
        if (phone.val() != "" && phone.val() != incorrect_phone_placeholder) {
            phone.removeClass('incorrect');
        } else {
            phone.addClass('incorrect');
            phone.val(incorrect_phone_placeholder);
            cor = false;
            result = false;
        }
        if (result) { return true; } else { return false; }
    });
    $("input[type='text'],input[type='tel'],input[name='email']").click(function ()
    {
        if ($(this).val() == incorrect_name_placeholder)
        {
            $(this).val("");
        }
        if ($(this).val() == incorrect_phone_placeholder)
        {
            $(this).val("");
        }
        if ($(this).val() == incorrect_email_placeholder)
        {
            $(this).val("");
        }
        $(this).removeClass('incorrect');
    });
    /*------------------------------*/
    //=====================================
    $('.fancybox_recall').click(function (){
        var form=$(this).data('form-pop');
        $('#recall form').data('form-pop',form);
        $('#recall form input[name=what_form]').val($('#recall form input[name=what_form]').val()+' по кнопке: '+form)
        $.fancybox.open({href : '#recall',padding: 0})
        return false;
    });
    //headre slider-------------------------------------
    function slider(){
        var count = $('.dv1 .slider .item').length;
        $('.dv1 .slider .item').eq(0).addClass('active');
        for(var i=0;i<count;i++){
            if(!i){
                $('.dv1 .slider_wrapper .navigator').append('<span class="active"></span>');
            }else{
                $('.dv1 .slider_wrapper .navigator').append('<span></span>');
            }
        }
        $('.dv1 .slider_wrapper').on('click','.navigator span', function (){
            if(!$(this).hasClass('active')){
                $('.dv1 .slider_wrapper .navigator span').removeClass('active');
                $(this).addClass('active');
                $('.dv1 .slider .item').removeClass('active');
                $($('.dv1 .slider .item').eq($(this).index()).addClass('active'));
            }
        });
        $('.dv1 .slider .item').hover(function (){
            $('.dv1 .slider').addClass('hover');
        },function (){
            $('.dv1 .slider').removeClass('hover');
        })
        function next(){
            var cur_index= $('.dv1 .slider_wrapper .navigator span.active').index();
            if(cur_index+1>=count){ cur_index=0; }else{ cur_index++;}
            $('.dv1 .slider_wrapper .navigator span').removeClass('active');
            $('.dv1 .slider_wrapper .navigator span').eq(cur_index).addClass('active');
            $('.dv1 .slider .item').removeClass('active');
            $('.dv1 .slider .item').eq(cur_index).addClass('active');
        }

        setInterval(function (){
            if(!$('.dv1 .slider').hasClass('hover')){
                next();
            }
        },5000);
    }


    //==================================================

    //Табы ==============================================
    var items=$('.dv4 .in_tabs_wrapper .in_tabs_container ul li');
    var count=$(items).length;

    var max_height=0;
    for(var i=0;i<count;i++){
        if($(items).eq(i).outerHeight()>max_height){
            max_height=$(items).eq(i).outerHeight();
        }
    }
    $('.dv4 .in_tabs_wrapper .in_tabs_container ul').css('height',max_height+'px');
    $('.dv4 .tab_control_wrapper .tab_control_container ul li').click(function (){
        var index=$(this).index();
        $('.dv4 .tab_control_wrapper .tab_control_container ul li').removeClass('active');
        $('.dv4 .in_tabs_wrapper .in_tabs_container ul li').removeClass('active');
        $(this).addClass('active');
        $('.dv4 .in_tabs_wrapper .in_tabs_container ul li').eq(index).addClass('active');
    })
    //===================================================
    slider();
    goTo();


    function slickComment(){
        $('.comment_slider_wrap').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true,
            autoplay:true,
            prevArrow:'<button type="button" class="slick-prev"></button>',
            nextArrow:'<button type="button" class="slick-next"></button>'
        });
    }
    slickComment();
});