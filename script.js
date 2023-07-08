//select the html element
const data = document.querySelector("#data");


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
      } 
      
      catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
}
  

fetchFromWeatherApp()