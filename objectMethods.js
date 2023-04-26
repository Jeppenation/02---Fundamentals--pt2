'use strict';

/*const jesperObject = {
    firstName: 'Jesper',
    lastName: 'Kallioniemi',
    birthYear1: 1992,
    occupation: 'KT',
    friends: ['Elias', 'Christian', 'Olof'],
    hasDriverLicense: true,

    //man kan även lagra funktioner i ett objekt
    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // // },

    // this. refererar till ett element i detta objekt.
    // calcAge: function () {
    //     console.log(this);
    //     return 2023 - this.birthYear1
    // },

    //man kan även skapa variabler inom ett objekt med this.
    //i detta exempel så räknar man ut åldern en gång, och inte varjegång man anropar funktionen
    calcAge: function () {
        this.age = 2023 - this.birthYear1;
        return this.age;
    },

    getSumary: function () {
        console.log(`${this.firstName} is ${this.calcAge()} and works as ${this.occupation}. ${this.hasDriverLicense == true ? "He has a drivers licens" : "He does not have a drivers licens"}`);
    }


};

//dot notation
console.log(jesperObject.calcAge());
console.log(jesperObject.age);

console.log(jesperObject.getSumary());

// console.log(jesperObject);
// console.log(jesperObject.hasDriverLicense);

//bracket notation
// console.log(jesperObject["calcAge"](1992));

// console.log(jesperObject.writeName());

//Utmaning:
//"Jesper är 31 år gammal och jobbar som: KT. Han har körkort"*/

//Uppdrag: 
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const John = {
    firstName: "John",
    lastName: "Smith",
    height: 1.95,
    weight: 92,

    calcBMI: function () {
        const bmiJohn = this.weight / (this.height * this.height);
        const bmiJohnRound = Math.round(bmiJohn);
        return bmiJohnRound;
    }
}

const Mark = {
    firstName: "Mark",
    lastName: "Miller",
    height: 1.69,
    weight: 78,

    calcBMI: function () {
        const bmiMark = this.weight / (this.height) ** 2;
        const bmiMarkround = Math.round(bmiMark);
        return bmiMarkround;
    }
}

// John.weight = 1000;

if (Mark.calcBMI() > John.calcBMI()) {
    console.log(`Marks BMI is higher (${Mark.calcBMI()}) compared to Johns BMI (${John.calcBMI()})`);
} else {
    console.log(`Johns BMI is higher(${John.calcBMI()}) compared to Marks BMI (${Mark.calcBMI()})`);
}
