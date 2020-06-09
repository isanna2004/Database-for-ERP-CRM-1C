$(document).ready(function() {
    $('.unwrap').click(function() {
        $(this).addClass('active');
        $('.active').next().slideToggle(500, function() {
            if ($('.active').next().is(':hidden')) {
                $('.unwrap.active').html('Развернуть');
            } else {
                $('.unwrap.active').html('Cвернуть');
            };
            $('.active').removeClass('active');
        });
        return false;
    });


    $('.all_item').click(function() {
        $('.hidden_item').removeClass('d-none');
        $('.all_item').removeClass('d-md-none');
        $('.all_item').addClass('d-none');
    });



    $('.steps .item_features').mouseenter(function() {
        $('.hide').show(800);
    });
    $('.hide').hover(function() {
        $('.hide').show();
    });
    $('.steps .item_features').mouseleave(function() {
        $('.hide').hide();
    });
    $('.hide').mouseleave(function() {
        $('.hide').hide();
    });


    $('.steps .item_features').click(function() {
        $('.hide-mobile').hide(800);
        $(this).addClass('active');
        if ($('.active .hide-mobile').is(':hidden')) {
            $('.active .hide-mobile').show(800)
        };
        $('.active').removeClass('active');
    });



    $('.menu_buttons').click(function() {
        $('.hide-menu').slideToggle(500)
    })
})