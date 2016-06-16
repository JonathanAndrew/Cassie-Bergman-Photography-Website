$(document).ready(function(){

	$("#carousel-id").swiperight(function() {  
		$(this).carousel('prev');  
	});  
   	$("#carousel-id").swipeleft(function() {  
      	$(this).carousel('next');  
	});  
	$(".left").on('click',function(){
		$(this).carousel('prev');
	});
	$(".right").on('click',function(){
		$(this).carousel('next');
	})
	$('#carousel-id').carousel({
  		interval: 3000
	});
	var portraits = ['WEDDING','ENGAGEMENT','GRADUATION','MATERNITY','ANIMALS','FAMILY'];
	for(var i=0;i<portraits.length;i++){
		$('#portraits').append('<option value"'+ portraits[i]+'">'+portraits[i] + '</option>');
	}
})