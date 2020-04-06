const express = require('express')
const router = express.Router()
const Dog = require('../models/dog.js')


router.get('/', (req, res) => {
	res.render('dogs/index.ejs')
})

router.get('/new', (req, res) => {
	res.render('dogs/new.ejs')
})

router.post('/new', async (req, res, next) => {
	try {
		const createdDog = await Dog.create(req.body)
		console.log(createdDog);
		res.redirect('/dogs/')
	} catch(err) {
		next(err)
	}
})


module.exports = router