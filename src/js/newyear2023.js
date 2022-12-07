@@include('./partials/jquery.formstyler.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.countdown.min.js')

$(function (){
    $('#clock').countdown('2023/01/01 00:00', function(event) {
        $(this).html(event.strftime('<span class="time">%D <span class="text">дней</span></span>' +
            '<span class="time">%H <span class="text">часов</span></span>' +
            '<span class="time">%M <span class="text">минут</span></span>'));
    });
})


setTimeout(function() {
    $('.js-select').styler();
}, 100)

document.querySelectorAll('.newyear2023-block').forEach(n => {
    console.log(n)
    const swiper = new Swiper(n.querySelector('.swiper-block-item'), {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    })
});