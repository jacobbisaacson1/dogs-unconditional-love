const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const Dog = require('../models/dog.js')
const bcrypt = require('bcrypt')

router.get('/register', (req, res) => {
	let messageToDisplay = req.session.messageToDisplay
	req.session.message = ''
	res.render('auth/register.ejs', {
		message: messageToDisplay
	})
})

router.post('./register', async	(req, res, next) => {
	try {
		console.log(req.body);
		const desiredUsername: req.body.username
		const desiredPassword: req.body.password
		const userWithThisUsername = await User.findOne({
			username: desiredUsername
		})
		console.log(userWithThisUsername);
	if(userWithThisUsername) {
		req.session.message = `Username ${desiredUsername} taken`
		res.redirect('/auth/register')
	} else {
		const salt = bcrypt.genSaltSync(10)
		const hashedPassword = bcrypt.hashSync(desiredPassword, salt)
		const createdUser = await User.create({
			username: desiredUsername,
			password: desiredPassword
		})
		req.session.loggedIn = true
		req.session.userId = createUser._id
		req.session.username = createdUser.username
		req.session.message = 'Thanks for signing up, ${createdUser.username}'
		res.redirect('/')
		}
	} catch(err) {
		next(err)
	}
})


module.exports = router