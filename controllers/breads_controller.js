// DEPENDENCIES
const breads = require('express').Router()
const db = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    db.find()
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// EDIT
breads.get('/:id/edit', (req, res) => {
    db.findById(req.params.id)
        .then(bread => {
            console.log(bread)
            res.render('edit', {
                bread: bread
            })
        })
})

// SHOW 
breads.get('/:id', (req, res) => {
    db.findById(req.params.id)
        .then(bread => {
            res.render('show', {
                bread: bread
            })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    db.create(req.body)
    res.redirect('/breads')
})

// DELETE
breads.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id')
})

// UPDATE
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    db.updateOne(`/breads/${req.params.id}`)
        .then(() => {
            res.redirect(`/breads/${req.params.id}`)
        })
})  

module.exports = breads