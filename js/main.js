var the_number = null;
$(document).ready(initializeApp);

function initializeApp(){
	the_number = pick_number();
	console.log(the_number);
	$('button').on('click', make_guess);
	addModalCloseHandler();
	$('#galleryModal .modal-title').text('Remember, balancing power and speed is KEY.  Use the numbers below to select a weapon that suits you the best.');
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
			modal_header.css('background-color', '#9e3c9a');
			modal.modal();
			sounds.hard.play();
		} else if (the_guess - the_number === 1) {
			modal_title.text('A solid choice no doubt. But sometimes, speed is KING!');
			image.attr('src', 'img/speed.gif');
			modal_header.css('background-color', '#cc8904');
			modal.modal();
			sounds.medium2.play();
		} else if (the_guess - the_number <= -2) {
			modal_title.text('What was THAT?! You might as well just use a toothpick!');
			image.attr('src', 'img/blackknight.gif');
			modal_header.css('background-color', '#9bb4ff');
			modal.modal();
			sounds.light.play();
		} else if (the_guess - the_number === -1) {
			modal_title.text('A valiant effort! But Tywin wants you to try a little harder...');
			image.attr('src', 'img/tenor.gif');
			modal_header.css('background-color', '#d64f02');
			modal.modal();
			sounds.medium1.play();
		} else {
			modal_title.text('You did it!!! You\'ve done the impossible!!! That.Was.AMAZING!!!');
			image.attr('src', 'img/cheer.gif');
			modal_header.css('background-color', '#d60202');
			modal.modal();
			winning();
			setTimeout(winning, 4000);
			setTimeout(redirect, 7200);
		}
	} else {
		alert('Please use a number.');
	}
}

function winning() {
	sounds.win.play();
}

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

var sounds = {
	// open: new Howl({
	// 	src: ['sounds/jail_cell_door.mp3']
	// }),
	hard: new Howl({
		src: ['sounds/explosion.mp3']
	}),
	medium1: new Howl({
		src: ['sounds/steelsword.mp3']
	}),
	medium2: new Howl({
		src: ['sounds/punches.mp3']
	}),
	light: new Howl({
		src: ['sounds/wv-sword.mp3']
	}),
	win: new Howl({
		src: ['sounds/cheering1.mp3']
	})
}