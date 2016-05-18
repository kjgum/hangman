window.onload = function() {
	
	var userGuess;
	var words = ["ACCELERATE", "ACCIDENT", "ASPHALT", "AUTOMOBILE", "AVENUE", "BICYCLE", 
								"BOULEVARD", "BRAKES", "BUS’", "CIRCLE", "CLUTCH", "CONSTRUCTION", 
								"CARPOOL", "DETOUR", "DRIVE", "EMISSION", "EXHAUST", "EXIT", "EXPRESSWAY", 
								"FAST", "FENDER", "FREEWAY", "FUEL", "GAS", "GEAR", "GPS", "GRIDLOCK", 
								"HEADLIGHTS", "HYBRID", "INTERSECTION", "INTERSTATE", "IDLING", "LANE", 
								"LICENSE", "LIGHTS", "MANUAL", "MAP", "MILE", "MERGE", "MOTOR", "MOTORCYCLE", 
								"MPH", "OIL", "OVERPASS", "PARK", "PARKING", "PARKWAY", "PAVEMENT", "PEDAL", 
								"PEDESTRIAN", "POLICE", "RAILROAD", "RAMP", "REGISTRATION", "REST", "REVERSE", 
								"ROADWAY", "SAFETY", "SCENERY", "SEATBELT", "SHOULDER", "SIDEWALK", "SIGN", 
								"SLOW", "SPEED", "STATE", "STOP", "STREET", "STEER", "TICKET", "TIRE", "TOLL", 
								"TRAFFIC", "TRUCK", "TRANSPORTATION", "TUNNEL", "TURN", "UNDERPASS", "VEHICLE", 
								"WARNING"];
	var word = [];
	var positions = [];
	var guessedLetters = [];
	var guesses;
	var wins;
	var losses;
	var count = 0;

	// inital
	wins = 0;
	losses = 0;
	document.querySelector(".wins").innerHTML = wins;
	document.querySelector(".losses").innerHTML = losses;

	// first word is ACCELERATE for testing purposes
	var num = 0;
	newWord(num);
	

	function selectNewWord() {
		num = Math.floor((Math.random() * 80) + 1);
		newWord(num);
		console.log(words[num]);
	}

	

	function newWord(num) {
		// set guesses
		guesses = 6;
		document.querySelector(".guesses").innerHTML = guesses;
		// hangman picture
		document.querySelector(".hangman").innerHTML = '<img src="assets/images/hang' + guesses + '.png">';
		// clear positions and guesses
		positions = [];
		guessedLetters = [];
		document.querySelector(".letters-guessed").innerHTML = guessedLetters.join(" ");
		// set positions of intial word and display
		word = words[num].split("");
		for (var i=0; i<word.length; i++) {
			positions.push("_");
		}
		document.querySelector(".positions").innerHTML = positions.join(" ");

		document.onkeyup = function(event) {
			// Reset non-letter and already-guessed
			document.querySelector(".info").innerHTML = "";
			// get letter only
			if (event.keyCode >= 65 && event.keyCode <= 90) {
				userGuess = String.fromCharCode(event.keyCode).toUpperCase();
				checkGuessed(userGuess);
			} else {
				document.querySelector(".info").innerHTML = "please press a letter";
			}

			checkWin();
		}
	}

	

	function checkGuessed(userGuess) {
		// Check to see if letter matches any letters in word
		check: {
			for (var i=0; i<guessedLetters.length; i++) {
				if (guessedLetters[i] == userGuess) {
					document.querySelector(".info").innerHTML = "<h2>guess another letter</h2>";
					break check;
				}
			}
			for (var i=0; i<positions.length; i++) {
				if (positions[i] == userGuess) {
					document.querySelector(".info").innerHTML = "<h2>guess another letter</h2>";
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
		checkWin();
	}



	function checkWin() {
		// if all underscores are replaced
		winning: {
			for (var i=0; i<positions.length; i++) {
				if (positions[i] == "_") {
					break winning;
				}
			}
			// display wins
			wins++;
			answerReset();
			document.querySelector(".wins").innerHTML = wins;
			document.querySelector(".hangman").innerHTML = '<img src="assets/images/youwon.png">';
			
		}
		// guess reaches 0
		if (guesses == 0) {
			answerReset();
			losses++;
			document.querySelector(".losses").innerHTML = losses;
			document.querySelector(".hangman").innerHTML = '<img src="assets/images/youlost.png">';
		}
	}



	function answer() {

		// key to reset
		document.onkeyup = function(event) {
			answerReset();
		}

		document.querySelector(".guessLetter").addEventListener("click", function(){
		    answerReset();
		});
	}

	

	function answerReset() {
		// reset answer
		document.querySelector(".response").innerHTML = "";

		document.querySelector(".anykey").innerHTML = "";

		selectNewWord();
	}



}




