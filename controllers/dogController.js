const express = require('express')
const router = express.Router()
const Dog = require('../models/dog')

// GET /dogs -- dog index route
router.get('/', async (req, res, next) => {
  try {
    const foundDogs = await Dog.find().populate('user')  
    console.log(foundDogs);
    res.render('dogs/index.ejs', {
      dogs: foundDogs,
      userId: req.session.userId
    })
  } catch(err) {
    next(err)
  }
})

// GET /dogs/new -- dog new route
router.get('/new', (req, res) => {
  if(req.session.loggedIn) {
    res.render('dogs/new.ejs', {
      userId: req.session.userId
    })
  } else {
    req.session.message = "You must be logged in to do that"   
    res.redirect('/auth/login')
  }
})

// GET /dogs/:id -- dog show route
router.get('/:id', async (req, res, next) => {
  try {
    const foundDog = await Dog.findById(req.params.id).populate('user')
    console.log(foundDog);
    res.render('dogs/show.ejs', { 
      dog: foundDog,
      userId: req.session.userId
    })
  } catch(err) {
    next(err)
  }
})

// POST /dogs -- dog create route
router.post('/', async (req, res, next) => {
  try {

    // if the user is not logged in
    if(!req.session.loggedIn) { 
      // message
      req.session.message = "You must be logged in to do that."
      // redirect
      res.redirect('/auth/login')
    } 

    else {
      const dogToCreate = {
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        user: req.session.userId
      }
      const createdDog = await Dog.create(dogToCreate)
      console.log(createdDog);
      res.render('dogs/show.ejs', {
      	dog: createdDog,
      	userId: req.session.userId
      })

    }

  } catch(err) {
    next(err)
  }
})


module.exports = router