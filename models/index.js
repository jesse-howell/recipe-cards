const User = require("./User");
const Recipe = require("./Recipe");


//======================we need to correlate User with their recipes (by session??? xD)=========================

// Notes belongsTo Reccipe
// Note.belongsTo(Recipe, {
//   foreignKey: "recipeId",
//   onDelete: "CASCADE",
// });

// Recipe have many notes
// Recipe.hasMany(Note, {
//   foreignKey: "recipeId",
// });


module.exports = {
  User,
  Recipe,
};
