function setTime(){
	var currentTime = new Date(),
		hour = currentTime.getHours(),
		minute = currentTime.getMinutes(),
		second = currentTime.getSeconds(),
		hourHand = (360/12)*hour,
		minuteHand = (360/60)*minute,
		secondHand = (360/60)*second;

	$('#hour').css('transform', 'rotate('+hourHand+'deg)');

	$('#minute').css('transform', 'rotate('+minuteHand+'deg)');

	$('#second').css('transform', 'rotate('+secondHand+'deg)');

}

setInterval(function(){
	setTime();
}, 1000);