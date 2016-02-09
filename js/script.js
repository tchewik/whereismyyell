var counter = 0;	// Здравствуйте, Алёна
var imgal = true;
setInterval(function(){
	if (counter > 4){
		counter = 0;
	}
	if (imgal){
		$("#imgMain").animate({opacity: 0}, 1000);
		imgal = false;
		console.log("изображение удалено");
		counter++;
	} else{
		$("#imgMain").attr('src', "img/imgMain" + counter + ".jpg");
		$("#imgMain").animate({opacity: 1}, 1000);
		imgal = true;
		console.log("изображение добавлено");
	}
}, 3000);


var txtYesenin = "<br>«Если б Вы знали, друг мой, — писал он Ф. Элленсу 7 февраля 1926 года, — какие чудесные, искренние и трогательные стихи написал он перед смертью, как великолепна его поэма „Черный человек“, которая только что вышла из печати. Мы потеряли великого русского поэта…»</br><br></br>";
var txtHlamida = "<br>Первый псевдоним Горького - Иегудиил Хламида.</br><br></br>";
var txtSuicide = "<br>Однажды он пытался застрелиться, да промахнулся.</br><br></br>";
$(document).ready(function(){

	});

$(document).ready(function(){
	//анимация картинок
	$(".thumbs").hover(
		function(){
		$(this).stop().animate({
			left: '10px'}, 
			'slow');},
		function(){
		$(this).stop().animate({
			left: '0px',},
			'slow');})

	$("#yesenin").click(function(){
		$("#text").css('display', 'inline');
		$("#text").html(txtYesenin);
		$("#mainTxtDiv").fadeIn(1000);
		$('html, body').stop().animate({
			scrollTop: $("#text").offset().top
		}, 500)
		console.log('ты кликнула по есенину');
	});
	$("#hlamida").click(function(){
		$("#text").css('display', 'inline');
		$("#text").html(txtHlamida);
		$("#mainTxtDiv").fadeIn(1000);
		$('html, body').stop().animate({
			scrollTop: $("#text").offset().top
		}, 500)
		console.log('ты кликнула по мальчику');
	});
	$("#suicide").click(function(){
		$("#text").css('display', 'inline');
		$("#text").html(txtSuicide);
		$("#mainTxtDiv").fadeIn(1000);
		$('html, body').stop().animate({
			scrollTop: $("#text").offset().top
		}, 500)
		console.log('ты кликнула по суициду');
	});
});