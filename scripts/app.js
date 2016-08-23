// Available data
// timer.seconds 
// timer.minutes
// timer.hour
// timer.day
// timer.month
// timer.year
// timer.meridiem

$(document).ready(function(){     
	// $("body").html(timer.month + '/' + timer.day + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem);
	setInterval(function() {
		$("body").html(timer.month + '/' + timer.day + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem);
	}, 1000);
});
