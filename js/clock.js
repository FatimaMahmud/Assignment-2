$(document).ready(function() {
	
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']; 
var today = new Date();
var curMonth = today.getMonth();
today.setTime(today.getTime());       
document.getElementById("day").innerHTML = today.getDate();
document.getElementById("day1").innerHTML = months[curMonth].substring(0,3) + " " + (today.getDate()+1);
document.getElementById("day2").innerHTML = months[curMonth].substring(0,3) + " " + (today.getDate()+2);
document.getElementById("day3").innerHTML = months[curMonth].substring(0,3) + " " + (today.getDate()+3);
document.getElementById("day4").innerHTML = months[curMonth].substring(0,3) + " " + (today.getDate()+4) ;
document.getElementById("month").innerHTML = months[curMonth];

	
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ampm = h >= 12 ? ' PM' : ' AM';
     
      hmod= h % 12;
 
    $('#time').text(hmod + ":" + m + ":" + s + ampm);
      setTimeout(function(){startTime()},500);
    if( hmod.toString().length === 1) {
      $('#time').text(hmod + ":" +  m + ":" + s + ampm);
    };
    if( m.toString().length === 1) {
      $('#time').text(hmod + ":" + "0" + m + ":" + s + ampm);
    };
    if( s.toString().length === 1) {
      $('#time').text(hmod + ":" + m + ":" + "0" + s + ampm);
    };
  };
  startTime();
});

