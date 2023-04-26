'use strict';

//skapa ett object, vilket är som en array fast man ger elementen 'namn'
const jesperObject = {
  firstName: 'Jesper',
  lastName: 'Kallioniemi',
  Age4: 31,
  occupation: 'KT',
  friends: ['Elias', 'Christian', 'Olof'],
};

//dot-notation
console.log(jesperObject.firstName);

//bracket-notation
console.log(jesperObject['Age4']);

const nameKey = 'Name';
console.log(jesperObject['first' + nameKey]);
console.log(jesperObject['last' + nameKey]);

//ber användaren att ange vad dom vill veta
const interestedIn = prompt(
  'What do you want to know about Jesper? Choose between firstName, lastName, Age, and friends'
);

//visar det som användaren anger
if (jesperObject[interestedIn]) {
  console.log(jesperObject[interestedIn]);
} else {
  //Ett felmeddelande
  console.log(
    'Sorry, choose between firstName, lastName, occupation and friends!'
  );
}

//hur man lägger till olika saker, även fast dem inte står med i objektet innan
jesperObject.location = 'Västerås';
jesperObject['Twitter'] = '@Hwila';

//Skriver ut hela
console.log(jesperObject);

//Challenge
//"Jesper har 3 vänner, och hans bästa vän är Elias"

console.log(
  `${jesperObject.firstName} has ${jesperObject.friends.length} friends, ${jesperObject.friends[2]} is his best friend`
);
