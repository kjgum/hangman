window.onload = function() {
	
	var userGuess;
	var words = ["ACCELERATE", "ACCIDENT", "ASPHALT", "AUTOMOBILE", 
										"AVENUE", "BICYCLE", "BOULEVARD", "BRAKES", "BUS"];
	var word = [];
	var positions = [];
	var guessedLetters = [];
	var guesses;
	var wins;
	var losses;
	var count = 0;

	// inital wins
	wins = 0;
	losses = 0;
	document.querySelector(".wins").innerHTML = wins;
	document.querySelector(".losses").innerHTML = losses;

	// Select the first word
	var num = 0;
	newWord(num);


	

	function newWord(num) {
		// Set initial guesses
		guesses = 6;
		document.querySelector(".guesses").innerHTML = guesses;
		// hangman picture
		document.querySelector(".hangman").innerHTML = '<img src="assets/images/hang' + guesses + '.png">';
		// clear positions and guesses
		positions = [];
		guessedLetters = [];
		document.querySelector(".letters-guessed").innerHTML = guessedLetters.join(" ");
		// Set positions of intial word and display
		word = words[num].split("");
		for (var i=0; i<word.length; i++) {
			positions.push("_");
		}
		document.querySelector(".positions").innerHTML = positions.join(" ");

		document.onkeyup = function(event) {
			// Reset non-letter and already-guessed
			document.querySelector(".red").innerHTML = "";
			// Get letter from player
			if (event.keyCode >= 65 && event.keyCode <= 90) {
				userGuess = String.fromCharCode(event.keyCode).toUpperCase();
				checkGuessed(userGuess);
			} else {
				document.querySelector(".red").innerHTML = "please press a letter";
			}
			// Check to see if player won or lost
			checkWin();
		}
	}

	

	function checkGuessed(userGuess) {
		// Check to see if letter matches any letters in word
		check: {
			for (var i=0; i<guessedLetters.length; i++) {
				if (guessedLetters[i] == userGuess) {
					document.querySelector(".red").innerHTML = "<h2>guess another letter</h2>";
					break check;
				}
			}
			for (var i=0; i<positions.length; i++) {
				if (positions[i] == userGuess) {
					document.querySelector(".red").innerHTML = "<h2>guess another letter</h2>";
					break check;
				}
			}
			replacements(userGuess);
		}
	}



	function replacements(userGuess) {
		// Check to see if letter matches any letters in word
		var replacements = 0;
		for (var i=0; i<word.length; i++) {
			if (word[i] == userGuess) {
				positions[i] = word[i];
				replacements++;
			}
		}
		if (replacements == 0) {
			//  no replacements reduce guesses
			guesses--;
			document.querySelector(".guesses").innerHTML = guesses;
			document.querySelector(".hangman").innerHTML = '<img src="assets/images/hang' + guesses + '.png">';
			// display guessed letters
			guessedLetters.push(userGuess);
			document.querySelector(".letters-guessed").innerHTML = guessedLetters.join(" ");
		} else {
			// redisplay positions
			document.querySelector(".positions").innerHTML = positions.join(" ");
		}
	}



	function checkWin() {
		// if all underscores are replaced
		winning: {
			for (var i=0; i<positions.length; i++) {
				if (positions[i] == "_") {
					break winning;
				}
			}
			// Update and display wins
			wins++;
			document.querySelector(".wins").innerHTML = wins;
			// Show answer
			answer("c");
		}
		// Check if guess reaches 0
		if (guesses == 0) {
			answer("inc");
			losses++;
			document.querySelector(".losses").innerHTML = losses;
		}
	}



	function answer(letter) {

		// Show answer
		document.querySelector(".response").innerHTML = letter + "orrect! it's " + words[num] + "!";
		document.querySelector(".hangman").innerHTML = '<img src="assets/images/youwon.png">';

		// Listen for key to reset
		document.onkeyup = function(event) {
			answerReset();
		}
		// Any key restarts game
		document.querySelector(".left").addEventListener("click", function(){
		    answerReset();
		});
		document.querySelector(".right").addEventListener("click", function(){
		    answerReset();
		});
		// Listen for press to reset
		document.querySelector(".guessLetter").addEventListener("click", function(){
		    answerReset();
		});
	}

		function selectNewWord() {
		
		var num = Math.floor((Math.random() * 9) + 1);
		newWord(num);
		// num++;
		// // Keep selecting new words when available
		// if (num < words.length) {
		// 	// Select new word
		// 	newWord(num);
		// } else {
		// 	// Reset num
		// 	num = 0;
		// 	newWord(num);
		// }
	}

	function answerReset() {
		// Reset answer
		document.querySelector(".response").innerHTML = "";

		document.querySelector(".anykey").innerHTML = "";

		selectNewWord();
	}



}

// var wordArray = [‘accelerate’, ‘accident’, ‘asphalt’, ‘automobile’, 
// 										‘avenue’, ‘bicycle’, ‘boulevard’, ‘brakes’, ‘bus’, 
// 										‘circle’, ‘clutch’, ‘construction’, ‘carpool’, ‘detour’, 
// 										‘drive’, ‘emission’, ‘exhaust’, ‘exit’, ‘expressway’, ‘fast’, 
// 										‘fender’, ‘freeway’, ‘fuel’, ‘gas’, ‘gear’, ‘gps’, ‘gridlock’, 
// 										‘headlights’, ‘hybrid’, ‘intersection’, ‘ interstate’, 
// 										‘idling’, ‘lane’, ‘license’, ‘lights’, ‘manual’, ‘map’, ‘mile’, 
// 										‘merge’, ‘motor’, ‘motorcycle’, ‘mph’, ‘oil’, ‘overpass’, 
// 										‘park’, ‘parking’, ‘parkway’, ‘pavement’, ‘pedal’, ‘pedestrian’, 
// 										‘police’, ‘railroad’, ‘ramp’, ‘registration’, ‘rest’, ‘reverse’, 
// 										‘roadway’, ‘safety’, ‘scenery’, ‘seatbelt’, ‘shoulder’, ‘sidewalk’, 
// 										‘sign’, ‘slow’, ‘speed’, ‘state’, ‘stop’, ‘street’, ‘steer’, 
// 										‘ticket’, ‘tire’, ‘toll’, ‘traffic’, ‘truck’, ‘transportation’, 
// 										‘tunnel’, ‘turn’, ‘underpass’, ‘vehicle’, ‘warning’];







