let apiKey = "e917200951340ec1a63349a80625798c"
let geoApi = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey
let weatherApi = "http://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&appid=" + apiKey
let city = document.getElementById("cityName")
let cityName = document.getElementById("citySearchInput").value
let cityLat = y
let cityLon = x
//5 day forecast URL
//http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//GEO URL
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

fetch(geoApi)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        cityLat = data[0].lat
        cityLon = data[0].lon
    })
    
fetch(weatherApi)
    .then(function (response) {
        return response.json()
    })



for (i = 0; i < 5; i++) {

}