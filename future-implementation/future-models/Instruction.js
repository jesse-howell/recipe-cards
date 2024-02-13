const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Instruction extends Model {}

// Set up Instruction model (table)
Instruction.init(
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
    modelName: "instruction",
  }
);

module.exports = Instruction;
