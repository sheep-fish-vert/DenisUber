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
    $('.dv2 .ul_menu li a').click(function(e) {

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

function fotogalleryInit(){

    $('.fotogallery-main').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        infinite: true,
        arrows:true,
        dots:true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:3
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            }
        ]
    });

}

$(document).ready(function (){

    fotogalleryInit();

    //Маски на телефоны
    $('input[type=tel]').mask('+9(999)999-99-99');
    //=====================================

    //=====================================
    $('.fancybox_recall').click(function (){
        var form=$(this).data('form-pop');
        var hrefId = $(this).attr('href');

        redFlag = $(this).attr('data-form-pop')+'_'+($(this).attr('href')).substr(1);

        $('#recall form').data('form-pop',form);
        $('#recall form input[name=what_form]').val($('#recall form input[name=what_form]').val()+' по кнопке: '+form)
        $.fancybox.open({href : hrefId,padding: 0})
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
            slidesToScroll: 5,
            slidesToShow: 5,
            infinite: true,
            autoplay:true,
            arrows:false,
            dots:true,
            responsive:[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:3
                    }
                },
                {
                    breakpoint: 667,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll:1,
                        arrows:true,
                        dots:false,
                        prevArrow:'<button type="button" class="slick-prev"></button>',
                        nextArrow:'<button type="button" class="slick-next"></button>'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll:1,
                        arrows:true,
                        dots:false,
                        prevArrow:'<button type="button" class="slick-prev"></button>',
                        nextArrow:'<button type="button" class="slick-next"></button>'
                    }
                }
            ]
            /*prevArrow:'<button type="button" class="slick-prev"></button>',
            nextArrow:'<button type="button" class="slick-next"></button>'*/
        });

        $('.fancybox').fancybox({
            padding:0,
            fitToView:true,
            autoSize:true
        });

        $('.fancybox-fotogallery').fancybox({
            padding:0,
            fitToView:true,
            autoSize:true,
            closeBtn:false,
            wrapCSS:'fotogallery-fancybox-wrap'
        });

    }
    slickComment();

    function googleMap(mapWrap){
        function initialize() {
            var myLatlng = new google.maps.LatLng(cordX,cordY);
            var myOptions = {
                zoom: 14,
                center: myLatlng,
                disableDefaultUI: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
                }
            }
            var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

            var contentString = '<div class="marker-test">'+googleText+'</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP,
            });

            /*анимация при клике на маркер*/
            marker.addListener('click', toggleBounce);
            function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
            }
            /*/анимация при клике на маркер*/

            /*По клику открываеться инфоблок*/
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

        }
        initialize();
    }
    if ($('#contact_map').length) {
        googleMap('contact_map');
    };

    function navigationScroll_Click(){
        var headHeight = $('.wrapper.fixed').outerHeight();

        $(window).scroll(function(event) {
            var scrolltop = $(window).scrollTop();
            $('.header_menu_container li').removeClass('active');
            var point = -1;
            $('.has_nav').each(function(index, el) {
                if( scrolltop >= $(this).offset().top-180 ){
                    point = index;
                }

            });
            if(point != (-1)){
                $('.header_menu_container li').eq(point).addClass('active');
            }
        });


        $('.header_menu_container li a,.footer-nav li a').click(function(event) {
            event.preventDefault();
            if( !$('html').hasClass('desktop') || $(window).width()<= 400){
                $('.fixed .header_menu_container').slideUp();
                $('.wrapper.fixed .mobile-button').removeClass('active');
            }
            var ide = $(this).attr('href');

            $('body,html').animate({
                scrollTop: $(ide).offset().top-180},
                800);
        });
    }
    navigationScroll_Click();

    function headeButer(menuMobile, toggleMenu){
        if(menuMobile){
            menuMobile.click(function(event) {
                if($(window).width()<=1024){
                    $(this).toggleClass('active');
                    toggleMenu.stop().slideToggle();
                }
            });
            $(document).on('click touchstart',function (event){
                if($(window).width()<=1024){
                    var div = toggleMenu;
                    if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0)
                        {
                            toggleMenu.slideUp();
                            menuMobile.removeClass('active');
                        }
                }
            });
        }
    }
    headeButer($('.wrapper.fixed .mobile-button'),$('.fixed .header_menu_container'));
    headeButer($('.footer .mobile-button'),$('.footer-nav ul'));

    $(window).resize(function(event) {
        if( $(window).width()>= 1024 ) {
            $('.fixed .header_menu_container').removeAttr('style');
        }
    });

    $('.our-clients-main a').fancybox({
        padding:0
    });

});