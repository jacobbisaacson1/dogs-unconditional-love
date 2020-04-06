require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT

require('./db/db')


app.use(bodyParser.urlencoded({ extended: false }))


const dogController = require('./controllers/dogController')
app.use('/dogs', dogController)


app.get('/', (req, res) => {
	res.render('home.ejs')
})



app.listen(PORT, () => {
	console.log("server running on 3000");
})

