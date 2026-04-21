// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

async function test() {
  console.log("1");        
  await Promise.resolve();  
  console.log("2");        
}

console.log("3");       
test();                   
console.log("4");        