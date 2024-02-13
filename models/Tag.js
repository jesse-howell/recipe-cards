// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Tag extends Model {}

// //Set up Tag model (table)
// Tag.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     text: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     recipeId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "recipes",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     modelName: "tag",
//   }
// );

// module.exports = Tag;
