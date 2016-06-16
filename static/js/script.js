$(document).ready(function(){
	
	$("#myCarousel").swiperight(function() {  
		$(this).carousel('prev');  
	});  
   	$("#myCarousel").swipeleft(function() {  
      	$(this).carousel('next');  
	});  
	$('#carousel-id').carousel({
  		interval: 3000
	});
	var portraits = ['WEDDING','ENGAGEMENT','GRADUATION','MATERNITY','ANIMALS','FAMILY'];
	for(var i=0;i<portraits.length;i++){
		$('#portraits').append('<option value"'+ portraits[i]+'">'+portraits[i] + '</option>');
	}
})