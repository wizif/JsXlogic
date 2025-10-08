function findMissingNumber(arr) {
  const n = arr.length + 1; // since one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

// Example
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
