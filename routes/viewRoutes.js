const router = require("express").Router();
const { User } = require("../models");

//homepage route
router.get("/", async (req, res) => {
  res.render("homepage");
});

// login page will be integrated into homepage w/ sep pg for create user
// login page
router.get('/login', (req, res) => {
  res.render('login');
});

//will be for creating a user initially (still needs a .handlebars file created in views)
router.get("/createuser", (req, res) => {
  //placeholder name for now, but this will be name of .handlebars file)
  res.render("createuser");
});

//create recipe page
router.get("/createrecipe", (req, res) => {
  res.render("createrecipe");
});

//your recipe page
router.get("/yourrecipes", (req, res) => {
  res.render("yourrecipes");
});

module.exports = router;
