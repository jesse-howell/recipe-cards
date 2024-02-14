const router = require("express").Router();
const {
  Recipe,
} = require("../../models");

///Find Options:

// find all -> recipes, including its associated Ingredients,Instructions, Notes and Tag data
// route = api/recipe
router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({});
    const recipes = recipeData.map((recipe) =>
      recipe.get({ plain: true })
    );

  // 
    res.status(200).json(recipes)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// find a single -> recipe by its `id`, including its its associated Category and Tag data not sure if id should be title
// route = api/recipe/#
router.get("/:id", async (req, res) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id, {});
      const recipe = recipeData.get({ plain: true });

      res.status(200).json(recipe)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//Push/Post/Delete Options:

// create new -> recipe
// route = api/recipe
router.post("/", async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);

    return res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});



// delete -> recipe
// I used the async/await syntax for this block of code
// route = api/recipe/#
router.delete("/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: "No recipe found with this id." }); // if user messed up it's 404
      return;
    }

    res.status(200).json({ message: "Recipe deleted" }); // 200 means all good
  } catch (err) {
    if (err) {
      res.status(500).json(err); // if server messed up its a 500
    }
  }
});

module.exports = router;
