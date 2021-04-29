/*

'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

//const interface = ' Audio';
//const private = 534;

function logger() {
    console.log('My name is Kai');
}

//calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);

const num = Number('23');


//function declaration
function calcAge1(birthYear) {
    return  2037 - birthYear;
}
const age1 = calcAge1(1993);

// function expression
const calcAge2 = function (birthYear){
     return 2037 - birthYear;
}
const age2 = calcAge2(1993);

console.log(age1, age2);


//function declaration

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear , firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
//return retirement;
return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, `Kai`));
console.log(yearsUntilRetirement(1980, `Bob`));
 

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
const applePieces =  cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear , firstName)  {
    const age = calcAge(birthYear);
    const retirement = 65 - age

    if(retirement> 0) {
        console.log( `${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} has already retired`);
        return retirement;
        return -1;
    }
return retirement;

}

console.log(yearsUntilRetirement(1993, 'Kai'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = ( a, b, c) => (a + b +c ) / 3;
console.log(calcAverage(3, 4, 5));

// test 1
let scoreDolphins = calcAverage(44 , 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) `);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}) `);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// test 2
scoreDolphins = calcAverage(85 , 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friend1 = 'Wayne';
const friend2 = 'Ashish';
const friend3 = 'Kai';

const friends= ['Wayne', 'Ashish', 'Kai' ];
console.log(friends);

const ys = new Array(1993, 2021, 1997);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);


friends[2] = 'Tiara';
console.log(friends);
//friends = ['Ni', 'Ki']

const firstName = 'Kai';
const Kai = ['Kai', 'Rei', 2037 -1993, 'Student', friends];
console.log(Kai);
console.log(Kai.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 2002, 1997, 2010, 2018];

const age1= calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends= ['Wayne', 'Ashish', 'Kai' ];
const newLength = friends.push('Kira');
console.log(friends);
console.log(newLength);

friends.unshift('Gray');
console.log(friends);

// remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Ashish'));
console.log(friends.indexOf('Gray'));

friends.push(23);
console.log(friends.includes('Ashish'));
console.log(friends.includes('Gray'));
console.log(friends.includes(23));

if (friends.includes('Ashish')) {
    console.log('You have a friend called Ashish');
}


const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills= [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


// INTRODUCTION TO OBJECTS

const kaiArray = [
    'Kai',
    'Rei' ,
    2097-1993,
    'teacher',
    ['Ashish' , 'Wayne' , 'Kira']
];

const kai = {
    firstName: 'Kai',
    lastName: 'Rei' ,
    age: 2021 - 1993,
    friends: ['Ashish', 'Wayne', 'Kira']
};

// DOT VS. BRACKET NOTATION

const kai = {
    firstName: 'Kai',
    lastName: 'Rei' ,
    age: 2021 - 1993,
    job: 'Developer',
    friends: ['Ashish', 'Wayne', 'Kira']
 
};

console.log(kai);

console.log(kai.lastName);
console.log(kai['lastName']);

const nameKey = "Name";
console.log(kai['first' + nameKey]);
console.log(kai['last' + nameKey]);

// console.log(kai.'last' + nameKey);

const intrestedIn = prompt('What do you want to know about Kai? Choose between firstName, lastName, age, job, and friends');

if(kai[intrestedIn]) {
    console.log(kai[intrestedIn]);
} else {
    console.log('Wrong request!Choose between firstName, lastName, age, job, and friends');
}

kai.location = 'South Africa';
kai['twitter'] = '@itskai';
console.log(kai);

console.log(`${kai.firstName} has ${kai.friends.length} friends, and his best friend is called ${kai.friends[0]}`);


const kai = {
    firstName: 'Kai',
    lastName: 'Rei' ,
    birthYear: 1993,
    job: 'Developer',
    friends: ['Ashish', 'Wayne', 'Kira'],
    hasDriversLicense: false,

    //calcAge: function(birthYear){
       // return 2037- birthYear
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },

getSummary:  function  () {
return `${this.firstName} is a ${this.calcAge()} -year old ${kai.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(kai.calcAge());

console.log(kai.age);
console.log(kai.age);
console.log(kai.age);


//console.log(kai['calcAge'](1993));
console.log(kai.getSummary());


 // Challenge 3

 const mark = {
     fullName : 'Mark Miller',
     weight : 78,
     height : 1.69,
     calcBMI: function() {
         this.bmi = this.weight / this.height ** 2;
         return this.bmi;
     }
 };
 const john = {
     fullName: 'John Smith',
     weight : 92,
     height : 1.95,
     calcBMI: function() {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
     }
 };

 mark.calcBMI();
 john.calcBMI();

 console.log(mark.bmi, john.bmi);

 if (mark.bmi> john.bmi) {
     console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
 
} else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

 


for(let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}🤸‍♂️`);
}

 
const kai = [
    'Kai',
    'Rei' ,
    2037-1993,
    'teacher',
    ['Ashish' , 'Wayne' , 'Kira'],
    true
];
const types = [];

for(let i = 0; i < kai.length ; i++) {
    //reading types of array
    console.log(kai[i], typeof kai[i]);
// filling types of array
//types[i] = typeof kai[i];
types.push(typeof kai[i]);
}

console.log(types);

const years = [1993, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < kai.length ; i++) {
if(typeof kai[i] !== 'string') continue;

    console.log(kai[i], typeof kai[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < kai.length ; i++) {
if(typeof kai[i] === 'break') break;

    console.log(kai[i], typeof kai[i]);
}


const kai = [
    'Kai',
    'Rei' ,
    2037-1993,
    'teacher',
    ['Ashish' , 'Wayne' , 'Kira'],
    true
];

// 0, 1, ...., 4
//4, 3, ....,0

for(let i = kai.length - 1; i >= 0; i --){
    console.log(i, kai[i]);
}

for (let exercise = 1; exercise < 4; exercise ++){
    console.log(`--------- Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6;
        rep ++){
            console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}🤸‍♀️ `);
        }
}


//for(let rep = 1; rep <= 10; rep++) {
  //  console.log(`Lifting weights repetition ${rep}🤸‍♂️`);
//}

let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}🤸‍♂️`);
    rep ++;
}

let dice = Math.trunc(Math.random() * 5) +1;
console.log(dice);

while(dice !== 5) {
    console.log(` You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 5);
    if (dice === 5) console.log('Loop is about to end...');
}
*/

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals =[];

for (let i = 0; i< bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip +bills[i]);

}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));