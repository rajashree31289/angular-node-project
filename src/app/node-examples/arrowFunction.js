
//in Arrow Functions, the "this" keyword represents the object that owns the function, no matter who calls the function.

const normalFunction = function(x) {
    console.log(x * x)
}


const arrowFunc = (y) => {        // remove the function keyword and just mention the arguments with parenthesis
    console.log(y * y)
}

const arrowFuncShorthand = (z) => z * z   //if one line of code, then this can be used.

//Arrow function as events/methods

const event = {
    name : 'Party',
    guestList : function () {
        console.log('Guest list for ' + this.name)
    }
}

event.guestList(); // this will not work and this.name will not be printed

//correct form

const eventNew = {
    name : 'Party',
    list : ['Rajshree', 'Jay'],
    getGuestList() {
        console.log('Guest list for ' + this.name);
        this.list.forEach(function (guest) {
            console.log(guest + ' is attending the ' +  this.name);   //this wont work either, as this standard function has its own binding
        })
    } 

    //the above function would work if the normal function is changed to arrow i.e, as shown below
   
}

eventNew.getGuestList(); // this will not work and this.name will not be printed

//correct example with arrow func for the above thing to work
const eventCorrect = {
    name : 'Party',
    list : ['Rajshree', 'Jay'],
    getGuestList() {
        console.log('Guest list for ' + this.name);
        this.list.forEach((guest) => {
            console.log('arrow function : ' + guest + ' is attending the ' +  this.name);   //this wont work either, as this standard function has its own binding
        })
    } 
}

eventCorrect.getGuestList(); // this will work and this.name will be printed


//Assignment to filter tasks to do.
const tasks = {
    tasks : [{
        text : 'Grocery shopping',
        completed : true
    }, {
        text : 'Clean House',
        completed : false
    }, {
        text : 'Study',
        completed : false
    }],

    getTasksToDo () {
        return this.tasks.filter((task) => task.completed === false )
    }
}

console.log('Tasks to do :', tasks.getTasksToDo())