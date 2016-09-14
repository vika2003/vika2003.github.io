$(function() {

	$(".tab_item").click(function() {		
		$(".tab_item").removeClass("active");
		$(this).addClass("active");

		$(".article_item").removeClass("active");
		console.log($(this).index());
		$(".article_item").eq($(this).index()).addClass("active"); 

	});

	$(".tab_item" ).keyup(function(event) {
		if ( event.keyCode === 9 ) {
			$(".tab_item").removeClass("active");
			$(this).addClass("active");

			$(".article_item").removeClass("active")
			console.log ($(this).index());
			$(".article_item").eq($(this).index()).addClass("active");
		}
	});
});	