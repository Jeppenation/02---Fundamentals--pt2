//arrays är en samling variabler
'use strict';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]); //skriver ut vilket värd som är på första platsen i en array
console.log(friends[2]);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends.length); //skriver ut hur många element det är i en array

console.log(friends.length - 1); //skriver ut platsen för elementen. Då arrays är nollbaserade så är det 2 platser.

friends[2] = 'Jay'; //ändrar från Steven till Jay
console.log(friends);

const firstName = 'Jesper';
const jesper = [firstName, 'Kallioniemi', 2023 - 1992, friends]; //man kan ha variabler i en array, samt andra arrays!

console.log(jesper);

//Man kan använda arrayer för funktioner, se nedan: 
const countAge = function (birthYear) {
    return 2023 - birthYear;
}

const age1 = countAge(years[0]);
const age2 = countAge(years[1]);
const age3 = countAge(years[2]);

console.log(age1, age2, age3);