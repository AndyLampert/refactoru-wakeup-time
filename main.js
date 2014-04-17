$(document).on('ready', function() {
	// VARAIBLE DECLARATIONS
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var clockScreen = $('<div class="clock-screen"><span class="hours"></span><span id="colon">:<span class="minutes"></span></div>');
	var clockampm = $('<div class="clock-ampm"><ul><li class="am-notifier">AM</li><li class="pm-notifier">PM</li></ul></div>');
	var amLabel = $('<div class="am-label">AM 53 60 70 90 110 140 170</div>');
	var fmLabel = $('<div class="fm-label">FM 88 92 96 102 106 108</div>');

	// CREATING STRUCTURE VIA JQUER
	$('body').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(clockampm);
	innerShell.append(clockScreen);
	innerShell.append(amLabel);
	innerShell.append(fmLabel);

	// when AM, add active class + remove from PM
	

	// updating the time real time

	var updateTime = function() {

		var currentDate = new Date();
		var now = moment("hh,h");
		var dateHr = currentDate.getHours();
		var dateMin = currentDate.getMinutes();

		if(dateHr >= 12) {
			$('.pm-notifier').addClass('active');
			$('.am-notifier').removeClass('active');
		} else {
			$('.am-notifier').addClass('active');
			$('.pm-notifier').removeClass('active');
		}
		// updating the time real time
		$('.clock-screen').text( moment().format("hh:mm") );
	}
	
	updateTime();

	setInterval(updateTime, 1000);

});









