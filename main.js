var the_number = null;
$(document).ready(initializeApp);

function initializeApp(){
	alert('ok');
	the_number = pick_number();
	$('button').on('click', make_guess);
	addModalCloseHandler();
}

function pick_number() {
	var random_number = Math.floor(Math.random()*10) + 1;
	return random_number;
}	

function make_guess() {
	var guess_input = $(this).text();
	var the_guess = Number(guess_input);
	if (the_guess) {
		if (the_guess > the_number) {
			// $('#response_div').text('Too High!');
			$('#galleryModal').modal();
		} else if (the_guess < the_number) {
			// $('#response_div').text('Too Low!');
			alert('too low');
		} else {
			// $('#response_div').text('You guessed it!');
			alert('u got it!');
		}
	} else {
		$('#response_div').text('Please only use a number between 1-10.');
	}
}

function displayImage(){
		$('h4.modal-title').text(fileNameMain[0]);
		$('.modal-body>img').attr('src', 'images/'+fileName);
		$('#galleryModal').modal();
}

function addModalCloseHandler(){
	$('.modal-body>img').click(function(){
		$('#galleryModal').modal('hide');
	})
}