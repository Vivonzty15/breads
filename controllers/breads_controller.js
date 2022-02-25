// DEPENDENCIES
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: "My index page"
      }
    )
  // res.send(Bread)
})

// SHOW 
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }
})

breads.get('*', (req, res) => {
    res.send('<h1>This page does not exist</h1>')
})

module.exports = breads