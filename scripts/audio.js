var audio = function () {
	var play = $('.fa-play');
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

};

var temp = function() {
	alert('Hello');
};





$(document).ready(audio);