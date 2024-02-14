const router = require("express").Router();
const {
  Recipe,
  Ingredient,
  Instruction,
  Note,
  Category,
  Tag,
} = require("../../models");

//Push/Post/Delete Options:

// create new -> category        /////Line 16 Category.create not turning green*******
router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// delete -> category   /////Line 31 Category.destroy not turning green*******
// I used the async/await syntax for this block of code
router.delete("/:id", async (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!CategoryData) {
      res.status(404).json({ message: "Category not found." }); // if user messed up it's 404
      return;
    }

    res.status(200).json({ message: "Category deleted" }); // 200 means all good
  } catch (err) {
    if (err) {
      res.status(500).json(err); // if server messed up its a 500
    }
  }
});

module.exports = router;
