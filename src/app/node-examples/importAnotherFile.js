const values = require('./utils.js'); //By doing this we cannot access the variables of utils.js inside this file.
                        // To use the variables, we have to export it from utils.js and then assign it in a const var here.

// const myName = 'Rajashree';

console.log(values.name);


//Assignment

const notes = values.notes;
console.log(notes);