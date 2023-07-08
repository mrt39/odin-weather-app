//select the html element
const data = document.querySelector("#data");
const weatherIcon = document.querySelector("#icon");
let cityName = "London"

//get data from form in html
const textInput = document.querySelector("#cityName")
const postForm =  document.querySelector('#postForm');
postForm.addEventListener('submit', event => {
  event.preventDefault();

  //change the cityname variable with the user submitted city name
  cityName = textInput.value
  console.log(cityName)
});





//fetch options (init)
const myInit = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

//function for getting data from weather app
async function fetchFromWeatherApp(){
    try {
        let response = await fetch('https://api.weatherapi.com/v1/current.json?key=d7d59f3ee4bf4019a8f195722230407&q=london', myInit)
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        //turn the responese into json
        let json = await response.json();
        //append it to the page
        data.innerHTML = json.current.condition.text
      //append the icon to the page
        weatherIcon.src = "http:" + json.current.condition.icon 
        console.log(json.current.condition.icon)
      } 
      
      catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
}
  

fetchFromWeatherApp()