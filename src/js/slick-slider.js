$(document).ready(function () {
	$('.slider-wrapper').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					
				}
			},
			
		]
	});
});