function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            updateTodayTab(data);
            fetchHourlyForecast(city);
            fetchFiveDayForecast(city);
            fetchNearbyPlaces(data.coord.lat, data.coord.lon);
            searchInput.value = city;
        })
        .catch(error => showError(city));
}

function fetchWeatherDataByCoords(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            updateTodayTab(data);
            fetchHourlyForecast(data.name);
            fetchFiveDayForecast(data.name);
            fetchNearbyPlaces(lat, lon);
            searchInput.value = data.name;
        })
        .catch(error => showError('your location'));
}

function fetchHourlyForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => updateHourlyForecast(data.list))
        .catch(error => console.error('Error fetching hourly forecast:', error));
}

function fetchFiveDayForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            updateFiveDayForecast(data.list);
            localStorage.setItem('fiveDayData', JSON.stringify(data.list));
        })
        .catch(error => console.error('Error fetching five day forecast:', error));
}

function fetchNearbyPlaces(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            updateNearbyPlaces(data.list);
        })
        .catch(error => console.log('Error fetching nearby places', error));
}