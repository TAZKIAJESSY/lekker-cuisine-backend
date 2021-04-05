"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shoppingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      shoppingList.belongsTo(models.user);
      shoppingList.belongsTo(models.ingredient);
    }
  }
  shoppingList.init(
    {
      userId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "shoppingList",
    }
  );
  return shoppingList;
};
