'use strict';
/*
//lektion 40.

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); //lägg till ett element i slutet utav en array
console.log(friends);

friends.unshift('Jesper'); //lägg till ett elemnt i början utav en Array
console.log(friends);


//Ta bort ett element
friends.pop(); //Tar bort sista elementet
console.log(friends);
const popped = friends.pop(); //.pop returenrar värdet på det element som togs bort
console.log(popped);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //visar -1, då den inte är med i arrayen

console.log(friends.includes('Steven'));//returnerar true, då den finns med
console.log(friends.includes('Bob'));//returnerar false, då den inte är med

//.include kan användas med fördel i if satser eller dylikt.
if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

*/

//Coding chalange #2

//skapa variablerna
let tip = []; //en array för dricksen
let totalCalc = []; //en array för dricksen + pengarna
let calculatedTip;
const bills = [125, 555, 44]; //en array för för sedlarna

//en funktion för att räkna ut dricksen
const calcTip1 = function calcTip1(bill) {
  if (bill >= 50 && bill <= 300) {
    calculatedTip = bill * 0.15;
    tip.push(calculatedTip);
  } else {
    calculatedTip = bill * 0.2;
    tip.push(calculatedTip);
  }
};

//en forloop för att beräkna dricksen
for (let i = 0; i < bills.length; i++) {
  calcTip1(bills[i]);
}

//en forloop för att räkna ihop sedlarna och dricksen
for (let i = 0; i < bills.length; i++) {
  totalCalc.push(bills[i] + tip[i]);
}

//skriver ut arraysen för att kontrollera så att det blev korrekt.
console.log(bills);
console.log(tip);
console.log(totalCalc);
