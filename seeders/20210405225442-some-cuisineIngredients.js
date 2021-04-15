"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cuisineIngredients",
      [
        {
          amount: "2 tbs",
          cuisineId: 1,
          ingredientId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 pcs",
          cuisineId: 2,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "100 gm",
          cuisineId: 3,
          ingredientId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          cuisineId: 4,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          cuisineId: 5,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          cuisineId: 6,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          cuisineId: 7,
          ingredientId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 pcs",
          cuisineId: 1,
          ingredientId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "100g",
          cuisineId: 1,
          ingredientId: 20,
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
