const array = [1, 2, 3, 4, 5];

// Operation
array.push(6); // Insert an element
array.pop(); // Remove last element[last]
array.splice(5, 0, 7, 8, 9); // Insert at given position
console.log(array);

const key = 1;

// Linear-search
const found = array.includes(key);
console.log(found ? "Found" : "Not found");

// Binary-search
function binarySearch(array, key) {
  const sorted = array.sort((a, b) => a - b); // Sorting
  let start = 0;
  let end = sorted.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (sorted[mid] === key) {
      return mid;
    } else if (sorted[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
const index = binarySearch(array, key);
if (index >= 0) {
  console.log("Element found at index", index);
} else {
  console.log("Element not found");
}
