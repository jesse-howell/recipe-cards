// commented out tags route bc it is empty

//require consts for each route.js file
const router = require("express").Router();
const recipeRoutes = require("./recipeRoutes");
const userRoutes = require("./userRoutes");

//path definition for api directories
router.use("/recipe", recipeRoutes);
router.use("/user", userRoutes);

module.exports = router;
