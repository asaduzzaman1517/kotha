(function ($) {
	"use strict";

	$(document).ready(function () {
		
		/**-----------------------------
		 *  Navbar fix
		 * ---------------------------*/

		$(document).on("click", "li.menu-item-has-children>a", function (e) {
			e.preventDefault();
		});
		

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
