const apiKey = '9e7fc2f2bea4d70bdbc94caf0734c7ae';
const lat = 48.0159;
const lon = 37.8028;
const units = 'metric';

async function fetchWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);
    const data = await response.json();
    displayCurrentWeather(data);
    displayForecast(data);
}

function displayCurrentWeather(data) {
    const location = document.getElementById('location');
    const lastUpdated = document.getElementById('last-updated');
    const currentTemp = document.getElementById('current-temp');
    const currentIcon = document.getElementById('current-icon');
    const currentText = document.getElementById('current-text');
    const windSpeed = document.getElementById('wind-speed');
    const precip = document.getElementById('precip');
    const pressure = document.getElementById('pressure');

    const current = data.list[0];
    const weather = current.weather[0];

    location.textContent = `${data.city.name}, ${data.city.country}`;
    lastUpdated.textContent = `Останнє оновлення: ${new Date(current.dt_txt).toLocaleString()}`;
    currentTemp.innerHTML = `${current.main.temp} &deg;C`;
    currentIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    currentText.textContent = weather.description;
    windSpeed.textContent = `Швидкість вітру: ${current.wind.speed} км/год`;
    precip.textContent = `Опади: ${current.rain ? current.rain['3h'] : 0} мм`;
    pressure.textContent = `Тиск: ${current.main.pressure} мб`;
}

function displayForecast(data) {
    for (let i = 1; i <= 5; i++) {
        const dayElem = document.getElementById(`day${i}`);
        const forecastDay = data.list[i * 8 - 1]; // Get data for every 24 hours (8 * 3 hours)

        const date = new Date(forecastDay.dt_txt);
        const options = { weekday: 'short', day: 'numeric', month: 'numeric' };
        const dayName = date.toLocaleDateString('uk-UA', options);

        const weather = forecastDay.weather[0];

        dayElem.innerHTML = `
            <div>${dayName}</div>
            <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="Weather icon">
            <div>${forecastDay.main.temp} &deg;C</div>
        `;
    }
}

fetchWeather();
