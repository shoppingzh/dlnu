$(function(){

    $('ul.nav>li>.nav-link').on({
        mouseenter: function(){
            $(this).siblings('.menus').addClass('open');
        },
        mouseleave: function(){
            $(this).siblings('.menus').removeClass('open');
        }
    });
    $('.menus').on({
        mouseenter: function(){
            $(this).addClass('open');
        },
        mouseleave: function(){
            $(this).removeClass('open');
        }
    });
});

// 微信二维码显示
