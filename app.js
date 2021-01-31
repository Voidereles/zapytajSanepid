import 'bootstrap';
import AOS from 'aos';

AOS.init({
    duration: 500,
    // easing: 'cubic-bezier(.91, .11, .19, .92)'
    // once: true
});


let a = 0;
$(window).scroll(function () {

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