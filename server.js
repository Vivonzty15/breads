// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
console.log(PORT)

// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))

// ROUTES

// HOME PAGE
app.get('/', (req, res) => {
    res.render('home') // render looks for views folder, don't have to specify
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//404
app.get('*', (req, res)=> {
    res.status(404).render(`error404`)
})

// LISTEN
app.listen(PORT, ()=> {
    console.log('nomming at port', PORT)
})