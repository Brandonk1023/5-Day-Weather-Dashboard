
document.getElementById("searchbtn").addEventListener("click", getWeather)
let apiKey = "e917200951340ec1a63349a80625798c"
let cityLat = ""
let cityLon = ""
//let time = dayjs()
let searchHistory = []
let searchedCity = {}

//searchHistory-Array used for storing object data for search history
/*
    {
        cityName: EXAMPLE;
        cityLat: EXAMPLE;
        cityLon: Example;
    }
*/

//5 day forecast URL
//http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//GEO URL
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//ICON URL
//http://openweathermap.org/img/wn/{ICON}@2x.png

function getWeather() {
    let cityName = document.getElementById("citySearchInput").value
    let geoApi = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey

    fetch(geoApi)
        .then(function (response) {
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            cityLat = data[0].lat
            console.log(cityLat, "CITY LAT VALUE")
            cityLon = data[0].lon
            console.log(cityLon, "CITY LON VALUE")

            searchedCity = {
                Name: cityName,
                Lat: cityLat,
                Lon: cityLon,
            }

            console.log(searchedCity, "SC Value")

            searchHistory.push(searchedCity)
            console.log(searchHistory, "SEARCH History Value")
            
            let weatherApi = "https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial&appid=" + apiKey

            fetch(weatherApi)
            .then(function (response) {
                return response.json()
            })
    
            .then(function (data) {
    
            })

        })


    //for (i = 0; i < 5; i++) {
    //}

    function addSearchHistory() {


    }
}
