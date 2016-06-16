$(document).ready(function(){
	$("#carousel-id").swiperight(function() {  
      $("#myCarousel").carousel('prev');  
    });  
   $("#carousel-id").swipeleft(function() {  
      $("#myCarousel").carousel('next');  
   	});  
	$('#carousel-id').carousel({
  		interval: 3000
	});
	var portraits = ['WEDDING','ENGAGEMENT','GRADUATION','MATERNITY','ANIMALS','FAMILY'];
	for(var i=0;i<portraits.length;i++){
		$('#portraits').append('<option value"'+ portraits[i]+'">'+portraits[i] + '</option>');
	}
})