let digitalClock = () => {

	let date = new Date();

	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	let hours = hour >= 12 ? hour : hour/12 ;
	let amorpm = hours >= 12 ? 'pm' : 'am';

	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	document.getElementById("amorpm").innerHTML = amorpm;

	setInterval(digitalClock, 500);
}

digitalClock();
