$(document).ready(function() {
	
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']; 
var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
var days = ['Sun','Mon','Tues', 'Wed','Thurs','Fri','Sat'];       
var skipdays = ['4','0','0','3','5','1','3','6','2','4','0','2'];
var leftovers = ['28','0','0','28','27','31','29','26','29', '28', '0','30'];
var today = new Date();
var date = today.getDate();
var curMonth = today.getMonth();
var prevMonth = noofdays[curMonth - 1];
today.setTime(today.getTime());       
document.getElementById("curr-month").innerHTML = months[curMonth];

var prevMonth = noofdays[curMonth - 1];
if (curMonth == 11) {
  prevMonth = noofdays[0];
} 
else if (curMonth == 0) {
  prevMonth = noofdays[11];
}

var totalDays = noofdays[curMonth];

for (var i = 0; i < 7; i++) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(days[i]));
	document.getElementById("days").appendChild(li);
}

for (var i = 1; i <= totalDays; i++) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(i));
	
	document.getElementById("all-date").appendChild(li);
	li.setAttribute("id", i);
	if(i == date){
		li.setAttribute("id", "change");
		document.getElementById("change").style.backgroundColor = "#02548b";
		document.getElementById("change").style.color = "#fff";
	}
}

$("#popup1").hide();
$("#popup2").hide();

	//time
	$("#show").on("click", function(){
		$("#popup").hide().fadeIn(1000);
	});
	
	$("#close").on("click", function () {
        $("#popup").fadeOut(1000);
    });
	
	//calender
	$("#calender").on("click", function(){
		$("#popup1").hide().fadeIn(1000);
	});
	
	$("#closeC").on("click", function () {
        $("#popup1").fadeOut(1000);
    });
	
	//weather
	$("#weather").on("click", function(){
		$("#popup2").hide().fadeIn(1000);
		callAjax();
	});
	
	$("#closeW").on("click", function () {
        $("#popup2").fadeOut(1000);
    });
	
	$(".next").on("click", function(){
		$(".next").show();
		$(".back").show();
		document.getElementById("curr-month").innerHTML = months[curMonth+1];
		
		var newMonth = today.getMonth();
		
		if (curMonth == 10) {
		 $(".next").hide();
		} 
		
		curMonth= curMonth+1;
		
		
		var totalDays = noofdays[curMonth];
		var skip = skipdays[curMonth];
		var skipPrev = skipdays[curMonth-1];
		
		for (var i = ((noofdays[curMonth-1])-(skipdays[curMonth-1])); i <= (noofdays[curMonth-1]); i++) {
			$("#" +i).remove();
		}
		
		
		for (var i = 1; i < (totalDays-skip); i++) {
		$("#change").remove();
		$("#" +i).remove();
		}
		/*for (var i = leftovers[curMonth-2]; i <= (noofdays[curMonth+2]); i++) {
			$("#" +i).remove();
		}*/
		for (var i = 1; i <= totalDays; i++) {
			
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(i));
			
			document.getElementById("all-date").appendChild(li);
			li.setAttribute("id", i);
			if(i == date){
				li.setAttribute("id", "change");
				document.getElementById("change").style.backgroundColor = "#02548b";
				document.getElementById("change").style.color = "#fff";
			}
		}
		
		if(curMonth == newMonth){
			document.getElementById("1").style.backgroundColor = "#ccc";
			document.getElementById("1").style.color = "#000";
			document.getElementById("change").style.backgroundColor = "#02548b";
			document.getElementById("change").style.color = "#fff";
		}
		else{
			document.getElementById("1").style.backgroundColor = "#02548b";
			document.getElementById("1").style.color = "#fff";
			document.getElementById("change").style.backgroundColor = "#ccc";
			document.getElementById("change").style.color = "#000";
		}
	});
	
	$(".back").on("click", function(){
		
		$(".back").show();
		$(".next").show();
		document.getElementById("curr-month").innerHTML = months[curMonth-1];
		if (curMonth == 1) {
		 $(".back").hide();
		} 
		curMonth= curMonth-1;
		var newMonth = today.getMonth();
		
		
		
		var totalDays = noofdays[curMonth];
		var skip = skipdays[curMonth];
		var skipPrev = skipdays[curMonth+1];
		
		for (var i = ((noofdays[curMonth+1])-(skipdays[curMonth+1])); i <= (noofdays[curMonth+1]); i++) {
			$("#" +i).remove();
		}
		
		
		for (var i = 1; i < (totalDays-skip); i++) {
		$("#change").remove();
		$("#" +i).remove();
		}
		for (var i = 1; i <= totalDays; i++) {
			
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(i));
			
			document.getElementById("all-date").appendChild(li);
			li.setAttribute("id", i);
			if(i == date){
				li.setAttribute("id", "change");
				document.getElementById("change").style.backgroundColor = "#02548b";
				document.getElementById("change").style.color = "#fff";
			}
		}
		if(curMonth == newMonth){
			document.getElementById("1").style.backgroundColor = "#ccc";
			document.getElementById("1").style.color = "#000";
			document.getElementById("change").style.backgroundColor = "#02548b";
			document.getElementById("change").style.color = "#fff";
		}
		else{
			document.getElementById("1").style.backgroundColor = "#02548b";
			document.getElementById("1").style.color = "#fff";
			document.getElementById("change").style.backgroundColor = "#ccc";
			document.getElementById("change").style.color = "#000";
		}
		
	});
	
});

