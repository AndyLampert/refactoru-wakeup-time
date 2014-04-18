$(document).on('ready', function() {
	// VARAIBLE DECLARATIONS
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var clockScreen = $('<div class="clock-screen"><span class="hours"></span><span id="colon">:</span><span class="minutes"></span></div>');
	var clockampm = $('<div class="clock-ampm"><ul><li class="am-notifier">AM</li><li class="pm-notifier">PM</li></ul></div>');
	var amLabel = $('<div class="am-label"><ul><li>AM</li> <li>53</li> <li>60</li> <li>70</li> <li>90</li> <li>110</li> <li>140</li> <li>170</li></ul></div>');
	var fmLabel = $('<div class="fm-label"><ul><li>FM</li> <li>88</li> <li>92</li> <li>96</li> <li>102</li> <li>106</li> <li>108</li></ul></div>');

	// CREATING STRUCTURE VIA JQUER
	$('body').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(clockampm);
	innerShell.append(clockScreen);
	innerShell.append(amLabel);
	innerShell.append(fmLabel);

	// when AM, add active class + remove from PM

	// updating the time real time

	var showColon = true;
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
		// the time (hour, colon, min) in one line
		// $('.clock-screen').text( moment().format("hh" + ( (showColon)? ":" : " ") + "mm") );
		// the time in 3 separate span tags
		$('.clock-screen .hours').text(moment().format('hh'));
 		$('.clock-screen .minutes').text(moment().format('mm'));
 		$('#colon').css('visibility', (showColon)? "visible" : "hidden");
		// this inverts the value 
		showColon = !showColon;
	}

	updateTime();

	setInterval(updateTime, 1000);

});









