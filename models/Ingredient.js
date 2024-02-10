const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ingredient extends Model {}

// Set up Ingredient model (table)
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "recipes",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "ingredient",
  }
);

module.exports = Ingredient;
