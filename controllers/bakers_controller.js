// dependencies
const bakers = require('express').Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

bakers.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// export
module.exports = bakers                   