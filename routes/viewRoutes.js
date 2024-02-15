const router = require("express").Router();
const { User, Recipe } = require("../models");

//homepage route
router.get("/", async (req, res) => {
  res.render("homepage");
});

// login page will be integrated into homepage w/ sep pg for create user
// login page
router.get("/login", (req, res) => {
  res.render("login");
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
router.get("/yourrecipes", async (req, res) => {
  console.log
  const recipeData = await Recipe.findAll({});
  const recipes = recipeData.map((recipe) =>
    recipe.get({ plain: true })
  );


  res.render("yourrecipes", {recipes});
});

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
