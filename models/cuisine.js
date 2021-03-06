"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cuisine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cuisine.belongsTo(models.user);

      cuisine.belongsToMany(models.ingredient, {
        through: "cuisineIngredients",
        foreignKey: "cuisineId",
      });

      cuisine.belongsToMany(models.user, {
        through: "favourites",
        foreignKey: "cuisineId",
        as: "fav",
      });
    }
  }
  cuisine.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      instructions: DataTypes.TEXT,
      cuisineType: DataTypes.STRING,
      servings: DataTypes.STRING,
      cookingTime: DataTypes.INTEGER,
      calories: DataTypes.STRING,
      likes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cuisine",
    }
  );
  return cuisine;
};
