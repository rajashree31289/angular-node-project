//Object Property Shorthand
const name = 'Rajashree'
const age = 30

const userObj = {      // Normal obj structure
    name : name,
    UserAge : age,
    location : 'Bangalore'
}

console.log('Normal Obj struc : ', userObj)


//Using Object property shorthand, instead of assigning the variable name to a property name, 
//lets directly replace it with the property name. Note : both the names has to be same

const shortHandObj = {   
    name,
    UserAge : age, // Here we cannot use 'age' as shorthand like 'name'. It will throw reference error.
    location : 'Bangalore'
}

console.log('Obj Property shorthand : ', shortHandObj) // It prints the same result as normal as above



//Object De-structuring
const product = {
    label : 'Pencil',
    price : 5,
    stock : 300,
    saleprice : 15
}

const {label, price} = product //Obj de-structing
console.log('De-structured obj - label : ', label) //It prints respective data correctly as above
console.log('De-structured obj - price : ', price)

//If we want to add some property which is not available in the defined original obj, then also
// we can add it with other properties like label or price. It will print as undefined without throwing any error
const {quality} = product
console.log('extra property : ' , quality)
