jQuery(document).ready(function() {

    $("#go-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 0);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop()>200) {
            $("#go-top").fadeIn();
        }
        else {
            $("#go-top").fadeOut();
        }
    });

  });
