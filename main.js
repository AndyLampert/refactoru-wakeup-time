// When the document is ready, create DOM elements for each of the following components to approximate the clock pictured above:
// Outer Shell (dark gray)
// Inner Shell (black)
// Left AM/PM & Auto Labels (white)
// Clock Screen (dark red)
// Clock AM/PM indicator (red)
// Clock Text (red)
// Bottom AM Label & Frequencies (white)
// Bottom FM Label & Frequencies (white)

$(document).on('ready', function() {
	// VARAIBLE DECLARATIONS
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var clockScreen = $('<div class="clock-screen"><span class="hours">12</span><span class="colon">:<span class="minutes">10</span></div>');
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
	var currentDate = new Date();
	var dateHr = currentDate.getHours();
	var dateMin = currentDate.getMinutes();
	if(dateHr >= 12) {
		$('.pm-notifier').addClass('active');
		$('.am-notifier').removeClass('active');
	} else {
		$('.am-notifier').addClass('active');
		$('.pm-notifier').removeClass('active');
	}

	// When PM, add active class + remove from AM
	
	// setinterval
	// 
	// Get the current time in hr/min format using the date object 
	// Update ".clock-screen".text() or val()
	// update .active (am/pm)
	// target ":" ONLY
});

// Outer Shell (dark gray)
// Inner Shell (black)
// Left AM/PM & Auto Labels (white)
// Clock Screen (dark red)
// Clock AM/PM indicator (red)
// Clock Text (red)
// Bottom AM Label & Frequencies (white)
// Bottom FM Label & Frequencies (white) 