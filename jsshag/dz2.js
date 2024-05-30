// 1. Функція зведення числа у ступінь
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

alert(`Функція зведення числа у ступінь: ${power(2, 3)}`); // Виведе 8

// 2. Функція пошуку найбільшого спільного дільника
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

alert(`Функція пошуку найбільшого спільного дільника: ${gcd(20, 28)}`); // Виведе 4

// 3. Функція для пошуку максимальної цифри у числі
function maxDigit(number) {
    if (number < 10) {
        return number;
    } else {
        let remainder = number % 10;
        let rest = maxDigit(Math.floor(number / 10));
        return Math.max(remainder, rest);
    }
}

alert(`Функція для пошуку максимальної цифри у числі: ${maxDigit(93782)}`); // Виведе 9

// 4. Функція, що визначає, чи є число простим
function isPrime(number, divisor = 2) {
    if (number <= 2) {
        return (number === 2) ? true : false;
    }
    if (number % divisor === 0) {
        return (divisor === number) ? true : false;
    }
    return isPrime(number, divisor + 1);
}

alert(`Функція, що визначає, чи є число простим: ${isPrime(17)}`); // Виведе true

// 5. Функція для виведення усіх множників числа
function primeFactors(number, divisor = 2) {
    if (number < 2) return [];
    if (number % divisor === 0) {
        return [divisor].concat(primeFactors(number / divisor));
    }
    return primeFactors(number, divisor + 1);
}

alert(`Функція для виведення усіх множників числа: ${primeFactors(18)}`); // Виведе [2, 3, 3]

// 6. Функція, яка повертає число Фібоначчі за переданим порядковим номером
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

alert(`Функція, яка повертає число Фібоначчі за переданим порядковим номером: ${fibonacci(6)}`); // Виведе 8
