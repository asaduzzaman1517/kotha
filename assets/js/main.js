(function ($) {
	"use strict";

	$(document).ready(function () {
		
		/**-----------------------------
		 *  Nice Select
		 * ---------------------------*/
		$('select').niceSelect();

		/**-----------------------------
		 *  Navbar fix
		 * ---------------------------*/

		$(document).on("click", ".navbars__hamburger", function (e) {
			e.preventDefault();
			$('.navbars__menu').addClass('active');
		});
		$('.navbars__cross').on('click', function() {
			$('.navbars__menu').removeClass('active');
		})
		

		// back to top
		$(document).on("click", ".back-to-top", function () {
			$("html,body").animate(
				{
					scrollTop: 0,
				},
				2000
			);
		});
    });
    
})(jQuery);


$(window).on("scroll", function () {

	var ScrollTop = $(".back-to-top");
	if ($(window).scrollTop() > 3000) {
		ScrollTop.fadeIn(1000);
	} else {
		ScrollTop.fadeOut(1000);
	}
});

$(window).on('load', function() {

	/*-----------------
        preloader
    ------------------*/
	var preLoder = $(".preloader");
	preLoder.fadeOut(1000);
})
