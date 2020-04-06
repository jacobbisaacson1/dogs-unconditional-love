require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const PORT = process.env.PORT

require('./db/db')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

const dogController = require('./controllers/dogController')
app.use('/dogs', dogController)

const authController = require('./controllers/authController')
app.use('/auth', authController)

app.get('/', (req, res) => {
	const message = req.session.message
	req.session.message = ''
	res.render('home.ejs', {
		 message: message
	})
})


app.get('/', (req, res) => {
	res.render('home.ejs')
})



app.listen(PORT, () => {
	console.log("server running on 3000");
})

