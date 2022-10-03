// выдвижение и возврат боковой панели
$(function(){
	$('#drive-panel').click(function(){
		$('.panel-drive').show(500);
	});
	$('#panel-back-drive').click(function(){
		$('.panel-drive').hide(500);
	});
});
// наведение на кнопки внутри боковой панели
let ada = document.getElementsByClassName("additionally")
// let determinant = false;
// только попробуйте это кто-то удалить
// $(function(){
// 	$('p').click(function(){
// 		if (determinant == false){
// 			$('.panel-inside').hide(500);

// 			determinant = true;
// 		};
// 		$('.panel-inside').show(500);
// 		determinant = false;
// 	});
// });
function develop(num){
	ada[0].style.display = "none";
	ada[1].style.display = "none";
	ada[2].style.display = "none";
	ada[3].style.display = "none";
	ada[4].style.display = "none";
	ada[5].style.display = "none";
	ada[6].style.display = "none";
	ada[7].style.display = "none";
	ada[8].style.display = "none";
	ada[9].style.display = "none";
	ada[num].style.display = "block";
}
