const express = require('express')
const app = express()


const dogController = require('./controllers/dogController')
app.use('/dogs', dogController)



app.listen(3000, () => {
	console.log("server running on 3000");
})

