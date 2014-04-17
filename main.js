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
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var clockScreen = $('<div class="clock-screen"><p>12:10</p></div>');
	var clockampm = $('<div class="clock-ampm"><ul><li class="active">AM</li><li>PM</li></ul></div>');
	var amLabel = $('<div class="am-label">content</div>');
	var fmLabel = $('<div class="fm-label">content</div>');

	$('body').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(clockampm);
	innerShell.append(clockScreen);
	innerShell.append(amLabel);
	innerShell.append(fmLabel);

	// when AM, add active class + remove from PM
	// When PM, add active class + remove from AM
	// setinterval
});

// Outer Shell (dark gray)
// Inner Shell (black)
// Left AM/PM & Auto Labels (white)
// Clock Screen (dark red)
// Clock AM/PM indicator (red)
// Clock Text (red)
// Bottom AM Label & Frequencies (white)
// Bottom FM Label & Frequencies (white) 