function firstNonRepeatingChar(str) {
  const freq = {};

  // count frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // find first char with freq = 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // if all repeating
}

console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("aabbcdd")); // "c"
console.log(firstNonRepeatingChar("aabb")); // null
