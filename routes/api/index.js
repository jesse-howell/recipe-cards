//require consts for each route.js file
const router = require('express').Router();
const ingredientRoutes = require('./ingredientRoutes');
const instructionRoutes = require('./instructionRoutes');
const noteRoutes = require('./noteRoutes');
const recipeRoutes = require('./recipeRoutes');
const tagRoutes = require('./tagRoutes');
const userRoutes = require('./userRoutes');


//path definition for api directories
router.use('/users', ingredientRoutes);
router.use('/users', instructionRoutes);
router.use('/users', noteRoutes);
router.use('/users', recipeRoutes);
router.use('/users', tagRoutes);
router.use('/users', userRoutes);


module.exports = router;
