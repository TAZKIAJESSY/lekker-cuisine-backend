"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ingredient.belongsToMany(models.cuisine, {
        through: "cuisineIngredients",
        foreignKey: "ingredientId",
      });

      ingredient.belongsToMany(models.user, {
        through: "shoppingLists",
        foreignKey: "ingredientId",
        as: "list",
      });
    }
  }
  ingredient.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ingredient",
    }
  );
  return ingredient;
};
