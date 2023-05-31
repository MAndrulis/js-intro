console.clear ();

/*
STRING - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai:
- viengubos kabutes ()
- dvigubos kabutes ("")
-length > ilgis
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

const lentele1 = x + " * " + a + " = " + result1 + " \n " + x + " * " + b + " = " + result2 + " \n "  + x + " * " + c + " = " + result3 + " \n " 
+ x + " * " + d + " = " + result4 + " \n " + x + " * " + e + " = " + result5 + " \n " + x + " * " + f + " = " + result6 + " \n " + x + " * " + g + " = " + result7 + " \n "
+ x + " * " + h + " = " + result8 + " \n "+ x + " * " + i + " = " + result9 + " \n " + x + " * " + j + " = " + result10 + " \n ";

console.log(lentele1);


const xx = 4;
const aa = 1;
const bb = 2;
const cc= 3;
const dd = 4;
const ee = 5;
const ff = 6;
const gg = 7;
const hh = 8;
const ii = 9;
const jj = 10;

const result11 = xx * aa;
const result22 = xx * bb;
const result33 = xx * cc;
const result44 = xx * dd;
const result55 = xx * ee;
const result66 = xx * ff;
const result77 = xx * gg;
const result88 = xx * hh;
const result99 = xx * ii;
const result100 = xx * jj;

const lentele2 = `${xx} * ${aa} = ${result11}
${xx} * ${bb} = ${result22}
${xx} * ${cc} = ${result33}
${xx} * ${dd} = ${result44}
${xx} * ${ee} = ${result55}
${xx} * ${ff} = ${result66}
${xx} * ${gg} = ${result77}
${xx} * ${hh} = ${result88}
${xx} * ${ii} = ${result99}
${xx} * ${jj} = ${result100} `;
console.log(lentele2);

 console.clear ()

 const daugiklis = 2 ;
 const n1 = 1;
 const n2 = 2;
 const n3 = 3;
 const n4 = 4;
 const n5 = 5;
 const n6 = 6;
 const n7 = 7;
 const n8 = 8;
 const n9 = 9;
 const n10 = 10;

 const lentele01 = daugiklis + ' * ' + n1 + ' = ' + (daugiklis * n1) + '\r\n'
 + daugiklis + ' * ' +n2 + ' = ' + (daugiklis * n2) + '\r\n' + daugiklis + ' * ' +n3 + ' = ' + (daugiklis * n3) + '\r\n'
 + daugiklis + ' * ' +n4 + ' = ' + (daugiklis * n4) + '\r\n' + daugiklis + ' * ' +n5 + ' = ' + (daugiklis * n5) + '\r\n'
 + daugiklis + ' * ' +n6 + ' = ' + (daugiklis * n6) + '\r\n' + daugiklis + ' * ' +n7 + ' = ' + (daugiklis * n7) + '\r\n'
 + daugiklis + ' * ' +n8 + ' = ' + (daugiklis * n8) + '\r\n' + daugiklis + ' * ' +n9 + ' = ' + (daugiklis * n9) + '\r\n'
 + daugiklis + ' * ' +n10 + ' = ' + (daugiklis * n10) + '\r\n'

 const multiplier = 3;
 let number = 0;

 const lentele3 = `
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number}
 ${multiplier} * ${++number} = ${multiplier * number} 
 `;
 
 console.log(lentele3);
 
 let sum = 0;
 let index = 0;
 
 const lentele4 =`
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 ${multiplier} * ${++index} = ${sum += multiplier}
 `;
 
 console.log(lentele4);
 
 const str = 'Pavyzdys';
 console.log(str, 8, '>>>', str.length);
 
 const empty = '        ' ;
 console.log(empty.length);
 
 const raide1 = str[0];
 console.log(raide1, 'P');
 console.log('---------------');
 
 /*console.log(str[0]);
 console.log(str[1]);
 console.log(str[2]);
 console.log(str[3]);
 console.log(str[4]);
 console.log(str[5]);
 console.log(str[6]);
 console.log(str[7]);*/
 
 let strIndex = 0;
 
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);
 console.log(str[strIndex++]);


 const userFirstName = 'Chuck';
 const userLastName = 'Norris';

const userAbbr = `${userFirstName [0]}.${userLastName[0]}`;
console.log(userAbbr);



