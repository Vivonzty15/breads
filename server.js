// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
console.log(PORT)

// ROUTES
app.get('/', (req,res)=> {
    res.send('Welcome to an Awesome App about Breads!')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//404
app.get('*', (req, res)=> {
    res.send('This page does not exist')
})

// LISTEN
app.listen(PORT, ()=> {
    console.log('nomming at port', PORT)
})