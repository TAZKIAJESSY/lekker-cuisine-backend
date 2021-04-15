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
          amount: "100 gm",
          cuisineId: 1,
          ingredientId: 20,
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
          amount: "1 tbs",
          cuisineId: 2,
          ingredientId: 15,
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
          amount: "500 gm",
          cuisineId: 2,
          ingredientId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 pcs",
          cuisineId: 2,
          ingredientId: 58,
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
          amount: "200 gm",
          cuisineId: 3,
          ingredientId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 pc",
          cuisineId: 3,
          ingredientId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          amount: "2 pcs",
          cuisineId: 4,
          ingredientId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          amount: "2 tbs",
          cuisineId: 4,
          ingredientId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 pcs",
          cuisineId: 4,
          ingredientId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "50 gm",
          cuisineId: 5,
          ingredientId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          amount: "2 tbs",
          cuisineId: 5,
          ingredientId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 tbs",
          cuisineId: 5,
          ingredientId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "500 gm",
          cuisineId: 6,
          ingredientId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          amount: "100 gm",
          cuisineId: 6,
          ingredientId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "50 gm",
          cuisineId: 6,
          ingredientId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 tbs",
          cuisineId: 7,
          ingredientId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 tbs",
          cuisineId: 7,
          ingredientId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "100 gm",
          cuisineId: 7,
          ingredientId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "100 gm",
          cuisineId: 7,
          ingredientId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "500 ml",
          cuisineId: 7,
          ingredientId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 pc",
          cuisineId: 7,
          ingredientId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 pc",
          cuisineId: 7,
          ingredientId: 53,
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
