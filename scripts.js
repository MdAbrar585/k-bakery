
$(function(){
    $('.hamburger-menu').on('click', function(){
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });

    $("a.nav-link").on("click",function(){
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');

//or simply $("#navbar").addClass("makeDisappear")
})
    AOS.init({
        easing: 'ease',
        duration: 1000,
    });
});

