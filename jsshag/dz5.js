//Завдання 1
class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    print(text) {
        let output = '';
        for (let char of text) {
            if (this.inkAmount <= 0) {
                console.log("Not enough ink to continue printing.");
                break;
            }
            if (char !== ' ') {
                this.inkAmount -= 0.5;
            }
            output += char;
        }
        console.log(`%c${output}`, `color: ${this.color}`);
    }
}

class RefillableMarker extends Marker {
    refill(inkAmount) {
        this.inkAmount = Math.min(100, this.inkAmount + inkAmount);
        console.log(`Marker refilled. Current ink amount: ${this.inkAmount}%`);
    }
}

const marker = new Marker('blue', 10);
marker.print("Hello, this is a test string!");

const refillableMarker = new RefillableMarker('red', 5);
refillableMarker.print("This is another test string!");
refillableMarker.refill(20);
refillableMarker.print("Printing after refill.");

//Завдання 2
class ExtendedDate extends Date {
    getDateText() {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const day = this.getDate();
        const month = monthNames[this.getMonth()];
        return `${day} ${month}`;
    }

    isFuture() {
        const now = new Date();
        return this >= now;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDate = new Date(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

// Демонстрація роботи
const extendedDate = new ExtendedDate(2023, 9, 15);

console.log(extendedDate.getDateText());
console.log("Is future date:", extendedDate.isFuture());
console.log("Is leap year:", extendedDate.isLeapYear());
console.log("Next date:", extendedDate.getNextDate().toDateString());
