$(document).ready(function(){
	

	var iswayhere = false;
	$("#wayspan").click(function(){
		iswayhere = !iswayhere;
		if (iswayhere){
			var wayjpg = '<br><div class="col-md-3"></div><div class="col-md-4 wayjpg"><img src="img/way1.jpg"/></div><div class="col-md-4 wayjpg"><img src="img/way2.jpg"/></div><div class="col-md-1"></div><br><br><br>';
			$("#waydiv").css('display', 'inline');
			$("#waydiv").html(wayjpg);
			$("#waydiv").fadeIn(1000);
			$('html, body').stop().animate({
				scrollTop: $("#waydiv").offset().top
			}, 1000)
		}else{$('.wayjpg').remove();}
	});

	$(".wayjpg").click(function(){

	})
})