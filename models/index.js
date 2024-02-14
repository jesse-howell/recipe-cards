const User = require("./User");
const Recipe = require("./Recipe");


//======================we need to correlate User with their recipes (by session??? xD)=========================

// Notes belongsTo Reccipe
Recipe.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Recipe have many notes
User.hasMany(Recipe, {
  foreignKey: "user_id",
});


module.exports = {
  User,
  Recipe,
};
