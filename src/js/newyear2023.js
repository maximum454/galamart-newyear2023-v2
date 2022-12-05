@@include('./partials/jquery.formstyler.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.countdown.min.js')


$('#getting-started').countdown('2022/12/31', function(event) {
    $(this).html(event.strftime('' +
        '<span class="time">%d <span class="text">дней</span></span>' +
        '<span class="time">%H <span class="text">часов</span></span>' +
        '<span class="time">%M <span class="text">минут</span></span>'
    ));
}).on('finish.countdown', function(event) {
    $(this).html('С новым годом')
        .parent().addClass('disabled');

});

setTimeout(function() {
    $('.js-select').styler();
}, 100)

const swiper = new Swiper('.swiper-block-item', {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
})