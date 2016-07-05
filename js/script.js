function renderContent(index){
	if (index != undefined) {
		var arrayOfDays = dayList.days;
		var source = $("#detail-template").html();
		var detail_template = Handlebars.compile(source);
		var html = detail_template(arrayOfDays[index]);
		$('#content').html(html);		
	}
}

$(document).ready(function(){
		var source = $("#header-template").html();
		var header_template = Handlebars.compile(source);
		var html = header_template(dayList);
		$('#header').html(html);

		renderContent();
		$(".btn").click(function(){
			var index = $(this).data("id");
			renderContent(index);
		});
})