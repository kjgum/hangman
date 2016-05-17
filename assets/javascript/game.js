var wordsArray = [‘accelerate’, ‘accident’, ‘asphalt’, ‘automobile’, 
										‘avenue’, ‘bicycle’, ‘boulevard’, ‘brakes’, ‘bus’, 
										‘circle’, ‘clutch’, ‘construction’, ‘carpool’, ‘detour’, 
										‘drive’, ‘emission’, ‘exhaust’, ‘exit’, ‘expressway’, ‘fast’, 
										‘fender’, ‘freeway’, ‘fuel’, ‘gas’, ‘gear’, ‘gps’, ‘gridlock’, 
										‘headlights’, ‘hybrid’, ‘intersection’, ‘ interstate’, 
										‘idling’, ‘lane’, ‘license’, ‘lights’, ‘manual’, ‘map’, ‘mile’, 
										‘merge’, ‘motor’, ‘motorcycle’, ‘mph’, ‘oil’, ‘overpass’, 
										‘park’, ‘parking’, ‘parkway’, ‘pavement’, ‘pedal’, ‘pedestrian’, 
										‘police’, ‘railroad’, ‘ramp’, ‘registration’, ‘rest’, ‘reverse’, 
										‘roadway’, ‘safety’, ‘scenery’, ‘seatbelt’, ‘shoulder’, ‘sidewalk’, 
										‘sign’, ‘slow’, ‘speed’, ‘state’, ‘stop’, ‘street’, ‘steer’, 
										‘ticket’, ‘tire’, ‘toll’, ‘traffic’, ‘truck’, ‘transportation’, 
										‘tunnel’, ‘turn’, ‘underpass’, ‘vehicle’, ‘warning’];


var word;

document.onkeyup = function(event) {

	var guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(guessLetter);

	var guesses = document.querySelector('.guessLetter');

	guesses.innerHTML = guessLetter + ', ';

}
