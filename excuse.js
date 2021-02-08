let intro=[
"Sorry I'm late, but",
"Sorry I forgot your birthday,but",
"I couldn't come to your wedding,",
"You won't ever beleive this:",
"This sounds crazy, but",
"This sounds unbeleivable but",
"Holy shit!",
"I know its not the firts time, but",
"Oh man, "

]

let who = [
"the lord of darkness",
"Godzilla",
"the human Peter Sundae",
"a tiny lizard",
"the first page of Twilight",
"the inventor of the pirate bay",
"the director of 101 dalmations",
"the little poor kid from Indiana Jones",
"a weird man with six fingers on his hand",
"Mayor Julian Assange",
"Ellon Musk",
"Voldemort",
"Scrooge McDuck",
"the Ghostbusters",
"Diablo, the god of death",
"Harry Potter",
"Captain Kirk",
"Dobby the elf",
"Sherlock Holmes",
"my speakers",
"Darth Vader",
"a homeless guy",
"a frag grenade",
"a lady with a spandex watch",
"a toothpick",
"the creators of apple"
]

let action=[
"tried to kill me",
"ran me over with a tractor",
"ate my homework",
"tried to seduce me",
"stole my car",
"stole my identity",
"beamed me up",
"gave me knucle sandwich",
"ate my lunch",
"dropped kicked me into another dimension",
"ripped a hole in the space time continuum",
"did a moonwalk on my porsche",
"killed Kenny",
"sent me to Narnia",
"gave me a hickey",
"set my house on fire",
"kidnapped my lizard"

]

let when = ['before the class',
'right on time',
'the other day',
'during my lunch',
'while i was on my way down home',
'while i was buying something',
'during my break',
'during my dream',
'while I was praying'];

function randomValue(arr,x) {
    let parts = Math.floor(Math.random() * (x-1))

    return arr[parts];

}

let htmlintro = randomValue(intro, intro.length);
let htmlwho = randomValue(who, who.length);
let htmlaction = randomValue(action, action.length);
let htmlwhen = randomValue(when, when.length);

let myExcuse = htmlintro.concat(" ",htmlwho," ",htmlaction," ", htmlwhen,".");

console.log(myExcuse);

document.getElementById("excuse").innerHTML = myExcuse;