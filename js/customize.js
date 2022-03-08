$(document).ready(function() {
    $('.input input, .textarea textarea').on('change', function () {
        if ( $(this).val().length == 0 ) {
            $(this).attr('data-dirty', false);
        } else {
            $(this).attr('data-dirty', true);
        }
    });

    $('.js-hamburger-menu').on('click', function () {
        $('.header__bottom').toggleClass('active');
    })
});