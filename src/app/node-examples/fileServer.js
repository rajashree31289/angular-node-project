
const fs = require('fs');  //loading in modules of fs . So, we get all methods there for fs.
//file server usage
// fs.writeFileSync(Filename, file-content)  ----> syntax
fs.writeFileSync('notes.txt', 'This file is created by node js. ');


//append a message in notes.txt file
fs.appendFileSync('notes.txt', ' This is the appended text.')