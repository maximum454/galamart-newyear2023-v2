@@include('./partials/jquery.formstyler.js')
@@include('./partials/swiper-bundle.min.js')

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