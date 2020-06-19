
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

document.onkeydown=function(e)
{
    if(event.keyCode == 123)
    {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
    {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
        return false;
    }
}