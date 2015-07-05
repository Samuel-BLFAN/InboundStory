$(document).ready(function(){
	$('#radioPale').hover(function(){
		$('#musicNotes').css("visibility","visible");
	});
	$('#radioPale').mouseleave(function(){
		$('#musicNotes').css("visibility","hidden");
	});
});						   
$(window).resize(function(){
	
});