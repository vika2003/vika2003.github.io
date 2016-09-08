$(function() {

	$(".tab_item").click(function() {		
		$(".tab_item").removeClass("active");
		$(this).addClass("active");

		$(".article_item").removeClass("active");
		console.log($(this).index());
		$(".article_item").eq($(this).index()).addClass("active"); 

	});

	$(".tab_item" ).keydown(function(event) {
		if ( event.which == 3 ) {
			$(".tab_item").removeClass("active");
			$(this).addClass("active");

			$(".article_item").removeClass("active")
			console.log ($(this).index());
			$(".article_item").eq($(this).index()).addClass("active");
		}
	});
});	