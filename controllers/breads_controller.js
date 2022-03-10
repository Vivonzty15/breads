// DEPENDENCIES
const breads = require('express').Router()
const db = require('../models')
const baker = require('../models/baker.js')

// INDEX
breads.get('/', (req, res) => {
    db.Bread.find()
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
})

// NEW
breads.get('/new', (req, res) => {
    baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
        })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
    db.Bread.findById(req.params.id)
        .then(foundBread => {
            console.log(foundBread)
            res.render('edit', {
                bread: foundBread
            })
        })
})

// SHOW 
breads.get('/:id', (req, res) => {
    db.Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread,
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
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    db.Bread.create(req.body)
    res.redirect('/breads')
        .catch(err => {
            alert('You may have entered a bread name that has already been used.')
        })
})

breads.get('/data/seed', (req, res) => {
    db.Bread.insertMany([
        {
            name: 'Rye',
            hasGluten: true,
            image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            baker: 'Monica'
        },
        {
            name: 'French',
            hasGluten: true,
            image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            baker: 'Joey'
        },
        {
            name: 'Gluten Free',
            hasGluten: false,
            image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
            baker: 'Rachel'

        },
        {
            name: 'Pumpernickel',
            hasGluten: true,
            image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
            baker: 'Ross'
        }
    ]).then(createdBreads => {
        console.log(createdBreads)
        res.redirect('/breads')
    })
})

// DELETE
breads.delete('/:id', (req, res) => {
    db.Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread => {
            console.log(deletedBread)
            res.status(303).redirect(`/breads`)
        })
})

// UPDATE
breads.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    db.Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
        .catch(err => {
            alert('What you entered doesn\'t work.')
        })
})

module.exports = breads