// 1. Запитати число від користувача та вивести його у квадраті
let number = parseFloat(prompt("Введіть число:"));
let square = Math.pow(number, 2);
alert(`Квадрат числа ${number} дорівнює ${square}`);

// 2. Запитати два числа від користувача та вивести їх середнє арифметичне
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let average = (num1 + num2) / 2;
alert(`Середнє арифметичне чисел ${num1} і ${num2} дорівнює ${average}`);

// 3. Запитати довжину сторони квадрата та вивести його площу
let sideLength = parseFloat(prompt("Введіть довжину сторони квадрата:"));
let area = Math.pow(sideLength, 2);
alert(`Площа квадрата зі стороною ${sideLength} дорівнює ${area}`);

// 4. Конвертувати кілометри у милі
const kmToMiles = 0.621371;
let kilometers = parseFloat(prompt("Введіть кілометри:"));
let miles = kilometers * kmToMiles;
alert(`${kilometers} км дорівнює ${miles} миль`);

// 5. Калькулятор
let numA = parseFloat(prompt("Введіть перше число:"));
let numB = parseFloat(prompt("Введіть друге число:"));
let sum = numA + numB;
let difference = numA - numB;
let product = numA * numB;
let quotient = numA / numB;
alert(`Сума: ${sum}, Різниця: ${difference}, Добуток: ${product}, Частка: ${quotient}`);

// 6. Розв'язати формулу a * x + b = 0
let a = parseFloat(prompt("Введіть значення a:"));
let b = parseFloat(prompt("Введіть значення b:"));
let x = -b / a;
alert(`Результат формули a * x + b = 0: x = ${x}`);

// 7. Визначити, скільки часу залишилося до наступного дня
let currentHour = parseInt(prompt("Введіть поточну годину:"));
let currentMinute = parseInt(prompt("Введіть поточну хвилину:"));
const hoursInDay = 24;
const minutesInHour = 60;
let remainingHours = hoursInDay - currentHour - 1;
let remainingMinutes = minutesInHour - currentMinute;
if (remainingMinutes === 60) {
    remainingMinutes = 0;
    remainingHours += 1;
}
alert(`До наступного дня залишилося ${remainingHours} годин і ${remainingMinutes} хвилин`);

// 8. Вивести другу цифру тризначного числа
let threeDigitNumber = parseInt(prompt("Введіть тризначне число:"));
let secondDigit = Math.floor(threeDigitNumber / 10) % 10;
alert(`Друга цифра у введеному числі: ${secondDigit}`);

// 9. Перемістити останню цифру п'ятизначного числа на початок
let fiveDigitNumber = parseInt(prompt("Введіть п'ятизначне число:"));
let lastDigit = fiveDigitNumber % 10;
let remainingDigits = Math.floor(fiveDigitNumber / 10);
let newNumber = parseInt(lastDigit.toString() + remainingDigits.toString());
alert(`Після переміщення останньої цифри на початок отримаємо число: ${newNumber}`);

// 10. Підрахувати зарплату працівника
let totalSales = parseFloat(prompt("Введіть загальну суму продажу за місяць:"));
let salary = 250 + 0.1 * totalSales;
alert(`Зарплата працівника складає ${salary}`);
