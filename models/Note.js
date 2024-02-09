const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipes',
        key: 'id',
      },
    },
      },
  {
    sequelize,
    timestamps: false,
    modelName: 'note',
  }
);

module.exports = Note;