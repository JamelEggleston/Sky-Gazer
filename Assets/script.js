const currentDate = moment();

function init() {
    fetchLatLon("Raleigh");
}

// Fetch all norad-IDs
    // Render to page

function getNorad() {
        // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = "https://api.spectator.earth/satellite";
      
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.features);
      
            //   loop to cycle through the data to pull out name and Nordad_ID of sattelite.
      
            for (var i = 0; i < data.features.length; i++) {
              // pushing sat name and norad_id into emtpy array.
              satelliteName.push(data.features[i].properties.name);
              norad.push(data.features[i].properties.norad_id);
            }
          });
      }
      getNorad();
      // empty arrays for the satellite name and norad_id to be pushed into.
      var satelliteName = [];
      var norad = [];
      
      console.log(satelliteName);
      console.log(norad);
      

    // Add event listener to each norad-ID element
        // Get selected norad-ID

// Get user input: city, norad-ID
    // Convert user input (city) to lat/lon
function fetchLatLon(cityInput) {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=c8aa884e6f28d929f55e9ba1856815bd")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;

            fetchWeather(lat, lon);
        })
}

    // Fetch satellite data using lat/lon, norad-ID
        // Render next X satellites to page as buttons

        // Add event listeners to each satellite button
            // Fetch weather data using lat/lon and date
function fetchWeather(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=c8aa884e6f28d929f55e9ba1856815bd")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Get weather icon
            console.log(data);
        })
}

                // Render weather icon

    // Check if all conditions (weather, sun illumination) are favorable for viewing
        // If favorable,
            // Render "visible"

        // If not favorable,
            // Render "not visible"

init();