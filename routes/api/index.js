const router = require('express').Router();
const userRoutes = require('./userRoutes');
// create one for each route - recipes, ingredients, instructions, notes
// const = require('./');
// const = require('./');
// const = require('./');
// const = require('./');

router.use('/users', userRoutes);
// // recipe route
// router.use('/', );
// // ingredient route
// router.use('/', );
// // instruction route
// router.use('/', );
// // note route
// router.use('/', );

module.exports = router;
