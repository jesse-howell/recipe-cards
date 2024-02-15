const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const Recipe = require('./Recipe');

const defaultRecipe =  {
  "title": "French Toast",
  "ingredients": "6 large eggs, 1 1/2 cups heavy cream, half-and-half, or milk, 2 tablespoons pure vanilla extract, 1/2 teaspoons ground cinnamon, Pinch of ground nutmeg, Pinch of salt, 6 slices bread, 4 tablespoons unsalted butter, 4 tablespoons vegitable oil, Your choice of syrup,",
  "instructions": "1)Preheat oven to 250°F. Place a wire rack on a baking sheet, and set aside. 2)Whisk together eggs, cream, vanilla, cinnamon, nutmeg, and salt in a medium bowl; set aside. 3) Place bread in a shallow baking dish large enough to hold bread slices in a single layer. 4)Pour egg mixture over bread; soak 10 minutes. Turn slices over; soak until soaked through, about 10 minutes more. 5)Heat 2 tablespoons butter and 2 tablespoons vegetable oil in a skillet over medium heat. Fry half the bread slices until golden brown, 2 to 3 minutes per side. Transfer to wire rack and place in preheated oven while cooking remaining French Toast. 6) Wipe skillet, and repeat with remaining butter, oil, and bread.  ",
  "note": "You can substitute the vegitable oil with butter.",
  "source": "Martha Stewart's Kitchen"
};

//This is the User model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      afterCreate: async (createdUser) => {
        await Recipe.create({ ...defaultRecipe, user_id: createdUser.id });
        return createdUser;
      }
    },
    sequelize,
    timestamps: false,
    modelName: "user",
  }
);

module.exports = User;
