var dateEl = document.getElementById("cityDateEl")
var searchButton = document.getElementById("searchButton")
var currentTemp = document.getElementById("currentTemp")
var windSpeed = document.getElementById("windSpeed")
var humidity = document.getElementById("humidity")
var today = dayjs().format('MMM, DD, YYYY')
var forecast1 = document.getElementById('day1')
var forecast2 = document.getElementById('day2')
var forecast3 = document.getElementById('day3')
var forecast4 = document.getElementById('day4')
var forecast5 = document.getElementById('day5')
var day1 = dayjs().add(1, 'day').format('MMM, DD, YYYY')
var day2 = dayjs().add(2, 'day').format('MMM, DD, YYYY')
var day3 = dayjs().add(3, 'day').format('MMM, DD, YYYY')
var day4 = dayjs().add(4, 'day').format('MMM, DD, YYYY')
var day5 = dayjs().add(5, 'day').format('MMM, DD, YYYY')

var cityLat
var cityLon
function search(event) {
    var requestedCity = document.querySelector('#cityInput').value
var cities = [
        {city: "Montgomery", lat: 32.377716, lon: -86.300568},
        {city: "Juneau", lat: 58.3019, lon: -134.4197},
        {city: "Phoenix", lat: 33.448143, lon: -112.096962},
        {city: "Little Rock", lat: 34.746613, lon: -92.288986},
        {city: "Sacramento", lat: 38.576668, lon: -121.493629},
        {city: "Denver", lat: 39.739227, lon: -104.984856},
        {city: "Hartford", lat: 41.764046, lon: -72.682198},
        {city: "Dover", lat: 39.158168, lon: -75.524368},
        {city: "Tallahassee", lat: 30.438118, lon: -84.281296},
        {city: "Atlanta", lat: 33.749027, lon: -84.388229},
        {city: "Honolulu", lat: 21.307442, lon: -157.857376},
        {city: "Boise", lat: 43.615018, lon: -116.202314},
        {city: "Springfield", lat: 39.798214, lon: -89.644890},
        {city: "Indianapolis", lat: 39.768623, lon: -86.162643},
        {city: "Des Moines", lat: 41.591087, lon: -93.603729},
        {city: "Topeka", lat: 39.047347, lon: -95.675158},
        {city: "Frankfort", lat: 38.186722, lon: -84.875374},
        {city: "Baton Rouge", lat: 30.458282, lon: -91.140319},
        {city: "Augusta", lat: 44.307167, lon: -69.781693},
        {city: "Annapolis", lat: 38.978764, lon: -76.490936},
        {city: "Boston", lat: 42.360082, lon: -71.058880},
        {city: "Lansing", lat: 42.732535, lon: -84.555535},
        {city: "St. Paul", lat: 44.952392, lon: -93.089956},
        {city: "Jackson", lat: 32.298757, lon: -90.184810},
        {city: "Jefferson City", lat: 38.576702, lon: -92.173516},
        {city: "Helena", lat: 46.589580, lon: -112.039105},
        {city: "Lincoln", lat: 40.813616, lon: -96.702596},
        {city: "Carson City", lat: 39.163799, lon: -119.767405},
        {city: "Concord", lat: 43.208137, lon: -71.537451},
        {city: "Trenton", lat: 40.217053, lon: -74.742938},
        {city: "Santa Fe", lat: 35.686975, lon: -105.937799},
        {city: "Albany", lat: 42.652580, lon: -73.756233},
        {city: "Raleigh", lat: 35.780397, lon: -78.639099},
        {city: "Bismarck", lat: 46.808327, lon: -100.783739},
        {city: "Columbus", lat: 39.961176, lon: -82.998794},
        {city: "Oklahoma City", lat: 35.463368, lon: -97.515770},
        {city: "Salem", lat: 44.942554, lon: -123.035404},
        {city: "Harrisburg", lat: 40.266310, lon: -76.886112},
        {city: "Providence", lat: 41.823989, lon: -71.412834},
        {city: "Columbia", lat: 34.000710, lon: -81.034814},
        {city: "Pierre", lat: 44.368316, lon: -100.351061},
        {city: "Nashville", lat: 36.165810, lon: -86.784241},
        {city: "Austin", lat: 30.267153, lon: -97.743061},
        {city: "Salt Lake City", lat: 40.760779, lon: -111.891047},
        {city: "Montpelier", lat: 44.260059, lon: -72.575387},
        {city: "Richmond", lat: 37.540725, lon: -77.436048},
        {city: "Olympia", lat: 47.037874, lon: -122.900695},
        {city: "Charleston", lat: 38.349820, lon: -81.632623},
        {city: "Madison", lat: 43.073052, lon: -89.401230},
        {city: "Cheyenne", lat: 41.139981, lon: -104.820246}
    ]
    event.preventDefault()
    for (i=0; i<cities.length; i++) {
        if (cities[i].city==requestedCity) {
        cityLat = cities[i].lat
        cityLon = cities[i].lon
        }
    };


var requestUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+cityLat+"&lon="+cityLon+"&appid=8e70090a850bcd7ae5f862ff86cd1fcf&units=imperial"
console.log(dateEl)
 console.log(cityLat, cityLon)
fetch(requestUrl)
    .then(function (response) {
        console.log(response)
    return response.json();
    })
    .then(function (data) {
        console.log(data);
currentTemp.append(data.main.temp + "°F")
windSpeed.append(data.wind.speed + "MPH")
humidity.append(data.main.humidity + "%")
dateEl.innerHTML = requestedCity + " " + today
forecast1.append(day1)
forecast2.append(day2)
forecast3.append(day3)
forecast4.append(day4)
forecast5.append(day5)
console.log(day1, day2, day3, day4, day5)
    })};
searchButton.addEventListener("click", search)