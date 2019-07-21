(function ($) {
    $(document).ready(function () {
        //back to top
        $(".home-btn").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
        /*navigation menu*/
        $(".more-btn").on("click", function () {
            $('.navigation-menu',).css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .8s',
            });
        });
        $(".close").on("click", function () {
            $('.navigation-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $('.navigation-menu ul li').click(function () {
            $('.navigation-menu ul li.active').removeClass('active');
            $(this).addClass('active');
        });
        /*search bar*/
        $(".search-icon").click(function () {
            $(this).css({
                'display': 'none',
                'opacity': '0',
                'transition': 'all .8s',
            });
            $('.search-form').css({
                'display': 'block',
                'opacity': '1',
                'transition': 'all .8s',
            });
        });
    });
})(jQuery);