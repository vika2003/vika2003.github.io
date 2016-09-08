(function() {

var time = 0;
var running = 0;

function start() {

	 if (running == 0) {
	 	running = 1;
	 	increment();
	 	document.getElementById('start').innerHTML = 'Stop';
	 } else {
	 	running = 0;
	 	document.getElementById('start').innerHTML = 'Resume';

	 		var text_stop = document.getElementById('text_stop');
	 		var stop_number = document.createElement('div');
 	 		stop_number.className = 'stopItem';
 	 		var allStops = document.getElementsByClassName('stopItem');
 	 		var actStops = allStops.length;
 	 		var newText = document.getElementById('stopwatch').innerHTML;
 	 		stop_number.innerHTML = "Stop " + (actStops + 1) + ": " + newText;
 	 		text_stop.insertBefore(stop_number, allStops[0]);
	 }
}

function reset() {
	running = 0;
	time = 0;
	document.getElementById('start').innerHTML = 'start';
	document.getElementById('stopwatch').innerHTML = '00:00:00.00';

	var text_stop = document.getElementById('text_stop');
	var text_split = document.getElementById('text_split');
	text_split.innerHTML = "";
	text_stop.innerHTML = "";
}

function increment() {

	if (running == 1) {
		setTimeout(function() {
			time++;
			var secs = Math.floor(time/100 % 60);
			var mins = Math.floor(time/100/60);
			var hours = Math.floor(time/100/60/60);
			var tenths = time % 100;

			if(hours < 10) {
				hours = '0' + hours;
			}

			if(mins < 10) {
				mins = '0' + mins;
			}

			if(secs < 10) {
				secs = '0' + secs;
			}

			if(tenths < 10) {
				tenths = '0' + tenths;
			}

			document.getElementById('stopwatch').innerHTML = hours + ':' + mins + ':' + secs + '.' + tenths;
			increment();
		}, 10);
	}
}

function split() {
 	
 	 		var text_split = document.getElementById('text_split');
 	 		var split_number = document.createElement('div');
 	 		split_number.className = 'splitItem';
 	 		var allSplits = document.getElementsByClassName('splitItem');
 	 		var actSplits = allSplits.length;
 	 		var newText = document.getElementById('stopwatch').innerHTML;
 	 		split_number.innerHTML = "Split " + (actSplits + 1) + ":  " + newText;
 	 		text_split.insertBefore(split_number, allSplits[0]);
}

	document.getElementById('start').addEventListener('click', start);
	document.getElementById('reset').addEventListener('click', reset);
	document.getElementById('split').addEventListener('click', split);

})();