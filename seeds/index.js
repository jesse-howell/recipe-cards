// Imnports
const sequelize = require("../config/connection");
const {
  User,
  Recipe,
} = require("../models");

const userData = require("./userData.json");
const recipeData = require("./RecipeData.json");


// To seed the db in the correct order, had to create recipe before before the others.
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DB SEEDED -----");
  // testing for err issue
  console.log(recipeData);
  await Recipe.bulkCreate(recipeData, {});
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
