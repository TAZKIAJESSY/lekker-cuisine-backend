"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cuisineIngredients",
      [
        {
          amount: "100g",
          cuisineId: 1,
          ingredientId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          cuisineId: 2,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cuisineIngredients", null, {});
  },
};
