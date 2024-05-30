document.addEventListener('DOMContentLoaded', () => {
    const colorNameInput = document.getElementById('colorName');
    const colorTypeInput = document.getElementById('colorType');
    const colorCodeInput = document.getElementById('colorCode');
    const saveColorButton = document.getElementById('saveColorButton');
    const colorsList = document.getElementById('colorsList');
    const colorNameError = document.getElementById('colorNameError');
    const colorCodeError = document.getElementById('colorCodeError');

    const colors = loadColorsFromCookies();

    function saveColor() {
        const name = colorNameInput.value.trim();
        const type = colorTypeInput.value;
        const code = colorCodeInput.value.trim();

        if (!validateForm(name, type, code)) {
            return;
        }

        const color = { name, type, code };
        colors.push(color);
        saveColorsToCookies(colors);
        renderColors(colors);
        clearForm();
    }

    function validateForm(name, type, code) {
        let isValid = true;

        if (!name.match(/^[a-zA-Z]+$/)) {
            colorNameError.textContent = 'Color can only contain letters';
            isValid = false;
        } else if (colors.some(color => color.name.toLowerCase() === name.toLowerCase())) {
            colorNameError.textContent = 'Color name must be unique';
            isValid = false;
        } else {
            colorNameError.textContent = '';
        }

        if (type === 'RGB' && !code.match(/^(\d{1,3}), (\d{1,3}), (\d{1,3})$/)) {
            colorCodeError.textContent = 'RGB code must match the pattern [0-255], [0-255], [0-255]';
            isValid = false;
        } else if (type === 'RGBA' && !code.match(/^(\d{1,3}), (\d{1,3}), (\d{1,3}), (\d(\.\d+)?|1(\.0+)?)$/)) {
            colorCodeError.textContent = 'RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]';
            isValid = false;
        } else if (type === 'HEX' && !code.match(/^#[0-9A-Fa-f]{6}$/)) {
            colorCodeError.textContent = 'HEX code must match the pattern #RRGGBB';
            isValid = false;
        } else {
            colorCodeError.textContent = '';
        }

        return isValid;
    }

    function renderColors(colors) {
        colorsList.innerHTML = '';
        colors.forEach(color => {
            const colorCard = document.createElement('div');
            colorCard.className = 'color-card';
            colorCard.style.backgroundColor = color.code;

            const colorName = document.createElement('span');
            colorName.textContent = color.name.toUpperCase();

            const colorType = document.createElement('span');
            colorType.textContent = color.type;

            const colorCode = document.createElement('span');
            colorCode.textContent = color.code;

            colorCard.appendChild(colorName);
            colorCard.appendChild(colorType);
            colorCard.appendChild(colorCode);

            colorsList.appendChild(colorCard);
        });
    }

    function saveColorsToCookies(colors) {
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 3);
        document.cookie = `colors=${JSON.stringify(colors)}; expires=${expiryDate.toUTCString()}; path=/`;
    }

    function loadColorsFromCookies() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.split('=').map(c => c.trim());
            if (name === 'colors') {
                return JSON.parse(decodeURIComponent(value));
            }
        }
        return [];
    }

    function clearForm() {
        colorNameInput.value = '';
        colorTypeInput.value = 'RGB';
        colorCodeInput.value = '';
        colorNameError.textContent = '';
        colorCodeError.textContent = '';
    }

    saveColorButton.addEventListener('click', saveColor);
    renderColors(colors);
});