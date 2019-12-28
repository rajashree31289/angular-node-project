const validator = require('../../../node_modules/validator'); // import npm mopdules and store it in const variable
                                                    // this syntax doesnot use ES6

console.log('Is a valid email :', validator.isEmail('abc@youremail.com'));

console.log('Is a valid email :', validator.isEmail('abc.com'));
