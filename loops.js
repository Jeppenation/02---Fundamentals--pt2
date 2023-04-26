'use strict';

// const Jesper1 = ['Jesper', 31, 'KT'];
// console.log(Jesper1);

// //gå igenom en array
// // for (let i = 0; i <= Jesper1.length; i++) {
// //     console.log(Jesper1[i]);
// // }

// //gå igenom en array baklänges
// for (let i = Jesper1.length - 1; i >= 0; i--) {
//   console.log(Jesper1[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`---- Starting exercise ${exercise} ----`);

//   for (let rep = 6; rep >= 1; rep--) {
//     console.log(`rep: ${rep}: 🏋️‍♂️`);
//   }
// }

const arr1 = [1, 8, 9, 2, 3];
const arr2 = [4, 0, 10, 14, 7];
const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i]);
  arr3.push(arr2[i]);
}
// console.log(arr3);

//nedan så finner man en bubbelsort.
let swapped = true;
let temp = 0;

while (swapped) {
  swapped = false;

  for (let i = 0; i < arr3.length; i++) {
    //ändra riktning på "<" i if-loopen för att antingen sorta fallande eller stigande
    if (arr3[i] < arr3[i + 1]) {
      temp = arr3[i];
      arr3[i] = arr3[i + 1];
      arr3[i + 1] = temp;
      swapped = true;
      // console.log(arr3[i]);
    }
  }
}
console.log(arr3);

const calcAge = birthYear => 2023 - birthYear;
