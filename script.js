'use strict';

//detta nedan visar att man ska använda 'strict'
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive! :D')


//const interface = 'Audio';
//const private = 432
const if = 23; 

function logger() {
    console.log('My name is Jesper');
};

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return (juice);
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

let birthYear = 1992;

function howOld(birthYear1) {
    return 2023 - birthYear1;
}


console.log(howOld(1990));

const countAge = function (birthYear) {
    return 2023 - birthYear;
}

const age1 = countAge(1992);
console.log(age1);

//Arrow Functions
const countAge2 = birthYear => 2023 - birthYear;

const age3 = countAge2(1992);
console.log(age3);



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1992, "Jesper"));
console.log(yearsUntilRetirement(1969, "Bob"));
//Arrowfunktioner är jätte smididga för lättare funktioner. Men inte alltid
*/


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples pieces and ${orangesPieces} oranges pieces.`;
    return juice;
}


console.log(fruitProcessor(2, 3));