var commonObj = {
	$horseName : '',
	$horseId : '',	
	$selectedLeg : '',
	$userId : '',
	$token : ''	
}


function showLoading(text){
	$('.modal').css('display','block');
	if(text){
		$('#loadingText').text(text);
	}else{
		$('#loadingText').text('Loading...');
	}
}

function hideLoading(){
	$('.modal').css('display','none');
}

$(document).on("pageshow", function() {

	var screen = $.mobile.getScreenHeight();
	var content = screen - 50;

	if ($(".ui-page-active").attr("id") == 'page' || $(".ui-page-active").attr("id") == 'signUpPage') {
		content = screen - 50 - $('#header').outerHeight() - 30;
	}

	$(".ui-content").css('height',content + 'px');
	hideLoading();
});