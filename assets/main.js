var dateEl = document.getElementById("cityDateEl")
var searchButton = document.getElementById("searchButton")
var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={8e70090a850bcd7ae5f862ff86cd1fcf}"
console.log(dateEl)
dateEl.innerHTML = "City and " + dayjs().format('MMM, DD, YYYY')

searchButton.addEventListener("click", search)
function search() {

fetch(requestUrl)
    .then(function (response) {
    return response.json();
    })}