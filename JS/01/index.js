// // function reverseString(str) {
// //   let reversed = "";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     reversed = reversed + str[i];
// //   }
// //   return reversed;
// // }
// // console.log(reverseString("hello"));
// // console.log("hello");
// console.log(reverse("new"))

function reverseString(str){
    let reversed='';
    for(let char of str){
        reversed=char+reversed;
    }
    return reversed;
}
console.log(reverseString("world"));