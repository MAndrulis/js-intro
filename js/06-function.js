console.clear();


const a1 = 10;
const a2 = 2;
const a3 = 8;
const a4 = 4;
const a5 = 6;
const aVidurkis = (a1 + a2 + a3 + a4 + a5) / 5;
console.log('a:', aVidurkis);

const b1 = 3;
const b2 = 4;
const b3 = 5;
const b4 = 6;
const b5 = 7;
const bVidurkis = (b1 + b2 + b3 + b4 + b5) / 5;
console.log('b:', bVidurkis);

const c1 = 10;
const c2 = 9;
const c3 = 8;
const c4 = 7;
const c5 = 6;
const cVidurkis = (c1 + c2 + c3 + c4 + c5) / 5;
console.log('c:', cVidurkis);

console.clear()
// a1 .. a5 -> 

/*
FUNCTION - perpanaudojamas logikos blokas
*/

function empty() {
}

empty();

console.log(true);
console.log();
console.log(5555);
console.log(empty() );
console.log('labas');

console.log('-----------------');

function showMeNumber() {
    //logika...
    //logika...
    //logika...
    //logika...
    return 7;
}

console.log(showMeNumber() );

function sayMyName() {
    return 'Jonas';
}

const myName = sayMyName(); // 'Jonas'

console.log(myName);
console.log(sayMyName());

console.clear();
                 /*  7;                 5;*/
function suma(pirmasSkaicius , antrasSkaicius) {
    return pirmasSkaicius + antrasSkaicius;
}

const s1 = suma(7, 5);
const s2 = suma(-5, 5);
const s3 = suma(100, -7);
console.log(s1);
console.log(s2);
console.log(s3);

function pirmaRaide(vardas) {
    return vardas[0] + vardas [1];
}    
const r1 = pirmaRaide('Jonas');
const r2= pirmaRaide('Maryte');
const r3 = pirmaRaide('Petras');
const r4 = pirmaRaide('Ona');
const r5 = pirmaRaide('Martynas')

console.log('Pirmos raides:', r1, r2, r3, r4, r5);


function inicialai(vardas , pavarde)  {
    return '$ {vardas[0]}. ${pavarde [0]}.';
}

const ini1 = inicialai ('Ckuck', 'Norris');
const ini2 = inicialai ('Pamela', 'Anderson');

console.log(ini1);
console.log(ini2);

console.clear();

// Sveiki, mano vardas Jonas ir man 99metai!
// Sveiki, mano vardas Maryte ir man 88metai!
// Sveiki, mano vardas Petras ir man 50metai!
// Sveiki, mano vardas Ona ir man 25metai!

function intro(name, age) {
   return `Sveiki, mano vardas ${name}
   ir man ${age} metai!` ;
}

const intro1 = intro('Jonas', 99);
const intro2 = intro('Maryte', 88);
const intro3 = intro('Petras', 50);
const intro4 = intro('Ona', 25);

console.log(intro1);
console.log(intro2);
console.log(intro3);
console.log(intro4);
