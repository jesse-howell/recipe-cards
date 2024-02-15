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
  console.log(req.session.loggedIn);
  if (!req.session.loggedIn) {
    return res.render("yourrecipes");
  } else {
    try {
      const recipeData = await Recipe.findAll({
        where: { user_id: req.session.user_id },
      });
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
      console.log("RECIPES", recipes);
      res.render("yourrecipes", { recipes });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
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
