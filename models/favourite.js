"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      favourite.belongsTo(models.user);
      favourite.belongsTo(models.cuisine);
    }
  }
  favourite.init(
    {
      userId: DataTypes.INTEGER,
      cuisineId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favourite",
    }
  );
  return favourite;
};
