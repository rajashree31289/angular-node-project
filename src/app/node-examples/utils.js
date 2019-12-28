console.log('this is external file - utils.js');

const name = 'Jay';
module.exports.name = name;


//Assignment
const getNotes = function() {
    return "Your Notes is ....";
}

module.exports.notes = getNotes(); //to export multiple variables