const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('dogs/index.ejs')
})

router.get('/new', (req, res) => {
	res.render('dogs/new.ejs')
})


module.exports = router