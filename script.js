//select the html element
const data = document.querySelector("#data");
const weatherIcon = document.querySelector("#icon");
const displayCityName = document.querySelector("#displayCityName");
const temperature = document.querySelector("#q1temperature");
//default cityname to display on page
let cityName = "London"

//get data from form in html
const textInput = document.querySelector("#cityName")
const postForm =  document.querySelector('#postForm');
postForm.addEventListener('submit', event => {
  event.preventDefault();

  //change the cityname variable with the user submitted city name
  cityName = textInput.value
  //make a query to weather app with the input city name
  fetchFromWeatherApp(cityName)
});





//fetch options (init)
const myInit = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

//function for getting data from weather app
async function fetchFromWeatherApp(cityNameQuery){
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d7d59f3ee4bf4019a8f195722230407&q=${cityNameQuery}`, myInit)
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        //turn the responese into json
        let json = await response.json();

        //append the city name to the page
        displayCityName.innerHTML = json.location.name
        //append the temperature to the page
        temperature.innerHTML = json.current.temp_c + " °C"
        //append the weather text to the page
        data.innerHTML = json.current.condition.text
        //append the icon to the page
        weatherIcon.src = "http:" + json.current.condition.icon 
      } 
      
      catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
}
  

fetchFromWeatherApp(cityName)