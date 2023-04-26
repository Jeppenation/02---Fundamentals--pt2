/*let dolphinsScore1 = (44 + 23 + 71) / 3;
let dolphineScore2 = (85 + 54 + 41) / 3;

let koalasScore1 = (65 + 54 + 49) / 3;
let koalasScore2 = (23 + 34 + 27) / 3;
*/

//en funktion för att avgöra vem som vinner.
//ett lag vinner enbart ifall man har dubbla poängen jämfört med förloraren.
function checkWinner(avgDolphines, avgKoalas) {
  if (avgDolphines >= 2 * avgKoalas) {
    console.log(`Dolphines are winner, with a score of ${avgDolphines}!`);
  } else if (avgKoalas >= 2 * avgDolphines) {
    console.log(`Koalas are winners with ${avgKoalas} points!`);
  } else {
    console.log('Sadly, no one one!');
  }
}

//en arrow-funktion för att beräkna snittpoängen på 3 matcher
const calcAverage = (a, b, c) => (a + b + c) / 3;

//variabler för att lagra poängen
let dolphinsScore1 = calcAverage(85, 54, 49);
let koalasScore1 = calcAverage(23, 34, 27);

console.log(dolphinsScore1, koalasScore1);

//avgör vem som vinner.
checkWinner(dolphinsScore1, koalasScore1);

//TEST 2:

dolphinsScore1 = calcAverage(44, 23, 71);
koalasScore1 = calcAverage(65, 54, 49);

checkWinner(dolphinsScore1, koalasScore1);
