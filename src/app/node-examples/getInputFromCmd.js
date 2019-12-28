console.log(process.argv); // on running node <file-name> <any-value>  on terminal, we add argument vector in the process
                           // process.argv prints all the arguments that we pass on terminal while executing the file using node

const command = process.argv[2];
if (command === 'add') {
    console.log('addition functionality is onn'); //add any code to implement a functionality based on the args passed
} else if (command === 'remove') {
    console.log('remove functionality is onn');
}

//adding command line arguments. So, again if we console.log process.argv, we get the cmd line argument gets added in the arg vector
// eg: node <file-name> <any-value> <cmd line arguments>
// node app.js add --title="Adding dynamic cmd line arguments"




