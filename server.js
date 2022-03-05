// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to mongo: ', process.env.MONGO_URI)
})

// MIDDLEWARE / EXPRESS SETTINGS
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

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