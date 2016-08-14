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
	};

	var engagementImages = [
	{title: 'engagement-photo1', src: 'https://c3.staticflickr.com/8/7441/27111226490_d51135e18b_b.jpg'},
	{title: 'engagement-photo2', src: 'https://c3.staticflickr.com/8/7741/27111225050_da7de3574a_b.jpg'},
	{title: 'engagement-photo3', src: 'https://c2.staticflickr.com/8/7316/26780178713_6f9b87887e_b.jpg'},
	{title: 'engagement-photo4', src: 'https://c2.staticflickr.com/8/7616/26780180673_584b6ea3ef_b.jpg'},
	{title: 'engagement-photo5', src: 'https://c7.staticflickr.com/8/7616/27099120614_68b2e506f3_b.jpg'},
	{title: 'engagement-photo6', src: 'https://c3.staticflickr.com/8/7073/27677491106_ce464e6f74_b.jpg'},
	{title: 'engagement-photo7', src: 'https://c3.staticflickr.com/8/7207/27111226010_d42c7f7f39_b.jpg'},
	{title: 'engagement-photo8', src: 'https://c6.staticflickr.com/8/7294/26780180293_fcf4bb17be_b.jpg'},
	{title: 'engagement-photo9', src: 'https://c1.staticflickr.com/8/7419/27677579776_a86f183b73_b.jpg'}
	];


counter = 0;
console.log(engagementImages[counter].src);

$('#next').on('click', function(){
	counter = (counter + 1) % engagementImages.length;
	next = engagementImages[counter].src;
	$('#showImage').attr('src', next);
});

$('#previous').on('click', function(){
	if(counter == 0){
		counter = engagementImages.length - 1;
		previous = engagementImages[counter].src;
		$('#showImage').attr('src', previous);
	} else {
		counter = (counter - 1) % engagementImages.length;
		previous = engagementImages[counter].src;
		$('#showImage').attr('src', previous);
	}
});


});
//for(var i= 0; i <= engagementImages.length; i++){
// currentImage= engagementImages.indexOf(engagementImages.src)+1;
// 			var location =  window.location.href.slice(0,-1)+currentImage;
// 			console.log(location);
// 			next = engagementImages[currentImage+1].src;
// 			console.log(next);
// 			$('#showImage').attr('src',next);
// 			currentImage = engagementImages.indexOf(engagementImages.src)+1;
// 			console.log(currentImage);
//}


// 			i++;