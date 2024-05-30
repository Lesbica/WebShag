const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');
const nextButton = document.getElementById('next-button');

let currentLight = 0;

function switchLight() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');

    if (currentLight === 0) {
        redLight.classList.add('active');
        currentLight = 1;
    } else if (currentLight === 1) {
        yellowLight.classList.add('active');
        currentLight = 2;
    } else {
        greenLight.classList.add('active');
        currentLight = 0;
    }
}

nextButton.addEventListener('click', switchLight);