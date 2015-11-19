
	var day1T = document.getElementById('day1T');
	var day1D = document.getElementById('day1D');
	
	var day2T = document.getElementById('day2T');
	var day2D = document.getElementById('day2D');
	
	var day3T = document.getElementById('day3T');
	var day3D = document.getElementById('day3D');
	
	var day4T = document.getElementById('day4T');
	var day4D = document.getElementById('day4D');
	
	var urlToSend = {
						"day1":
								{
								"temp":"16°C",
								"desc":"Clear"
								},
						"day2":
								{
								"temp":"23°C",
								"desc":"Sunny"
								},
						"day3":
								{
								"temp":"19°C",
								"desc":"Mostly Sunny"
								},
						"day4":
								{
								"temp":"10°C",
								"desc":"Partly Cloudy"
								}		
						};
						
	day1T.innerHTML = "<b></b>" + urlToSend.day1.temp ;
	day1D.innerHTML = "<b></b> " + urlToSend.day1.desc;
	
	day2T.innerHTML = "<b></b>" + urlToSend.day2.temp ;
	day2D.innerHTML = "<b></b> " + urlToSend.day2.desc;
	
	day3T.innerHTML = "<b></b>" + urlToSend.day3.temp ;
	day3D.innerHTML = "<b></b> " + urlToSend.day3.desc;
	
	day4T.innerHTML = "<b></b>" + urlToSend.day4.temp ;
	day4D.innerHTML = "<b></b> " + urlToSend.day4.desc;
	
	var yahooWeather = 
	[	{
			"code" : "0",
			"description" : "tornado",
			"icon" : "wi-tornado"
		},
		{
			"code" : "1",
			"description" : "tropical storm",
			"icon" : "wi-wu-chancetstorms"
		},
		{
			"code" : "2",
			"description" : "hurricane",
			"icon" : "wi-hurricane"
		},
		{
			"code" : "3",
			"description" : "severe thunderstorms",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "4",
			"description" : "thunderstorms",
			"icon" : "wi-thunderstorm"
		},
		{
			"code" : "5",
			"description" : "mixed rain and snow",
			"icon" : "wi-rain-mix"
			
		},
		{
			"code" : "6",
			"description" : "mixed rain and sleet",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "7",
			"description" : "mixed snow and sleet",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "8",
			"description" : "freezing drizzle",
			"icon" : "wi-sprinkle"
		},
		{
			"code" : "9",
			"description" : "drizzle",
			"icon" : "wi-sprinkle"
		},
		{
			"code" : "10",
			"description" : "freezing rain",
			"icon" : "wi-rain"
		},
		{
			"code" : "11",
			"description" : "showers",
			"icon" : "wi-showers"
		},
		{
			"code" : "12",
			"description" : "showers",
			"icon" : "wi-showers"
		},
		{
			"code" : "13",
			"description" : "snow flurries",
			"icon" : "wi-wu-flurries"
		},
		{
			"code" : "14",
			"description" : "light snow showers",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "15",
			"description" : "blowing snow",
			"icon" : "wi-snow-wind"
		},
		{
			"code" : "16",
			"description" : "snow",
			"icon" : "wi-snow"
		},
		{
			"code" : "17",
			"description" : "hail",
			"icon" : ".wi-hail"
		},
		{
			"code" : "18",
			"description" : "sleet",
			"icon" : "wi-sleet"
		},
		{
			"code" : "19",
			"description" : "dust",
			"icon" : ".wi-dust"
		},
		{
			"code" : "20",
			"description" : "foggy",
			"icon" : "wi-fog"
		},
		{
			"code" : "21",
			"description" : "haze",
			"icon" : "wi-wu-hazy"
		},
		{
			"code" : "22",
			"description" : "smoky",
			"icon" : "wi-smoke"
		},
		{
			"code" : "23",
			"description" : "blustery",
			"icon" : "wi-snow-wind"
		},
		{
			"code" : "24",
			"description" : "windy",
			"icon" : "wi-windy"
		},
		{
			"code" : "25",
			"description" : "cold",
			"icon" : "wi-snowflake-cold"
		},
		{
			"code" : "26",
			"description" : "cloudy",
			"icon" : "wi-cloudy"
		},
		{
			"code" : "27",
			"description" : "mostly cloudy (night)",
			"icon" : "wi-night-cloudy"
		},
		{
			"code" : "28",
			"description" : "mostly cloudy (day)",
			"icon" : "wi-night-cloudy"
		},
		{
			"code" : "29",
			"description" : "partly cloudy (night)",
			"icon" : "wi-forecast-io-partly-cloudy-night"
		},
		{
			"code" : "30",
			"description" : "partly cloudy (day)",
			"icon" : "wi-forecast-io-partly-cloudy-day"
		},
		{
			"code" : "31",
			"description" : "clear (night)",
			"icon" : "wi-night-clear"
		},
		{
			"code" : "32",
			"description" : "sunny",
			"icon" : "wi-wu-sunny"
		},
		{
			"code" : "33",
			"description" : "fair (night)",
			"icon" : "wi-forecast-io-clear-night"
		},
		{
			"code" : "34",
			"description" : "fair (day)",
			"icon" : "wi-forecast-io-clear-day"
		},
		{
			"code" : "35",
			"description" : "mixed rain and hail",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "36",
			"description" : "hot",
			"icon" : "wi-hot"
		},
		{
			"code" : "37",
			"description" : "isolated thunderstorms",
			"icon" : "wi-thunderstorm"
		},
		{
			"code" : "38",
			"description" : "scattered thunderstorms",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "39",
			"description" : "scattered thunderstorms",
			"icon" : "wi-thunderstorm"
		},
		{
			"code" : "40",
			"description" : "scattered showers",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "41",
			"description" : "heavy snow",
			"icon" : "wi-snow"
		},
		{
			"code" : "42",
			"description" : "scattered snow showers",
			"icon" : "wi-snow-wind"
		},
		{
			"code" : "43",
			"description" : "heavy snow",
			"icon" : "wi-snow"
		},
		{
			"code" : "44",
			"description" : "partly cloudy",
			"icon" : "wi-cloud"
		},
		{
			"code" : "45",
			"description" : "thundershowers",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "46",
			"description" : "snow showers",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "47",
			"description" : "isolated thundershowers",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "3200",
			"description" : "not available",
			"icon" : "wi-wu-unknown"
		}
		
	];
