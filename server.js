require('dotenv').config()
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const PORT = process.env.PORT

// db connection
require('./db/db')


// middleware
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))

// sessions
// this middleware will take session data in server's memory
// and make it available to you by attaching it to the req object
// so in your routes you can access/change it via the req.session object
// and the data will be there on subsequent requests 
server.use(session({
  secret: process.env.SESSION_SECRET,
  // should the session be rewritten back to the server
  // even if it wasn't modified on this request
  // don't worry about this too much 
  resave: false,
  // save session info (and store cookies) without user permission
  // you should legally set this to false
  saveUninitialized: false // GDPR
}))


// controllers
const authController = require('./controllers/authController')
server.use('/auth', authController)
const dogController = require('./controllers/dogController')
server.use('/dogs', dogController)
const userController = require('./controllers/userController')
server.use('/users', userController)



server.get('/', (req, res) => {
  const message = req.session.message
  req.session.message = ''
  res.render('home.ejs', {
    currentMood: req.session.moodChoice,
    message: message
  })
})

server.get('/mood', (req, res) => {
  console.log(req.session); // you can see the mood here after the user has 
                            // made a choice

  let currentMood = req.session.moodChoice               
  if(currentMood === undefined) {
    currentMood = "unknown"
  }
  res.render('mood.ejs', {
    currentMood: currentMood
  })
})

server.post('/mood', (req, res) => {
  
  console.log(req.body.moodChoice, "was clicked");
  // you can store whatever you want in the req.session obj
  // here we'll store the mood the user clicked in req.session
  req.session.moodChoice = req.body.moodChoice

  res.redirect('/mood')

})

server.get('*', (req, res) => {
  // use res.status to actually add an HTTP status code to your response
  // default is 200 if you don't use res.status
  res.status(404).render('404.ejs')
})

server.listen(PORT, () => {
  const d = new Date()
  console.log(`${d.toLocaleString()}: Server listening on port ${PORT}`);
})