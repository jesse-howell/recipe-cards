// commented out tags route bc it is empty 

//require consts for each route.js file
const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const instructionRoutes = require('./instructionRoutes');
const noteRoutes = require('./noteRoutes');
const recipeRoutes = require('./recipeRoutes');
const tagRoutes = require('./tagRoutes');
const userRoutes = require('./userRoutes');


//path definition for api directories
router.use('/category', categoryRoutes);
router.use('/ingredient', ingredientRoutes);
router.use('/instruction', instructionRoutes);
router.use('/note', noteRoutes);
router.use('/recipe', recipeRoutes);
router.use('/tag', tagRoutes);
router.use('/user', userRoutes);


module.exports = router;
