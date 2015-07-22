$(document).ready(function(){
	$('#radioPale').hover(function(){
		$('#musicNotes').css("visibility","visible");
	});
	$('#radioPale').mouseleave(function(){
		$('#musicNotes').css("visibility","hidden");
	});
	var modalWidth = $('.modal-dialog').width();
	var modalHeight = $('.modal-dialog').height() - $('.modal-header').outerHeight(true);

	function openModalSlide(caller, target){
		$(caller).click(function(){ 
			var slideNo = parseInt($(caller).attr('data-slide-to'));
			$(target).carousel(slideNo);
			$(target).carousel('pause');
		});
	}
	openModalSlide('#newspaper',  '#section1Carousel');
	openModalSlide('#section1Title',  '#section1Carousel');
	openModalSlide('#section1Mobile',  '#section1Carousel');
	openModalSlide('#radioPale',  '#section1Carousel');
	openModalSlide('#tvSection',  '#section1Carousel');
	openModalSlide('#magazine',  '#section1Carousel');
	openModalSlide('#devil',  '#section2Carousel');
	openModalSlide('#newspaper2',  '#section2Carousel');
	openModalSlide('#flyer',  '#section2Carousel');
	openModalSlide('#radio2',  '#section2Carousel');
	openModalSlide('#tv2',  '#section2Carousel');
	openModalSlide('#money',  '#section3Carousel');
	openModalSlide('#heart',  '#section3Carousel');
	openModalSlide('#light',  '#section3Carousel');
	openModalSlide('#addValue',  '#section4Carousel');
	openModalSlide('#magnet',  '#section4Carousel');
	openModalSlide('#title5Table',  '#section5Carousel');	
	openModalSlide('#leadership',  '#section5Carousel');	
	openModalSlide('#sustain',  '#section5Carousel');	
	openModalSlide('#betterWorld',  '#section5Carousel');	
	openModalSlide('#mouth',  '#section5Carousel');
	openModalSlide('#section6Title',  '#section6Carousel');
	openModalSlide('#delight',  '#section6Carousel');
	openModalSlide('#attract',  '#section6Carousel');
	openModalSlide('#close',  '#section6Carousel');
	openModalSlide('#convert',  '#section6Carousel');
	openModalSlide('#ad0',  '#section7Carousel');
	openModalSlide('#ad1',  '#section7Carousel');
	openModalSlide('#ad2',  '#section7Carousel');	
	openModalSlide('#ad3',  '#section7Carousel');
	openModalSlide('#ad4',  '#section7Carousel');	
	openModalSlide('#play',  '#section7Carousel');

});						   
$(window).resize(function(){
	
});