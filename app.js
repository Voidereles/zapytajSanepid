import 'bootstrap';
import AOS from 'aos';
import 'owl.carousel';

AOS.init({
    duration: 600,
    // easing: 'cubic-bezier(.91, .11, .19, .92)'
    // once: true
});

let a = 0;
$(window).on('scroll', function () {

    if (typeof (document.querySelector('.counters')) != 'undefined' && document.querySelector('.counters') != null) {
        let counter = $('.counters');
        let oTop = counter.offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counters__number').each(function () {
                let $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 4000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }

                    });
            });
            a = 1;
        }
    }

});

if (typeof (document.querySelector('.info__carousel')) != 'undefined' && document.querySelector('.info__carousel') != null) {
    console.log('das');
    const infoCarousel = $('.info__carousel');
    infoCarousel.on('initialized.owl.carousel', function (event) {
        console.log('das');
        $('.info__carousel .owl-stage').addClass(["d-flex", "align-items-center"]);
    });
    infoCarousel.owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false,
            },
            600: {
                items: 3,
                nav: false,
                dots: false,
                stagePadding: 0
            },
            1000: {
                items: 4,
                nav: false,
                dots: false,
            }
        }
        // autoplay: false
    })

}

if (typeof (document.querySelector('.news__carousel')) != 'undefined' && document.querySelector('.news__carousel') != null) {

    const newsCarousel = $('.news__carousel');
    newsCarousel.owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                autoplayTimeout: 3000,
            },
            600: {
                items: 2,
                nav: false,
                dots: true,
                autoplayTimeout: 5000,
            },
            1000: {
                items: 3,
                nav: false,
                dots: true
            }
        }
    })

}

if (typeof (document.querySelector('#fb-container')) != 'undefined' && document.querySelector('#fb-container') != null) {

    jQuery(document).ready(function ($) {
        $(window).bind("load resize", function () {
            setTimeout(function () {
                var container_width = $('#fb-container').width();
                $('#fb-container').html('<div class="fb-page" ' +
                    'data-href="https://www.facebook.com/cloverepublic/"' +
                    ' data-width="' + container_width + '" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="http://www.facebook.com/IniciativaAutoMat"><a href="https://www.facebook.com/cloverepublic/">Clove Republic</a></blockquote></div></div>');
                FB.XFBML.parse();
            }, 100);
        });
    });
}

if (typeof (document.querySelector('.news-page')) != 'undefined' && document.querySelector('.news-page') != null) {
    document.querySelector('main').style.overflow = "initial";
}

$(function () {
    $("a[href*='#'].btn:not([href='#])").on('click', function (e) {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top - 60
        }, 1000);
        e.preventDefault();
    })



    if (window.innerWidth > 992) {
        if (typeof (document.querySelector('.onmousemove-element')) != 'undefined' && document.querySelector('.onmousemove-element') != null) {
            const allMoving = document.querySelectorAll(".onmousemove-element");

            window.addEventListener("mousemove", (e) => {
                Array.from(allMoving).forEach(element => {
                    // element.style.transitionDelay = "0.01s";
                    element.style.transitionDuration = "0.8s";
                    element.style.transform = "translateX(" + ((-e.clientX) / 40).toFixed(0) + "px)" + "translateY(" + ((-e.clientY) / 33).toFixed(0) + "px)";
                    element.style.webkitTransform = "translateX(" + ((-e.clientX) / 40).toFixed(0) + "px)" + "translateY(" + ((-e.clientY) / 33).toFixed(0) + "px)";

                });
            });
        }



    }
});