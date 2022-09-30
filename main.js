$(function(){
	$('#pan-dri').click(function(){
		$('.panel-drive').toggle('fast');
		$('.panel-drive').toggleClass('active');
		return 0;
	});
	$('#pan-not-dri').click(function(){
		$('.panel-drive').toggle('fast');
		$('.panel-drive').toggleClass('remote');
		return 0;
	});
});