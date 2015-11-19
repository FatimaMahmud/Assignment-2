function callAjax() {
	"use strict";
	var NameField = document.getElementById('name');
	var WeatherField = document.getElementById('main');
	var WeatherPanelField = document.getElementById('WeatherPanelField');
	var DescField = document.getElementById('desc');
	var TempMaxField = document.getElementById('Tmax');
	var HumidityField = document.getElementById('HumidityField');
	
	var urlToSend = "http://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=2de143494c0b295cca9337e1e96b00e0";
	
	$.ajax({
		url: urlToSend,
		dataType:"json",
		success: function(data) {
			NameField.innerHTML = "<b></b>" + data.name + ", " + data.sys.country ;
			DescField.innerHTML = "<b></b> " + data.weather[0].description;
			WeatherField.innerHTML = "<b></b> " + (data.main.temp- 273).toFixed(0) + "° C";
			WeatherPanelField.innerHTML = "<b></b> " + (data.main.temp- 273).toFixed(0) + "° C";
			TempMaxField.innerHTML = "<b>Maximum Temp</b> " + (data.main.temp_max-273).toFixed(0) + "° C" ;
			HumidityField.innerHTML = "<b>Humidity</b> " + (data.main.humidity) + " %" ;
			
		}
	});
}