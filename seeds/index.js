const sequelize = require('../config/connection');
const { User, Recipe, Instruction, Note, Ingredient } = require('../models');


const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const ingredientData = require('./ingredientData.json');
const instructionData = require('./instructionData.json');
const noteData = require('./noteData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DB SEEDED -----');
  await Recipe.bulkCreate(recipeData, {
  });
  await Ingredient.bulkCreate(ingredientData, {
  });
  await Instruction.bulkCreate(instructionData, {
  });
  await Note.bulkCreate(noteData, {
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
 
  process.exit(0);
};

seedDatabase();
