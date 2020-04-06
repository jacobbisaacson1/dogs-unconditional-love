const express = require('express')
const router = express.Router()
const Dog = require('../models/dog.js')
const User = require('../models/user.js')


router.get('/', async (req, res, next) => {
	try {
		const foundDogs = await Dog.find({})
		console.log(foundDogs);
		res.render('dogs/index.ejs', {
			foundDogs: foundDogs
		})
	} catch(err) {
		next(err)
	}
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