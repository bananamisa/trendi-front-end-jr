(function($) {

    "use strict";

    // ==================================================
    // General
    // ==================================================
	$("header").addClass("fechada");
	     
	$(".menuIcon").click(function() {
		if($("header").hasClass("fechada")) {
			$("header").animate({'height':'180px'},{queue:false, duration:300}).removeClass("fechada");
		}
		else {
			$("header").animate({'height':'65px'},{queue:false, duration:300}).addClass("fechada");
		}
	});

	$(window).resize(function() {
	var tamanhoViewport = $(window).width();
	if (tamanhoViewport > 768) {
	$("header").css("height","340px").addClass("fechada");
	} else {
	$("header").css("height","65px").addClass("fechada");
	}
	});	

})(jQuery);


