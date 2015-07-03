
function vhCenter(){
	$('.centerVH').css({
		position:'absolute',
	   left: ($(window).width() - $('.centerVH').outerWidth())/2,
	   top: ($(window).height() - $('.centerVH').outerHeight())/2
	 });
}
function resizeContainers(){
	$('.vhcenter').each(function() {
    	vhCenter( this.id );
	});
}
$(document).ready(function(){
	resizeContainers();
});						   
$(window).resize(function(){
	resizeContainers();
});