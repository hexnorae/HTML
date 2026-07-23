async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "37ad5e940d5247fb91044537262307";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes`;

  const response = await fetch(url);
  const data = await response.json();

  //  background based on day/night
  if (data.current.is_day === 1) {
    document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)"; // day
  } else {
    document.body.style.background = "linear-gradient(to right, #141E30, #243B55)"; // night
  }

  // Current weather + timings
  let html = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <img src="https:${data.current.condition.icon}" alt="Weather icon">
    <p>🕒 Local Time: ${data.location.localtime}</p>
    <p>🌡 Temperature: ${data.current.temp_c} °C</p>
    <p>☁ Condition: ${data.current.condition.text}</p>
    <p>💨 Wind Speed: ${data.current.wind_kph} kph</p>
    <p>🌞 Sunrise: ${data.forecast.forecastday[0].astro.sunrise}</p>
    <p>🌙 Sunset: ${data.forecast.forecastday[0].astro.sunset}</p>
  `;

  document.getElementById("result").innerHTML = html;
}

function getLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = "37ad5e940d5247fb91044537262307";
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1&aqi=yes`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.current.is_day === 1) {
        document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
      } else {
        document.body.style.background = "linear-gradient(to right, #141E30, #243B55)";
      }

      let html = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <img src="https:${data.current.condition.icon}" alt="Weather icon">
        <p>🕒 Local Time: ${data.location.localtime}</p>
        <p>🌡️ Temperature: ${data.current.temp_c} °C</p>
        <p>☁ Condition: ${data.current.condition.text}</p>
        <p>🌞 Sunrise: ${data.forecast.forecastday[0].astro.sunrise}</p>
        <p>🌙 Sunset: ${data.forecast.forecastday[0].astro.sunset}</p>
      ;

      document.getElementById("result").innerHTML = html;
    });
  } else {
    alert("Geolocation not supported by your browser.");
  }
}
