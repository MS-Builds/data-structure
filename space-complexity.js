function arraySum(array) {
  let sum = 0; // O(1) space complexity
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function arraySquare(array) {
  const square = []; // 0(n) Space complexity
  for (let i = 0; i < array.length; i++) {
    square.push(array[i] * array[i]);
  }
  return square; // O(n)
}

function squareMatrix(n) {
  const matrix = []; 
  for (let i = 0; i < n; i++) {
    matrix[i] = []; // O(n^2) Space Complexity
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix; // O(n^2)
}

const array = [1, 2, 3, 4, 5, 6];
console.log(arraySum(array));
console.log(arraySquare(array));
console.log(squareMatrix(6))
