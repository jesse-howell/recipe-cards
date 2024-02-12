const User = require("./User");
const Recipe = require("./Recipe");
const Ingredient = require("./Ingredient");
const Instruction = require("./Instruction");
const Note = require("./Note");
const Tag = require("./Tag");

// Ingredient belongsTo Recipe
Ingredient.belongsTo(Recipe, {
  foreignKey: "recipeId",
  onDelete: "CASCADE",
});

// Instruction belongsTo Recipe
Instruction.belongsTo(Recipe, {
  foreignKey: "recipeId",
  onDelete: "CASCADE",
});

// Notes belongsTo Reccipe
Note.belongsTo(Recipe, {
  foreignKey: "recipeId",
  onDelete: "CASCADE",
});

// Tag belongsTo Reccipe
Tag.belongsTo(Recipe, {
  foreignKey: "recipeId",
  onDelete: "CASCADE",
});

// Recipe have many ingredients
Recipe.hasMany(Ingredient, {
  foreignKey: "recipeId",
});
// Recipe have many instructions
Recipe.hasMany(Instruction, {
  foreignKey: "recipeId",
});
// Recipe have many notes
Recipe.hasMany(Note, {
  foreignKey: "recipeId",
});

// Recipe have many tags
Recipe.hasMany(Tag, {
  foreignKey: "recipeId",
});

module.exports = {
  User,
  Recipe,
  Ingredient,
  Instruction,
  Note,
  Tag,
};
