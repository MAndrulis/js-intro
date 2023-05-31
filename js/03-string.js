console.clear ();

/*
STRING - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai:
- viengubos kabutes ()
- dvigubos kabutes ("")
*/

const vardas = 'Jonas';
const vardas2 = "Maryte";

console.log(vardas);
console.log(vardas2);

const firstName = 'Ona';
const lasName = 'Onaityte';

//Ona Onaityte
const fullName = firstName + ' '  + lasName;
console.log(fullName);

//Sveiki, as esu Ona!
//Sveiki, as esu Jonas!
//Sveiki, as esu Maryte!
const rekiam = 'Sveiki, as esu ' + firstName + '!' ;

console.log(rekiam);

console.log('------------------------');

//Vienguba kabute (')

const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

//Dviguba kabute (")
const kabute2 = 'Dviguba kabute (").';
console.log(kabute2);

//Vienguba kabute (') ir dviguba (") kabutes.
// a = Vienguba (') ir dvi
//guba (") kabutes.
const kabute12 = "Vienguba (') ir dvi" + 'guba (") kabutes.';
console.log(kabute12);

//Vienguba kabute (') ir dviguba (") kabutes
const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2= "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3= "Vienguba (\') ir dviguba (\") kabutes.";
const kabute12_4= 'Vienguba (\') ir dviguba (\") kabutes.';

console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

//Komentaras (//)
const comment1 = 'Komentaras (//).';
const comment2 = "Komentaras (//).";
console.log(comment1);
console.log(comment2);

// Backslash (\).
const back1 = 'Backslash (\\).';
const back2 = "Backslash (\\\\).";
console.log(back1);
console.log(back2);

/*
Labas
rytas,
Lietuva!
*/

// \n - new line (slenkasi eilute zemyn bet lieka X-asi ten pat)
// \r - return (grizta i tos pacios eilutes prieki)
// \t -tabas

const labas = 'Labas\n\
rytas,\n\
Lietuva!';
console.log(labas);

const HTML = '\
<header>\r\n\
\t<img src="#" alt="Logo" class="logo">\r\n\
\t<nav>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t</nav>\r\n\
</header>';
console.log(HTML);


const name = 'Martynas';
const age = 99;
const iLike1 = 'masinos';
const iLike2 = 'gamta';
const iLike3 = 'oro balionai';

//Sveiki,mano vardas [VARDAS], man yra [METAI] metai ir man 
 //labai patinka [KAS PATINKA],[KAS PATINKA] ir [KAS PATINKA] //
 
 const martynas = "Sveiki, mano vardas " + name + ", man yra " + age + " metai ir man labai patinka " + iLike1 + ", " + iLike2 + " ir " + iLike3 + "!";
console.log(martynas);
console.log();

const martis = `Sveiki, mano vardas ${name}, man yra ${age} metai ir man labai patinka ${iLike1}, ${iLike2} ir ${iLike3}!`;
console.log(martis);

// 5 * 1 = 2
// 5 * 2 = 4
// 5 * 3 = 6
// ...
// 5 * 10 = 20
console.clear()

const x = 4;
const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;
const f = 6;
const g = 7;
const h = 8;
const i = 9;
const j = 10;

const result1 = x * a;
const result2 = x * b;
const result3 = x * c;
const result4 = x * d;
const result5 = x * e;
const result6 = x * f;
const result7 = x * g;
const result8 = x * h;
const result9 = x * i;
const result10 = x * j;

const lentele1 = x + "*" + a + "=" + result1 + " \r\n " + x + "*" + b + "=" + result2 + " \r\n "  + x + "*" + c + "=" + result3 + " \r\n " 
+ x + "*" + d + "=" + result4 + " \r\n " + x + "*" + e + "=" + result5 + " \r\n " + x + "*" + f + "=" + result6 + " \r\n " + x + "*" + g + "=" + result7 + " \r\n "
+ x + "*" + h + "=" + result8 + " \r\n "+ x + "*" + i + "=" + result9 + " \r\n " + x + "*" + j + "=" + result10 + " \r\n ";

console.log(lentele1);


 






