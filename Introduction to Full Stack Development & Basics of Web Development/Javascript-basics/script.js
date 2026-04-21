var legacyVar = "I am a var (function-scoped)"; 
let modernLet = "I am a let (block-scoped)";
const fixedConst = "I cannot be reassigned";

console.log("--- Variable Declarations ---");
console.log(legacyVar);
console.log(modernLet);
console.log(fixedConst);

let age = 25;                        
let userName = "Alex";               
let isStudent = true;                
let hobbies = ["Coding", "Gaming"];  
let userProfile = {                  
    id: 1,
    status: "Active"
};

console.log("\n--- Data Types & typeof ---");
console.log("Value:", age, "| Type:", typeof age);
console.log("Value:", userName, "| Type:", typeof userName);
console.log("Value:", isStudent, "| Type:", typeof isStudent);
console.log("Value:", hobbies, "| Type:", typeof hobbies);
console.log("Value:", userProfile, "| Type:", typeof userProfile);

let x = 10;
let y = 5;

console.log("\n--- Arithmetic Operations ---");
console.log(`${x} + ${y} =`, x + y);
console.log(`${x} - ${y} =`, x - y);
console.log(`${x} * ${y} =`, x * y); 
console.log(`${x} / ${y} =`, x / y); 

let score = 85;
let passingGrade = 70;

console.log("\n--- Comparison & Logical ---");
let isPassing = score > passingGrade; 
console.log("Is passing?", isPassing);

let isHonors = score > 80 && isPassing;
console.log("Is honors student?", isHonors);

let extremeScore = score === 100 || score < 10;
console.log("Is score an extreme value?", extremeScore);