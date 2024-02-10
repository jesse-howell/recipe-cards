//require consts for each route.js file
const router = require('express').Router();
const ingredientRoutes = require('./ingredientRoutes');
const instructionRoutes = require('./instructionRoutes');
const noteRoutes = require('./noteRoutes');
const recipeRoutes = require('./recipeRoutes');
const tagRoutes = require('./tagRoutes');
const userRoutes = require('./userRoutes');


//path definition for api directories
router.use('/ingredients', ingredientRoutes);
router.use('/instructions', instructionRoutes);
router.use('/notes', noteRoutes);
router.use('/recipes', recipeRoutes);
router.use('/tags', tagRoutes);
router.use('/user', userRoutes);


module.exports = router;
