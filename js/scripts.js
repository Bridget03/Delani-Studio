$(document).ready(function () {
    $(".whatwedo p").hide();

    $(".image1").click(function () {
        $(".p1").toggle();

    });
});
$(document).ready(function () {
    $(".image2").click(function () {
        $(".p2").toggle();

    });
});
$(document).ready(function () {
    $(".image3").click(function () {
        $(".p3").toggle();

    });
});
$(document).ready(function () {
    $('.text').hide();
    $('.image').animate({
        opacity: 1

    });

    $('.image').hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text').fadeOut();
    });


    $("#mannu").submit(function (event) {
        var val1 = (document.getElementById("name").value);
        var val2 = (document.getElementById("email").value);
        var val3 = (document.getElementById("textarea").value);

        if (!val1 || !val2 || !val3) {
            alert("Fill in the form!!!");
        }
        else {
            alert("Thank you for your feeback!!!");
        }
    });
});

