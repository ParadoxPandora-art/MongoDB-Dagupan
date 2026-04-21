const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good morning!";
} else if (hour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

console.log("--- Conditionals Result ---");
console.log(greeting);

console.log("\n--- Loops Result (Counting to 5) ---");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

console.log("\n--- Functions Result ---");

function calculateArea(length, width) {
    return length * width;
}

const roomArea = calculateArea(10, 15);
const gardenArea = calculateArea(5, 8);

console.log(`The room area is: ${roomArea} sq units.`);
console.log(`The garden area is: ${gardenArea} sq units.`);