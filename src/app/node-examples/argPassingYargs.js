// Yargs is npm package used to pass command line arguments

const yargs = require('yargs');

const data = require('./addDataToJson');

//customize yargs version
yargs.version('1.2.0') // pass version value. Now if you run the command in the cmd line as
                            // node <file-name> --version , we get the value of version passed above


// create commands under yargs
// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',  // this is optional
     handler: function() {
        console.log('Addition of note func');
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',  // this is optional
     handler: function() {
        console.log('Removal of note func');
    }
})

//In case we want to use extra configurations, we can add it under builder option inside yargs. command
yargs.command({
    command: 'listAdd',
    describe: 'add the data',
    builder : {
        title : {
            describe : 'Description of the added title',
            demandOptions : true, //If set to true, means it has to be provided in the cmd line to execute the code
            type : 'string' //type of the argument must be string
        },

        body : {
            describe : 'Description of the added body',
            demandOptions : true, //If set to true, means it has to be provided in the cmd line to execute the code
            type : 'string' //type of the argument must be string
        }
    },
    handler: function(argv) {
        data.addData(argv.title , argv.body);
    }
})
console.log('yargs argument vector :' , yargs.argv);