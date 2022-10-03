// выдвижение и возврат боковой панели
$(function(){
	$('#pan-dri').click(function(){
		$('.panel-drive').show(500);
	});
	$('#pan-not-dri').click(function(){
		$('.panel-drive').hide(500);
	});
});
// наведение на кнопки внутри боковой панели
$(function(){
	$('p').mouseover(function(){
		$('.panel-drive2').show(500);
	});
	$('p').mouseout(function(){
		$('.panel-drive2').hide(500);
	});
});
