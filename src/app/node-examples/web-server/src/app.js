const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

/** For Heroku - set up */
const port = process.env.PORT || 7070 //Config added for accessing PORT of env variables setup by heroko dynamically

/** know tha absolute path of a file */
console.log('Directory Name: ', __dirname) // complete path of directory in which the file exists but it gives till src
console.log('Filename : ', __filename) //complete path till the current file name


/**Define paths for Express Config */
const publicDirectoryPath = path.join(__dirname, './static-assets')
console.log('public dir path : ', publicDirectoryPath)
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')


/** Tell express which templating engine we are using  - // hbs stands for handlebars. 
 * Its is a templating engine. 
 * It is used for dynamic templating so that we can reuse code.
 * For dynamic templates, we created a folder "views" under web-server/src to contain files with ext .hbs*/
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath) // partials are a part of html like header or footer


/**If hbs, use render and give file name with no ext. Render takes 2 args -- filename, dynamic content */
app.get('', (req, res) => {
    res.render('dynamic-template-index' , {
        title : 'Dynamic templating. Getting the handlebars file.',
        name : 'Rajashree'
    })
})

app.get('/about', (req, res) => {
    res.render('dynamic-template-about', {
        title: 'About Page - dynamic templating',
        name : 'Rajashree'
    })
})

app.get('/help', (req, res) => {
    res.render('dynamic-template-help', {
        title: 'Help Page - dynamic templating',
        name : 'Rajashree'
    })
})


/**Setup static directory to serve */
app.use(express.static(publicDirectoryPath)) // use prop is used to customize the server



/* response is to send a response back to the requester. 
We use send property to get the data from the server to the browser.*/

/* Send back text -- Static Assets*/
app.get('', (request, response) => {  //for app home --> localhost:7070
    response.send('Hellooo Express!!')  
})

app.get('/help-text', (request, response) => {  //for app/help --> localhost:7070/help
    response.send('Welcome to Help Page')  
})

/* Send back html */
app.get('/help-html' , (req, res) => {
    res.send('<h1>Welcome to the App! </h1>')
})

/** Send back JSON. Note : Add JSONView chrome extension to your browser to view parsed JSON */
app.get('/help-json', (req, res) => {
    res.send({
        name : 'Rajashree',
        place : 'Bangalore'
    })
})




/**Query String Parameters */
app.get('/products', (req, res) => {
    console.log('Query param : ', req.query)
    if (!req.query.search) {
      return res.send({
          error : 'You must provide a serch term in the url'
      })
    }
    res.send({
        products : []
    })
})

app.get('/help/*', (req, res) => {
   res.render('error-page', {
       title : 'Help Article not found'
   }) // wild char "*" can be used for such cases too. 
})
/** If we are trying to open a url, we have not handled. Then lets send our own 404 page */
app.get('*', (req, res) => {
    res.render('error-page', {
        title : 'Page not found'
    })
})

/** Starts the web-server */
app.listen(port, () => {
    console.log('Server is up and running on port ' +  port)
}) //listen property of express starts the server on a specific port mentioned.
