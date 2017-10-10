$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	if (distanceScrolled > 465) {
		$('.main-nav').addClass('scrolled');
	} else {
		$('.main-nav').removeClass('scrolled');
	}

});

//FAQ section//

$('#answer1, #answer2, #answer3, #answer4').hide();

$('#tip1').on('click', function(){
	$('#answer1').slideDown(300);
	$('#answer2, #answer3, #answer4').slideUp(300);
	$('li').removeClass('active');
	$('#tip1').addClass('active');
});

$('#tip2').on('click', function(){
	$('#answer2').slideDown(300);
	$('#answer1, #answer3, #answer4').slideUp(300);
	$('li').removeClass('active');
	$('#tip2').addClass('active');
});

$('#tip3').on('click', function(){
	$('#answer3').slideDown(300);
	$('#answer1, #answer2, #answer4').slideUp(300);
	$('li').removeClass('active');
	$('#tip3').addClass('active');
});

$('#tip4').on('click', function(){
	$('#answer4').slideDown(300);
	$('#answer1, #answer2, #answer3').slideUp(300);
	$('li').removeClass('active');
	$('#tip4').addClass('active');
});