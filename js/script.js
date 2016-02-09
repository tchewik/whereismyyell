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
		anahata: ["Четверг", ["Теория вероятностей", "Компьютерные сети"]],
		vishuddha: ["Пятница"],
		ajna: ["Суббота"],
		sahasrara: ["Воскресенье"]	
	}
	$("title, #title").html(nameOfDay[todayis][0]);
	$("body").addClass(todayis);
	var navbarcontent = "";
	for (i = 0; i < nameOfDay[todayis][1].length; i++){
		navbarcontent += '<li><a href="#section' + (i+1) + '">' + nameOfDay[todayis][1][i] + '</a></li>';
	}
	$("#subNavBar").html(navbarcontent);
}

$(document).ready(function(){
})