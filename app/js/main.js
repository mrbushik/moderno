$(function(){
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });
    $(".gid__inner").slick({
       dots: true,
       arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2
    });
    var mixer = mixitup('.products__inner-box');
    
});
