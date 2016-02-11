// Часы в заголовке, обновление раз в десятую секунды
setInterval(function (){
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	$("#currenttime").html("Для заблудших душ: " + Date());
}, 100); 

// Изменение цвета оформления, предметов в навигации, заголовков дня
function setColorsSubjectsETC(todayis){
	var nameOfDay = {
		muladhara: ["Понедельник", ["Диффуры", "Физика", "Философия"]],
		svadhishthana: ["Вторник", ["Компьютерные сети", "Логическое программирование"]],
		manipura: ["Среда", ["Java", "Естествознание"]],
		anahata: ["Четверг", ["Теория вероятностей", "Компьютерные сети", "Научное программирование"]],
		vishuddha: ["Пятница"],
		ajna: ["Суббота"],
		sahasrara: ["Воскресенье"]	
	}
	$("title, #title").html(nameOfDay[todayis][0]);
	$("body").addClass(todayis);
	var navbarcontent = "";
	for (i = 0; i < nameOfDay[todayis][1].length; i++){
		navbarcontent += '<li><a id="linktosection' + (i+1) + '" href="#section' + (i+1) + '">' + nameOfDay[todayis][1][i] + '</a></li>';
	}
	$("#subNavBar").html(navbarcontent);

}

$(document).ready(function(){
	$("#linktosection1").click(function(){
	$('html, body').stop().animate({
		scrollTop: $("#section1").offset().top
	}, 300)
		})
	$("#linktosection2").click(function(){
		$('html, body').stop().animate({
			scrollTop: $("#section2").offset().top
			}, 300)
		})
	$("#linktosection3").click(function(){
		$('html, body').stop().animate({
			scrollTop: $("#section3").offset().top
		}, 300)
	})		

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