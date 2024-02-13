const router = require("express").Router();
const {
  Recipe,
  Ingredient,
  Instruction,
  Note,
  Category,
  Tag,
} = require("../../models");

///Find Options:

// find all -> recipes, including its associated Ingredients,Instructions, Notes and Tag data
router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({ 
      include:[
        {
          model:Ingredient
          //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
        },
        {
          model:Instruction
          //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
        },

        //Category model reference commented out until we have model association setup
        // {
        //   model:Category
        //   //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
        // },
        {
          model:Note
          //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
        },
        // {
        //   model:Tag
        //   //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
        // }
  ]});
    const recipes = recipeData.map((recipe) =>
      recipe.get({ plain: true })
    );


    res.status(200).json(recipes)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// find a single -> recipe by its `id`, including its its associated Category and Tag data not sure if id should be title
router.get("/:id", async (req, res) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id, { 
        include:[
          {
            model:Ingredient
            //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
          },
          {
            model:Instruction
            //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
          },
  
          //Category model reference commented out until we have model association setup
          // {
          //   model:Category
          //   //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
          // },
          {
            model:Note
            //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
          },
          // {
          //   model:Tag
          //   //attribute:[whatever table columns we want to specify..IF any. Otherwise leave blank]
          // }
    ]});
      const recipe = recipeData.get({ plain: true });
      res.status(200).json(recipe)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//Push/Post/Delete Options:

// create new -> recipe
router.post("/", async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    // if there are recipe tags, we create pairings by using the setTags method
    if (req.body.tagIds) {
      await recipe.setTags(req.body.tagIds);
      await recipe.save();
      return res.status(200).json(await recipe.getTags());
    }
    // if no recipe tags, respond
    return res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});



// delete -> recipe
// I used the async/await syntax for this block of code
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
