const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  
  return [...duplicates];
}

function renderList(containerId, count) {
  const list = document.getElementById(containerId);
  if (!list) return;

  let itemsHtml = "";

  for (let i = 0; i < count; i++) {
    itemsHtml += `<li>Item ${i}</li>`;
  }

  list.innerHTML = itemsHtml;
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log("Even Numbers:", getEvenNumbers(numbers)); 

console.log("Duplicates Found:", findDuplicates(numbers)); 

renderList("list", 100);