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

// create new -> note
router.post("/", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    return res.status(200).json(note);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// delete -> note
// I used the async/await syntax for this block of code
router.delete("/:id", async (req, res) => {
  try {
    const NoteData = await Note.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!NoteData) {
      res.status(404).json({ message: "Note not found." }); // if user messed up it's 404
      return;
    }

    res.status(200).json({ message: "Note deleted" }); // 200 means all good
  } catch (err) {
    if (err) {
      res.status(500).json(err); // if server messed up its a 500
    }
  }
});

module.exports = router;
