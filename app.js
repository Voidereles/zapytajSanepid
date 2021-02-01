// import 'bootstrap';
// import AOS from 'aos';

AOS.init({
    duration: 600,
    // easing: 'cubic-bezier(.91, .11, .19, .92)'
    // once: true
});


let a = 0;
$(window).on('scroll', function () {
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
});


$('.info__carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            // stagePadding: 30,
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
})

$(function () {
    $("a[href*='#']:not([href='#])").on('click', function (e) {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top - 60
        }, 1000);
        e.preventDefault();
    })
});