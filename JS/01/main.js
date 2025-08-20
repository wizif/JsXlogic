// //map
// const nums=[1,2,3,4]
// const neww=nums.map((num,index,arr)=>num*2);
// console.log(neww);

// const numbers = [1, 2, 3, 4];

// Using our custom map
const squared = numbers.myMap((num, index, arr) => {
  return num * num;
});

console.log(squared); // [1, 4, 9, 16]
