$(function () {

    $('.carousel').carousel({
        interval: 3000
    })

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;

    // $(".desc img").animated("fadeInRight", "fadeOutRight");

    $(".btn_phone").on("click", function(){
        $("#callback").animated("fadeInDown", 2000);
    });

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("#callback").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $("#subm").toggle();
            $(".success").toggle();
            setTimeout(function () {
                $.magnificPopup.close();
                th.trigger("reset");
            }, 1500);
        });
        return false;
    });

    $("#entry_form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо за обращение, мы обязательно свяжемся с вами!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $("#classic").on("click", function () {
        $(".classic").toggle();
    });
    $("#volume").on("click", function () {
        $(".volume").toggle();
    });

});

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });


$("#fh5co-menu-wrap li a, #offcanvas-menu li a").mPageScroll2id();

$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});
