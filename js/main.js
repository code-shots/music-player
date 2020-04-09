/* eslint-disable */

document.addEventListener('DOMContentLoaded', () => {
	// SELECT ELEMENTS
	let forwardBtn = document.querySelector('.forward-btn');
	let backwardBtn = document.querySelector('.backward-btn');
	let songTitle = document.querySelector('.title-wrapper h1');
	let artistTitle = document.querySelector('.title-wrapper h2');

	// CREATE ARRAY FOR CONTROLS
	let controlArray = [forwardBtn, backwardBtn];

	// ADD EVENTLISTENERS TO CONTROLS AND CALL FUNCTIONS
	controlArray.forEach((control) => {
		control.addEventListener('click', () => {
			switch (control) {
				case forwardBtn:
					nextSong();
					break;

				case backwardBtn:
					prevSong();
					break;
			}
		})
	})

	// MUSIC INFORMATION
	let songArray = ['Columbiana', 'MONEYHONEYDRIP', 'Diggiduwaist', 'You', 'Dystopia'];
	let artistArray = ['Capital Bra & Samra', 'Jamule', 'Selmon', 'Besomorph & Jagsy', 'Disarstar'];

	// SET INTIAL SONG NUMBER + LOAD IN ANIMATION
	let songNumber = 2;
	songTitle.innerHTML = songArray[songNumber];

	anime({
		targets: '.Diggiduwaist',
		scale: [0.8, 1.1],
		easing: 'easeOutExpo',
		duration: 1500,
	})

	function nextSong() {
		if (songNumber == 4) {
			songNumber = 0;
			setSong();

			// ANIMATE TO FIRST COVER WHEN END OF songArray REACHED
			anime({
				targets: '.cover-row',
				translateX: '510px',
				easing: 'easeOutExpo',
			})
		} else {
			songNumber += 1;
			setSong();
			scaleCoverDownNext();

			// ANIMATE TO NEXT COVER
			anime({
				targets: '.cover-row',
				translateX: '-=255px',
				easing: 'easeOutExpo',
			})
		}
	}

	function prevSong() {
		if (songNumber == 0) {
			// DO NOTHING WHEN PREV IS CLICKED AT BEGINNING OF LIST
		} else {
			songNumber -= 1;
			setSong();
			scaleCoverDownPrev();

			// ANIMATE TO NEXT COVER
			anime({
				targets: '.cover-row',
				translateX: '+=255px',
				easing: 'easeOutExpo',
			})
		}
	}

	// SET SONG INFORMATION AND COVER
	function setSong() {
		songTitle.innerHTML = songArray[songNumber];
		artistTitle.innerHTML = artistArray[songNumber];

		// SCALE UP CURRENT COVER
		anime({
			targets: `.${songArray[songNumber]}`,
			scale: 1.1,
			easing: 'easeOutExpo',
			duration: 1500,
		})
	}

	function scaleCoverDownNext() {
		let prevSongNumber = songNumber - 1;

		anime({
			targets: `.${songArray[prevSongNumber]}`,
			scale: 1,
			easing: 'easeOutExpo',
			duration: 1500,
		})
	}

	function scaleCoverDownPrev() {
		let nextSongNumber = songNumber + 1;

		anime({
			targets: `.${songArray[nextSongNumber]}`,
			scale: 1,
			easing: 'easeOutExpo',
			duration: 1500,
		})
	}

	// PLAY/PAUSE BUTTON
	let playBtn = document.querySelector('.play-icon');
	playBtn.addEventListener('click', () => {
		playBtn.classList.toggle('paused');
	})
})
