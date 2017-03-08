$(document).ready(function(){
	$(".stilstaand").click(function(){
		$("[id^='interactief_']").toggle();
	});

	$(".interactief").click(function(){
		$("[id^='stilstaand_']").toggle();
	});
});