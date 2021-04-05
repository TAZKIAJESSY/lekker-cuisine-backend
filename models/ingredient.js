"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredients extends Model {
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
    }
  }
  ingredients.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ingredients",
    }
  );
  return ingredients;
};
