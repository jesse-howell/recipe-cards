const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// test - reverted name to User.js
class Recipe extends Model {}

//Set up Recipe model (table)
Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user id as fk
    user_id: {
      type: DataTypes.INTEGER,
      // foreign key references user(id)
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "recipe",
  }
);

module.exports = Recipe;
