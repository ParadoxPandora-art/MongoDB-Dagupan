let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [10, 20, 30, 40];

fruits.push("Dragonfruit");     
fruits.unshift("Apricot");    
fruits.pop();                  
fruits.shift();                

console.log("Final Fruits Array:", fruits);
console.log("Array Length:", fruits.length);

let student = {
    name: "Alex",
    age: 21,
    major: "Computer Science",
    isGraduated: false
};

student.age = 22; 

student["major"] = "Software Engineering";

console.log("Student Object:", student);

let users = [
    { id: 1, name: "Sara", score: 85 },
    { id: 2, name: "Mike", score: 92 },
    { id: 3, name: "Leo", score: 78 }
];

users.forEach(user => console.log(`User: ${user.name}`));

const highScorers = users.filter(user => user.score > 80);

const userNames = users.map(user => user.name);

console.log("High Scorers:", highScorers);
console.log("User Names:", userNames);