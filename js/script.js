$(document).ready(function(){
   $("#carousel-id").swiperight(function() {  
      $("#myCarousel").carousel('prev');  
    });  
   $("#carousel-id").swipeleft(function() {  
      $("#myCarousel").carousel('next');  
   });  
});  
