var quiz = function () {
	var active = $('.quiz-active');
	var inactive = $('.quiz-inactive');
	$(inactive).hide();
	$(active).show();

	$('.btn').click(function() {
		if ($(this).hasClass('correct'))
		{
			alert('Correct!');
		}
		else
		{
			alert('Incorrect!');
		}
		$(inactive).show();
	});

	/*var play = $('.fa-play');
	var pause = $('.fa-pause');
	$(pause).hide();
	$(play).show();

	

	$(play).click(function() {
		$
		$(this).hide();
		$(this).next().show();
	});

	$(pause).click(function() {
		
		$(this).hide();
		$(this).prev().show();
	});
*/

};



$(document).ready(quiz);