const s1 = new Set(); // Set don't allow duplicate element
s1.add(1);
s1.add(2);
s1.add(2);
s1.add(3);
console.log(s1); // 1 2 3

const s2 = new Set("fooooooooood");
console.log(s2);

// Operation
console.log(s1.delete(4)); // true or false
s1.clear(); // Remove all elements
console.log(s1);
