"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "Pizza dough",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "olive oil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Garlic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomato sauce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mozzarella cheese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomatoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fresh basil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ground black pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Onion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carrots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Celery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sea Salt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vegetable broth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bay leaves",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dried oregano",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red pepper flakes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chickpeas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pasta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tuscan kale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Parsley",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lemon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Parmesan cheese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yellow zucchini",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green zucchini",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eggplant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Chicken",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maple syrup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dijon mustard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ham",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swiss cheese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Panko breadcrumbs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rice noodles",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shrimp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tofu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bean sprouts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red bell pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roasted peanuts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fresh cilanto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fish sauce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soya sauce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brown sugar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vinegar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peanut butter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coconut milk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green curry paste",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bamboo shoots",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thai basil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red wine vinegar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cucumber",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green bell pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cherry tomatoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mint leaves",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Feta cheese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red onion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalamata olives",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ingredients", null, {});
  },
};
