// Завдання 1
function analyzeString(str) {
    let letters = str.match(/[a-zA-Z]/g);
    let digits = str.match(/[0-9]/g);
    let others = str.match(/[^a-zA-Z0-9]/g);

    console.log("Кількість літер:", letters ? letters.length : 0);
    console.log("Кількість цифр:", digits ? digits.length : 0);
    console.log("Кількість інших знаків:", others ? others.length : 0);
}

console.log("Завдання 1:");
analyzeString("Hello World! 123");

// Завдання 2
function numberToWords(num) {
    const units = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
    const teens = ["десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    const tens = ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];

    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    return tens[Math.floor(num / 10)] + " " + units[num % 10];
}

console.log("Завдання 2:");
console.log("35 -", numberToWords(35));
console.log("89 -", numberToWords(89));
console.log("12 -", numberToWords(12));

// Завдання 3
function swapCaseAndDigits(str) {
    return str.replace(/[a-zA-Z]/g, function(match) {
        return match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase();
    }).replace(/[0-9]/g, '_');
}

console.log("Завдання 3:");
console.log(swapCaseAndDigits("Hello World 123"));

// Завдання 4
function camelCase(str) {
    return str.replace(/-([a-z])/g, function(match, p1) {
        return p1.toUpperCase();
    });
}

console.log("Завдання 4:");
console.log(camelCase("font-size")); // fontSize
console.log(camelCase("background-color")); // backgroundColor
console.log(camelCase("text-align")); // textAlign

// Завдання 5
function acronym(phrase) {
    return phrase.split(' ').map(word => word[0].toUpperCase()).join('');
}

console.log("Завдання 5:");
console.log(acronym("cascading style sheets")); // CSS
console.log(acronym("об'єктно-орієнтоване програмування")); // ООП

// Завдання 6
function concatenateStrings(...args) {
    return args.join('');
}

console.log("Завдання 6:");
console.log(concatenateStrings("Hello", " ", "World", "!"));

// Завдання 7
function calculator(expression) {
    return eval(expression);
}

console.log("Завдання 7:");
console.log(calculator("10 + 5")); // 15
console.log(calculator("10 * 5")); // 50

// Завдання 8
function parseURL(url) {
    const parsedURL = new URL(url);
    return `протокол: ${parsedURL.protocol.replace(':', '')}, домен: ${parsedURL.hostname}, шлях: ${parsedURL.pathname}`;
}

console.log("Завдання 8:");
console.log(parseURL("https://itstep.org/ua/about"));

// Завдання 9
function splitStringByDelimiter(str, delimiter) {
    const result = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            result.push(temp);
            temp = '';
        } else {
            temp += str[i];
        }
    }
    result.push(temp);
    return result;
}

console.log("Завдання 9:");
console.log(splitStringByDelimiter("10/08/2020", "/"));

// Завдання 10
function print(template, ...args) {
    return template.replace(/%(\d+)/g, function(match, p1) {
        return args[p1 - 1];
    });
}

console.log("Завдання 10:");
console.log(print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020)); // Today is Monday 10.8.2020
