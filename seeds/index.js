const sequelize = require('../config/connection');
const { User } = require('../models');
const { Recipe } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DB SEEDED -----');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData);

  process.exit(0);
};

seedDatabase();
