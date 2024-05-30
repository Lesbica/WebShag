function updateNearbyPlaces(cities) {
    const nearbyPlaces = document.getElementById('nearby-places');
    let nearbyHTML = '<h2>Nearby Places</h2>';
    nearbyHTML += '<div class="weather-row">';
    cities.forEach(city => {
        nearbyHTML += `
            <div class="weather-item">
                <p>${city.name}</p>
                <p><img src="http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="weather icon"></p>
                <p>${city.main.temp}°C</p>
            </div>
        `;
    });
    nearbyHTML += '</div>';
    nearbyPlaces.innerHTML = nearbyHTML;
}

function updateTodayTab(data) {
    const currentWeather = document.getElementById('current-weather');

    currentWeather.innerHTML = `
        <h2>Current Weather</h2>
        <div class="weather-row">
            <div class="weather-item">
                <h2>${data.name}</h2>
                <p>${new Date().toLocaleDateString()}</p>
                <p><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon"></p>
                <p>${data.weather[0].description}</p>
                <p>${data.main.temp}°C</p>
                <p>Real Feel: ${data.main.feels_like}°C</p>
                <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                <p>Day Duration: ${getDayDuration(data.sys.sunrise, data.sys.sunset)}</p>
            </div>
        </div>
    `;

    document.getElementById('today').classList.add('active');
}

function updateHourlyForecast(hourlyData) {
    const hourlyForecast = document.getElementById('hourly-forecast');
    let hourlyHTML = '<h2>Hourly Forecast</h2>';
    hourlyHTML += '<div class="weather-row">';
    hourlyData.slice(0, 6).forEach(hour => {
        hourlyHTML += `
            <div class="weather-item">
                <p>${new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p><img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="weather icon"></p>
                <p>${hour.weather[0].description}</p>
                <p>${hour.main.temp}°C</p>
                <p>Real Feel: ${hour.main.feels_like}°C</p>
                <p>Wind: ${hour.wind.speed} km/h</p>
            </div>
        `;
    });
    hourlyHTML += '</div>';
    hourlyForecast.innerHTML = hourlyHTML;
}

function updateFiveDayForecast(fiveDayData) {
    const fiveDayForecast = document.getElementById('five-day-forecast');
    let fiveDayHTML = '<h2>5-day Forecast</h2>';
    fiveDayHTML += '<div class="weather-row">';
    const dailyData = fiveDayData.filter(entry => entry.dt_txt.includes('12:00:00'));

    dailyData.forEach(day => {
        fiveDayHTML += `
            <div class="weather-item" onclick="selectDay(${day.dt})">
                <p>${new Date(day.dt * 1000).toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' })}</p>
                <p><img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon"></p>
                <p>${day.main.temp}°C</p>
                <p>${day.weather[0].description}</p>
            </div>
        `;
    });
    fiveDayHTML += '</div>';
    fiveDayForecast.innerHTML = fiveDayHTML;
    
    if (dailyData.length > 0) {
        updateSelectedDayForecast(dailyData[0].dt);
    }
}

function updateSelectedDayForecast(dayTimestamp) {
    const selectedDayForecast = document.getElementById('selected-day-forecast');
    const fiveDayData = JSON.parse(localStorage.getItem('fiveDayData')) || [];
    const selectedDayData = fiveDayData.filter(entry => new Date(entry.dt * 1000).toLocaleDateString() === new Date(dayTimestamp * 1000).toLocaleDateString());
    let selectedDayHTML = `<h2>Forecast for ${new Date(dayTimestamp * 1000).toLocaleDateString()}</h2>`;
    selectedDayHTML += '<div class="weather-row">';

    selectedDayData.forEach(hour => {
        selectedDayHTML += `
            <div class="weather-item">
                <p>${new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p><img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="weather icon"></p>
                <p>${hour.weather[0].description}</p>
                <p>${hour.main.temp}°C</p>
                <p>Real Feel: ${hour.main.feels_like}°C</p>
                <p>Wind: ${hour.wind.speed} km/h</p>
            </div>
        `;
    });
    selectedDayHTML += '</div>';
    selectedDayForecast.innerHTML = selectedDayHTML;
}

function selectDay(dayTimestamp) {
    updateSelectedDayForecast(dayTimestamp);
}

function getDayDuration(sunrise, sunset) {
    const duration = new Date((sunset - sunrise) * 1000);
    return `${duration.getUTCHours()} hr ${duration.getUTCMinutes()} min`;
}

function showError(city) {
    const errorSection = document.getElementById('error');
    errorSection.innerHTML = `
        <h2>404</h2>
        <p>${city} could not be found. Please enter a different location.</p>
    `;
    document.getElementById('today').classList.remove('active');
    document.getElementById('forecast').classList.remove('active');
    errorSection.classList.add('active');
}