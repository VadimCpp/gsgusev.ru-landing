jQuery(document).ready(function() {

    $("#go-top").click(function() {
        window.location.href = "#"
    });

    var scrollPos = $(this).scrollTop();
    var $navBar = $('.sticky-top');
    var navPos = $navBar.offset().top;
    $(window).scroll(function () {
        if (scrollPos > 200) {
            $("#go-top").fadeIn();
        }
        else {
            $("#go-top").fadeOut();
        }

        if (scrollPos >= navPos) {
            $navBar.addClass('border-b');
        } else {
            $navBar.removeClass('border-b');
        }
    });

    $('.nav-item').click(function () {
        $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').removeClass('collapse').removeClass('show').addClass('collapse');
    });
});
