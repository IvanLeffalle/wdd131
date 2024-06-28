// select the DOM elements for output

const year = document.querySelector("#year");


// use the date object
const currentYear = new Date().getFullYear();

year.innerHTML = currentYear;


// Select the last modified element
const lastModified = document.querySelector("#last-modified");

// Get the last modified date of the document
const modifiedDate = new Date(document.lastModified);

// Format the last modified date (optional, for better readability)
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const formattedDate = modifiedDate.toLocaleDateString('en-US', options);

// Set the last modified date to the span element
lastModified.innerHTML = formattedDate;


//here

function calculateWindChill(temperature, windSpeed,) {
    return (temperature <= 10 && windSpeed > 4.8) ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2) : "N/A";

}


// Static values for temperature and wind speed (I will replace them with dynamic values later)
const temperatureCelsius = 5; // Example temperature in Celsius
const windSpeedKmh = 10;      // Example wind speed in km/h
//define variable for wind chill
const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh,);
// Display wind chill in the "Weather" section on page load
document.getElementById('weather-section').innerHTML =
    ` <div class="data-content">
                <ul class="labels">
                    <li>Temperature:</li>
                    <li>Conditions:</li>
                    <li>Wind:</li>
                    <li>Wind Chill:</li>
                </ul>
                <ul class="values">
                    <li>${temperatureCelsius} °C</li>
                    <li>Sunny</li>
                    <li>${windSpeedKmh} km/h</li>
                    <li>${windChill}</li>
                </ul>
            </div>`;
