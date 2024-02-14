// const router = require("express").Router();
// const {
//   Recipe,
//   Ingredient,
//   Instruction,
//   Note,
//   Category,
//   Tag,
// } = require("../../models");

// //Push/Post/Delete Options:

// // create new -> tag
// router.post("/", async (req, res) => {
//   try {
//     const tag = await Tag.create(req.body);
//     return res.status(200).json(tag);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// // delete -> tag
// // I used the async/await syntax for this block of code
// router.delete("/:id", async (req, res) => {
//   try {
//     const TagData = await Tag.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!TagData) {
//       res.status(404).json({ message: "Tag not found." }); // if user messed up it's 404
//       return;
//     }

//     res.status(200).json({ message: "Tag deleted" }); // 200 means all good
//   } catch (err) {
//     if (err) {
//       res.status(500).json(err); // if server messed up its a 500
//     }
//   }
// });

// module.exports = router;
