$(function () {
    'use strict';
    $(window).scroll(function() {
        var navbar = $('.navbar');
        $(window).scrollTop() >= navbar.height()? navbar.addClass('scrolled'): navbar.removeClass('scrolled');
    });
    $('.tabs .tab-switch li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs .content > div').hide();
        $('.' + $(this).data('class')).show();
    })

});