

    // script for mobile footer//

    var acc = document.querySelectorAll(".accordionftr");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {

            for (j = 0; j < acc.length; j++) {
                acc[j].classList.remove("accordionftractive");

                if (j !== i)
                    acc[j].nextElementSibling.style.maxHeight = null;
            }

            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;

            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"
                acc[i].classList.toggle("accordionftractive");
            }
        });
    }



//  slider js 

    $(document).ready(function () {
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true
                },
            },
        });
        $(".play").on("click", function () {
            owl.trigger("play.owl.autoplay", [1000]);
        });
        $(".stop").on("click", function () {
            owl.trigger("stop.owl.autoplay");
        });
    });
