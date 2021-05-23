$(function() {
	$('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        navText: ['<img src="img/left.png">', '<img src="img/right.png">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

