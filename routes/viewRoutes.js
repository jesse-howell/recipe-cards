const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

//will be for creating a user initially (still needs a .handlebars file created in views)
router.get('/createUser', (req, res) => {


  //placeholder name for now, but this will be name of .handlebars file)
  res.render('createuser');
});




router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
