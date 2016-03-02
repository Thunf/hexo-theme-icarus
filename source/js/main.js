(function($){
    // var toTop = $('#toTop').length ? $('#toTop').offset().top - $(window).height() + 20 : 0;
    var toTop = $('#toTop').length ? $(window).height() + 20 : 0;

    // Caption
    $('.article-entry').each(function(i){
        $(this).find('img').each(function(){
            if ($(this).parent().hasClass('fancybox')) {
                return;
            }
            var alt = this.alt;
            if (alt) {
                $(this).after('<span class="caption">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function(){
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox){
        $('.fancybox').fancybox();
    }

    // Profile card
    $(document).on('click', function () {
        $('#profile').removeClass('card');
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        $('#profile').toggleClass('card');
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

    // To Top
    $(document).on('scroll', function () {
        if ($(document).width() < 800) {
            $('#toTop').css('right', 20);
        }
        if($(this).scrollTop() > toTop) {
            $('#toTop').fadeIn(200);
            // $('#toTop').css('left', $('#sidebar').offset().left);
        } else {
            $('#toTop').fadeOut(200);
        }
    }).on('click', '#toTop', function () {
        $('body, html').animate({ scrollTop: 0 }, 600);
    });

    // resize
    $(window).resize(function(){
        if ($(document).width() < 800) {
            $('#toTop').css('right', 20);
        } else {
            $('#toTop').css('right', 'auto');
        }
    });

})(jQuery);