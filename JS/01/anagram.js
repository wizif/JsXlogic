// function anagram(str1, str2) {
//     // Remove spaces and convert to lowercase
//     const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

//     // Sort the characters of both strings and compare
//     const sortedStr1 = cleanStr1.split('').sort().join('');
//     const sortedStr2 = cleanStr2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }
// console.log(anagram("listen", "silent")); // true
// console.log(anagram("hello", "world")); // false
function anagram(str1, str2) {
    if(str1.length !== str2.length) 
        return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');

    }
    console.log(anagram("listen", "silent")); // true
    console.log(anagram("hello", "world")); // false