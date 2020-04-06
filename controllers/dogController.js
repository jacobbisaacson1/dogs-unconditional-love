const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('dogs/index.ejs')
})


module.exports = router