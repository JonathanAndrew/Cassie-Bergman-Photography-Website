$(document).ready(function(){
	$("#carousel-id").on('swipeleft',function() {  
		$(this).carousel('prev');  
	});
   	$("#carousel-id").on('swiperight',function() {  
      	$(this).carousel('next');  
	});  
	// $('#submit').on('click',function(){
	// 	$(".thank-you").show();
	// });
	$('.carousel-control').carousel({
  		interval: 3000
	});
	var portraits = ['WEDDING','ENGAGEMENT','GRADUATION','MATERNITY','ANIMALS','FAMILY'];
	for(var i=0;i<portraits.length;i++){
		$('#portraits').append('<option value"'+ portraits[i]+'">'+portraits[i] + '</option>');
	}
});