// var userRole = "Guest";

// function greetUser(user) {
//     var name = user.name; 
//     var age = user.age;
    
//     console.log("Hello, " + name + "! You are " + age + " years old.");
// }

// var data = { name: "Alex", age: 25 };
// greetUser(data);

const userRole = "Admin"; 

const greetUser = (user = { name: "Anonymous", age: 0 }) => {
    
    const { name, age } = user;

    console.log(`Hello, ${name}! You are ${age} years old.`);
};

const baseData = { age: 25 };
const fullData = { ...baseData, name: "Alex" };

greetUser(fullData);