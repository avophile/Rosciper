//code goes here
setState = 3;

function countdown() {
	setState--;
	document.getElementById("seconds").setState = timeleft;
	if (timeleft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);