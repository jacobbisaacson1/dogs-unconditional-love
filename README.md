# Unconditional Love Lab 🐕🐶🦮

## Setup

Clone [this repository](https://git.generalassemb.ly/sei-chi-feb-2020/sessions-bcrypt-auth-dogs) and run `npm install` inside the directory created by the clone, and make sure you can run the app in the browser. 

## User Stories

A logged in user should be able to add a dog that is associated with themself 

All users should be able to view lists of all dogs on the site

All users should able to view a page with details about each dog on the site

All users should be able to view a list of dogs belonging to a particular user on the site. 

## Steps

Complete the following commits:

##### `dog controller`

  * Add a dog controller and link it up in `server.js`.  Add one (for now) route in there at `GET /dogs` that renders an `index.ejs` template (make a folder `views/dogs` and put it in there) that just says "All the dogs" on it (for now).
  
##### `dog sub nav`

  * Add a sub nav for just dog stuff.  Put a partial `nav.ejs` in the `dogs` folder in `views`.  `include()` it in `views/dogs/index.ejs` and going forward, include it on any other `dogs` page.

##### `it renders a form to add a dog`

  * (Add a link to and) render a dogs new page with a form to add a new dog. Put name, age, and breed inputs in the form, but _do not_ put a field for user.
  
##### `it creates dog associated with logged in user`
  
  * Write a create route at `POST /dogs` that adds a dog associated with the logged in user, or if the user is not logged in, sends them to the login page and displays a message that says "you must be logged in to do that."

##### `dog index`

  * Make the `index.ejs` at `GET /dogs` list all the dogs.  It should just show the dog's name and the owner's name in parentheses.

##### `dog show page`

  * Make a dog show page that prints a sentence \_\_(name)\_\_ is a(n) \_\_age\_\_ year old \_\_(breed)\_\_ that belongs to \_\_owner's username\_\_.  for example: "Spot is a 5 year old German Shepherd that belongs to Dave."  Make the dog's name on the index a link to the show page for that dog. 

##### `it lists dogs for a particular user`
  
  * Make a `userController` with a route `GET /:userId/dogs` that lists all the dogs for the user with that user id.  (How about a template in `views/users` called `dogList.ejs`?)  Just the names are fine (and again, make them links to the dog's show page). Clicking a user's name on the dog index should render this page for that user.  You should also add a link to the dog sub nav that says "My dogs" and shows all the dogs for the logged in user. 


## Hungry for more? 

[Here](https://dog.ceo/api/breeds/list/all) is an API endpoint that gives JSON data of a bunch of dog breeds.  Sweet.  In your new route, get the data with [`superagent`](https://www.npmjs.com/package/superagent) (note: you can use it with `async/await`!) and use it to populate a dropdown (`<select>`) for the breeds. 

[They have pictures too.](https://dog.ceo/dog-api/) Why not integrate those into your site in some kind of fun way?
