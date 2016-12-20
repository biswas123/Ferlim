var detailPageObject = {
		goToAddImage : function() {
			var horseName = $('#horseName').val();
			var isSelected = commonObj.$selectedLeg;
			var userId = commonObj.$userId;
			var token = commonObj.$token;
			
			if (horseName.trim().length <= 0) {
				alert('Veuillez indiquer le nom du cheval.');
				return;
			}else{
				commonObj.$horseName = horseName;
			}			
				
			if (isSelected.length > 0) {
				$('#horseName').blur();
				showLoading();
				var data = {
					action : "create",
					name: horseName,
					idcustomer: userId,
					session_token: token
				};
						
				httpServiceObj.post(data,'horse.php', function(result) {
					if(result.response == "success") {
						detailPageObject.saveHorseId(result.data);
						$.mobile.changePage("#imagePage", {
							transition : "none"
						});	
					}else{				
						alert("Error occured.");
						hideLoading();
					}
				}, function(e) {
					hideLoading();
					console.log(e);
				});
			}else{
				alert('Veuillez sélectionner au moins une option.');
			}
		},
		saveHorseId: function(info){
			commonObj.$horseId = info.id;
		}
}

$(function() { 

	document.addEventListener('deviceready', function(){ }, false);
	
  	$('.addCheck').click(function(){    		
		var objId = $(this).attr('id'); 
		$('.addCheck img').attr('src','');
		$('#'+ objId +' img').attr('src','images/check_mark.png');
		var legName = $(this).text().trim();
		commonObj.$selectedLeg = legName;
	});
  	
  	
	$('#imagePage').on('pageshow',function(){
		var horse = commonObj.$horseName;
		if(horse.trim().length > 0){
			$('#label-horse').text(horse);
		}
		$('#globalComment').css('width', '80px !important');
	});
});


