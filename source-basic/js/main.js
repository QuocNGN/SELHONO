$(document).ready(function () {
    $(window).scroll(function () { 
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 200){
            $(".search").addClass("sticky");
        }else{
            $(".search").removeClass("sticky");
        }
    });
});
