const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const feels_like = document.getElementById("feels_like");
const wind_speed = document.getElementById("wind_speed");
const cityName = document.getElementById("cityName");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c47dd501bbmsh902e3e1df1e4a71p17356ejsn0b5910eba61f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


// fetching API, get data from JSON
const getWeather = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			return showWeather(response)
		})
		.catch(err =>
			console.error(err)
		)
}

// default text showing before getting weather of city
weather.innerHTML = `<h3 style="color:white; padding: 20px 5px;">Search and get the live weather of any city...!</h3>`


const showWeather = (response) => {

	// If the city doesn't exist in API then showing error
	if (response.error == 'An unexpected error occured.') {
		weather.innerHTML = `<h3 style="color:red; padding-top: 20px;">${city.value} city doesn't found</h3>`;
		return
	}

	// Display weather on screen
	weather.innerHTML = `<div class="col-3">
    
		<div class="weather-info" >
        
        <img src="./cloud.png" alt=""  style="margin-left:1250px; height:-100px; width:150px; padding-top:-150px">
			<div class="col-1-1" style="margin-right:550px; width:100px; margin-top:80px; margin-left:-200px;">
				<span class="num"  style="margin-top:200px; margin-left:-200px;" id="temp">${response.temp}&#176C</span>
				
			</div>
			<div class="col-2" >
				<span class="city" id="cityName" style="margin-left:-850px; margin-top:100px;">${city.value}</span>
			</div>
		</div>
	</div>
	<div class="col-2">
	   <div class="weather-details" style="margin-top:190px; ">
			<h3 style="margin-left:-200px">Weather Details</h3>
			<div class="w-bottom"  >
				<ul>
					<li>Humidity: <span id="humidity" style="width:250px;">${response.humidity}%</span></li>
					<li>Feels like: <span id="feels_like">${response.feels_like}&#176C</span></li>
					<li>Wind: <span id="wind_speed"></span>${response.wind_speed} km/h</li>
				</ul>
			</div>
	   </div>
	</div>`
}

// Search other city weather
searchCity.addEventListener("click", (event) => {
	event.preventDefault()
	getWeather(city.value)
})