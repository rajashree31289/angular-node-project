const greeter = (name, age) => {
    console.log('Hellooo ' + name)

}

greeter('Rajashree') //This prints "Hellooo Rajashree"

greeter() // THis prints undefined


/**Usage of default parameter. So, even if we dont provide any parameter, the func takes the default one
 */

const greeterNew = (name='Jay', age) => {
    console.log('Hellooo ' + name)
}

greeterNew('New Greeter') //Prints the same as provided
greeterNew() // prints the default param "Jay"