console.clear();
/*
ARRAY - sąrašas, matrica, masyvas, arėjus, listas

[].length
*/

const jonas = [10, 2, 8];
const maryte = [10, 9, 8, 7];
const petras = [5, 6];
const ona = [10, 3, 3, 3, 10, 10, 10];

console.log(jonas);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

console.log('-------------');

//                   0        1         2        3
const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

function suma(masyvas) {
   return masyvas[0] + masyvas[1] + masyvas[2];
}

const a1= [1, 2, 3];
const s1 = suma (a1);

const a2= [10, 9, 8];
const s2 = suma (a2);

const a3= [5, 5, 5];
const s3 = suma (a3);

console.log(s1, '->', 6);
console.log(s2, '->', 27);
console.log(s3, '->', 15);


console.log(students.length);
console.log(abc.length);

const empty = [];
console.log(empty, empty.length);

const index= students.length -1;
console.log('Paskutinis:', students [index]);

//                     length    index
// [a] -> a             1         0 
// [a, b] -> b          2         1
//[a, b, c] -> c        3         2

console.clear();

//Jonas: paskutinis pazymys yra 8.
//Maryte: paskutinis pazymys yra 8.
//Petras: paskutinis pazymys yra 7.
//Ona: paskutinis pazymys yra 5.

const stud1 = 'Jonas';
const marks1 = [10, 2, 8, 8, 2, 8]

const stud2 = 'Maryte';
const marks2 = [10, 9, 8]

const stud3 = 'Petras';
const marks3 = [5, 6, 7]

const stud4 = 'Ona';
const marks4 = [5, 5, 5, 5, 5, 5, 5, 5]

function studentIntro(studentName, marks) {
   const lastMark = marks[marks.length - 1];
   return studentName + ": paskutinis pazymys yra " + lastMark + ".";
 }
 
 console.log(studentIntro(stud1, marks1));
 console.log(studentIntro(stud2, marks2));
 console.log(studentIntro(stud3, marks3));
 console.log(studentIntro(stud4, marks4));