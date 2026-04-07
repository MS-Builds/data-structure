function sum(a, b) {
  console.log(a + b); // O(1) Time Complexity
}

function numbers(n) {
  // O(n) Time Complexity
  for (let i = 0; i < n; i++) {
    process.stdout.write(i + " ");
  }
  console.log("\n")
}

function matrix(n) {
  // O(n^2) Time Complexity
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write(i * j + " ");
    }
    console.log("\n");
  }
}
sum(1, 2);
numbers(6);
matrix(3);
