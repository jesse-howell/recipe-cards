// Imnports
const sequelize = require("../config/connection");
const {
  User,
  Recipe,
  Instruction,
  Note,
  // not using Tag
  // Tag,
  Ingredient,
} = require("../models");

const userData = require("./userData.json");
const recipeData = require("./recipeData.json");
const ingredientData = require("./ingredientData.json");
const instructionData = require("./instructionData.json");
const noteData = require("./noteData.json");
// not using Tag
// const tagData = require("./tagData.json");

// To seed the db in the correct order, had to create recipe before before the others.
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DB SEEDED -----");
  // testing for err issue
  console.log(recipeData);
  await Recipe.bulkCreate(recipeData, {});
  await Ingredient.bulkCreate(ingredientData, {});
  await Instruction.bulkCreate(instructionData, {});
  await Note.bulkCreate(noteData, {});
  // not using Tag rn
  // await Tag.bulkCreate(tagData, {});
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
