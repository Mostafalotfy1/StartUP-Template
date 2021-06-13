$(document).ready(function(){
    'use strict';
    $(".header").height($(window).height());
    $(window).resize(function(){
        $(".header").height($(window).height());
        $('.slider').each(function(){
            $(this).css('paddingTop', ($(window).height() - $('.slider li').height())/2)
        })
    });
    //links 
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //list center
    $('.slider').each(function(){
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height())/2)
    })
    // slider
    $('.slider').bxSlider({
        pager: false
    });
    //smooth scroll
    $('.links li a').click(function(){
        $('html , body').animate({
            scrollTop:$('#' + $(this).data('value')).offset().top
        },1000)
    });
    //our slider
    (function autoSlider(){
        $('.newSlider .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            }else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.newSlider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    var containerEl = document.querySelector('.gallery');

var mixer = mixitup(containerEl);
    $('.filter').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    $('html').niceScroll();
})