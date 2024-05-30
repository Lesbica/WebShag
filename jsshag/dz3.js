// Завдання 1
console.log("Завдання 1");
let shoppingList = [
    { name: "Молоко", quantity: 1, bought: false },
    { name: "Хліб", quantity: 2, bought: false },
    { name: "Яйця", quantity: 12, bought: true }
];

function displayShoppingList(list) {
    let sortedList = list.sort((a, b) => a.bought - b.bought);
    sortedList.forEach(item => {
        console.log(`${item.name}: ${item.quantity} (${item.bought ? 'Куплено' : 'Не куплено'})`);
    });
}

function addPurchase(list, item) {
    let index = list.findIndex(element => element.name === item.name);
    if (index !== -1) {
        list[index].quantity += item.quantity;
    } else {
        list.push(item);
    }
}

function buyProduct(list, productName) {
    let index = list.findIndex(item => item.name === productName);
    if (index !== -1) {
        list[index].bought = true;
    }
}

console.log("Початковий список покупок:");
displayShoppingList(shoppingList);
addPurchase(shoppingList, { name: "Молоко", quantity: 2, bought: false });
console.log("Після додавання молока:");
displayShoppingList(shoppingList);
buyProduct(shoppingList, "Хліб");
console.log("Після купівлі хліба:");
displayShoppingList(shoppingList);

// Завдання 2
console.log("Завдання 2");
let receipt = [
    { name: "Яблука", quantity: 3, price: 2 },
    { name: "Банани", quantity: 1, price: 1.5 },
    { name: "Помідори", quantity: 2, price: 3 }
];

function displayReceipt(receipt) {
    receipt.forEach(item => {
        console.log(`${item.name}: ${item.quantity} x ${item.price}$ = ${item.quantity * item.price}$`);
    });
}

function calculateTotal(receipt) {
    return receipt.reduce((total, item) => total + (item.quantity * item.price), 0);
}

function findMostExpensivePurchase(receipt) {
    let maxPrice = Math.max(...receipt.map(item => item.price));
    return receipt.find(item => item.price === maxPrice);
}

function calculateAveragePrice(receipt) {
    let totalQuantity = receipt.reduce((total, item) => total + item.quantity, 0);
    let totalPrice = receipt.reduce((total, item) => total + (item.quantity * item.price), 0);
    return totalPrice / totalQuantity;
}

console.log("Чек:");
displayReceipt(receipt);
console.log("Загальна сума покупки:", calculateTotal(receipt));
console.log("Найдорожча покупка:", findMostExpensivePurchase(receipt));
console.log("Середня вартість одного товару:", calculateAveragePrice(receipt));

// Завдання 3
console.log("Завдання 3");
let styles = [
    { name: "color", value: "red" },
    { name: "font-size", value: "16px" },
    { name: "text-align", value: "center" }
];

function displayTextWithStyles(styles, text) {
    let styleString = '';
    styles.forEach(style => {
        styleString += `${style.name}: ${style.value}; `;
    });
    console.log(`<p style="${styleString}">${text}</p>`);
}

displayTextWithStyles(styles, "Текст з CSS-стилями");

// Завдання 4
console.log("Завдання 4");
let auditoriums = [
    { name: "101", capacity: 20, faculty: "Фізика" },
    { name: "201", capacity: 15, faculty: "Хімія" },
    { name: "301", capacity: 25, faculty: "Біологія" }
];

function displayAllAuditoriums(auditoriums) {
    auditoriums.forEach(auditorium => {
        console.log(`${auditorium.name}, ${auditorium.capacity} місць, факультет: ${auditorium.faculty}`);
    });
}

function displayAuditoriumsByFaculty(auditoriums, faculty) {
    let filteredAuditoriums = auditoriums.filter(auditorium => auditorium.faculty === faculty);
    filteredAuditoriums.forEach(auditorium => {
        console.log(`${auditorium.name}, ${auditorium.capacity} місць`);
    });
}

function displaySuitableAuditoriumsForGroup(auditoriums, group) {
    let suitableAuditoriums = auditoriums.filter(auditorium => auditorium.capacity >= group.students && auditorium.faculty === group.faculty);
    suitableAuditoriums.forEach(auditorium => {
        console.log(`${auditorium.name}, ${auditorium.capacity} місць`);
    });
}

function sortAuditoriumsByCapacity(auditoriums) {
    return auditoriums.sort((a, b) => a.capacity - b.capacity);
}

function sortAuditoriumsByName(auditoriums) {
    return auditoriums.sort((a, b) => a.name.localeCompare(b.name));
}

console.log("Усі аудиторії:");
displayAllAuditoriums(auditoriums);
console.log("Аудиторії для факультету Фізика:");
displayAuditoriumsByFaculty(auditoriums, "Фізика");

let group = { name: "Група 101", students: 18, faculty: "Фізика" };
console.log("Аудиторії для групи:", group.name);
displaySuitableAuditoriumsForGroup(auditoriums, group);

console.log("Сортування аудиторій за кількістю місць:");
console.log(sortAuditoriumsByCapacity(auditoriums));

console.log("Сортування аудиторій за назвою:");
console.log(sortAuditoriumsByName(auditoriums));
