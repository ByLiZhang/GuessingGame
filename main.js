var the_number = null;
$(document).ready(initializeApp);

function initializeApp(){
	the_number = pick_number();
	console.log(the_number);
	$('button').on('click', make_guess);
	addModalCloseHandler();
	$('#galleryModal .modal-title').text('Remember, balancing power and speed is KEY.  Picking the weapon that suits you the best shall help greatly.');
	$('#galleryModal .modal-header').css('background-color', '#098c02');
	$('.modal-body>img').attr('src', 'img/Dayne.gif');
	$('#galleryModal').modal();
}

function pick_number() {
	var random_number = Math.floor(Math.random()*10) + 1;
	return random_number;
}	

function make_guess() {
	var guess_input = $(this).val();
	var the_guess = Number(guess_input).toFixed(0);
	var image = $('.modal-body>img');
	var modal = $('#galleryModal');
	var modal_header = $('#galleryModal .modal-header');
	var modal_title = $('#galleryModal .modal-title');
	modal_header.css('background-color', '');
	if (the_guess) {
		if (the_guess - the_number >= 2) {
			modal_title.text('Power overwhelming! Blown into oblivion this place would be...');
			image.attr('src', 'img/nuke.gif');
			modal_header.css('background-color', '#d600f7')
			modal.modal();
		} else if (the_guess - the_number === 1) {
			modal_title.text('A solid choice. But sometimes, swiftness is better!');
			image.attr('src', 'img/speed.gif');
			modal_header.css('background-color', '#f7b900')
			modal.modal();
		} else if (the_guess - the_number <= -2) {
			modal_title.text('What was THAT?! You may as well just use a toothpick!');
			image.attr('src', 'img/blackknight.gif');
			modal_header.css('background-color', '#0c4db5')
			modal.modal();
		} else if (the_guess - the_number === -1) {
			modal_title.text('A valiant effort! But Tywin wants you to try a little harder...');
			image.attr('src', 'img/tenor.gif');
			modal_header.css('background-color', '#d64f02')
			modal.modal();
		} else {
			modal_title.text('You did it!!! You\'ve done the impossible!!! That.Was.AMAZING!!!');
			image.attr('src', 'img/cheer.gif');
			modal_header.css('background-color', '#d60202')
			modal.modal();
			setTimeout(redirect, 7200);
		}
	} else {
		$('#response_div').text('Please only use a number between 1-10.');
	}
}

// function displayImage(){
// 		$('h4.modal-title').text('modal test');
// 		$('.modal-body>img').attr('src', 'img/chest.jpg');
// 		$('#galleryModal').modal();
// }

function addModalCloseHandler(){
	$('.modal-body>img').click(function(){
		$('#galleryModal').modal('hide');
		$('#galleryModal .modal-title').css('background-color', '');
	})
}

// function newTab() {
// 	window.open('file:///C:/Users/Samosa/Desktop/lfz/guess/win.html', '_blank');
// }

function redirect() {
	document.location.href = 'win.html';
}