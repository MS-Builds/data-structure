/*
# A Map in JavaScript is a collection of key-value pairs where:

- Keys can be of any type (numbers, strings, objects, etc.).
- Values can be of any type.
- The insertion order of elements is preserved.
*/

const map = new Map();

// Operation
map.set("name", "max");
map.set("age", 21);
map.set("isActice", true);

console.log(map);
console.log(map.get("name"));

console.log("Before deletion:", map);
map.delete("isActive");
console.log("After deletion:", map);

console.log("Size:", map.size);

// Check if a key exists
console.log("Has name ? ", map.has("name") ? "exist" : "not exist");

// Traverse
map.forEach((value, key) => console.log(`[ ${key} ] => ${value}`));

// Initial Value
const initialMap = new Map([
  ["name", "lewis"],
  ["age", 22],
  ["isActive", true],
]);
console.log(initialMap);
