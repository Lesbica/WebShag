const apiKey = '9e7fc2f2bea4d70bdbc94caf0734c7ae';
const defaultCity = 'Kyiv';

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            tabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });

    searchBtn.addEventListener('click', () => {
        const city = searchInput.value;
        if (city) {
            fetchWeatherData(city);
        }
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                fetchWeatherDataByCoords(latitude, longitude);
            },
            error => {
                console.error('Geolocation error:', error);
                fetchWeatherData(defaultCity);
            }
        );
    } else {
        fetchWeatherData(defaultCity);
    }
});
