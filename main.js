var the_number = null;
$(document).ready(initializeApp);

function initializeApp(){
	the_number = pick_number();
	console.log(the_number);
	$('button').on('click', make_guess);
	addModalCloseHandler();
}

function pick_number() {
	var random_number = Math.floor(Math.random()*10) + 1;
	return random_number;
}	

function make_guess() {
	var guess_input = $(this).text();
	var the_guess = Number(guess_input).toFixed(0);
	var image = $('.modal-body>img');
	var modal = $('#galleryModal');
	var modal_header = $('#galleryModal .modal-header');
	var modal_title = $('#galleryModal .modal-title');
	if (the_guess) {
		if (the_guess - the_number >= 2) {
			modal_title.text('Power overwhelming!!! You\'re gonna blow this place into oblivion...');
			image.attr('src', 'img/nuke.jpg');
			modal_header.css('background-color', '#bd02d6')
			modal.modal();
		} else if (the_guess - the_number === 1) {
			modal_title.text('Nice hit! But sometimes less is more...');
			image.attr('src', 'img/begentle.jpg');
			modal_header.css('background-color', '#d64f02')
			modal.modal();
		} else if (the_guess - the_number <= -2) {
			modal_title.text('Tis but a scratch! You may as well just use a toothpick!');
			image.attr('src', 'img/blackknight.jpg');
			modal_header.css('background-color', '#bd02d6')
			modal.modal();
		} else if (the_guess - the_number === -1) {
			modal_title.text('A valiant effort! But Tywin wants you to try harder...');
			image.attr('src', 'img/tenor.gif');
			modal_header.css('background-color', '#d64f02')
			modal.modal();
		} else {
			modal_title.text('Amazing shot! You\'ve won!!!');
			image.attr('src', 'img/chest.jpg');
			modal_header.css('background-color', '#d60202')
			modal.modal();
		}
	} else {
		$('#response_div').text('Please only use a number between 1-10.');
	}
}

function displayImage(){
		$('h4.modal-title').text('modal test');
		$('.modal-body>img').attr('src', 'img/chest.jpg');
		$('#galleryModal').modal();
}

function addModalCloseHandler(){
	$('.modal-body>img').click(function(){
		$('#galleryModal').modal('hide');
	})
}