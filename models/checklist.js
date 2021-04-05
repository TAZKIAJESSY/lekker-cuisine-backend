"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class checkList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  checkList.init(
    {
      userId: DataTypes.INTEGER,
      cuisineId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "checkList",
    }
  );
  return checkList;
};
