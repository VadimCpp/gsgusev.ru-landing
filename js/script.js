jQuery(document).ready(function() {

    $("#go-top").click(function() {
        window.location.href = "#"
    });

    $(window).scroll(function () {
        if ($(this).scrollTop()>200) {
            $("#go-top").fadeIn();
        }
        else {
            $("#go-top").fadeOut();
        }
    });

    $('.nav-item').click(function () {
        $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').removeClass('collapse').removeClass('show').addClass('collapse');
    });

    var $navBar = $('.sticky-top');
    var navPos = $navBar.offset().top;
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos >= navPos) {
            $navBar.addClass('border-b');
        } else {
            $navBar.removeClass('border-b');
        }
    });
});
