"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cuisines",
      [
        {
          title: "Pizza Margherita",
          imageUrl:
            "https://res.cloudinary.com/jessy/image/upload/v1617622204/margherita-pizza_pz454f.jpg",
          instructions:
            "Whether you are using homemade or store-bought pizza dough, allow the dough to rest on your kitchen counter for a minimum of 1 hour so it comes up to room temperature.First, preheat your oven to the highest temperature it will go. For me that is 525°F.Place the dough on a clean and floured surface.Press with your fingers to flatten and lightly stretch and rotate until it is your desired shape.Use the biggest baking sheet you own and sprinkle with coarse ground cornmeal.add the canned or carton tomatoes to a food processor or blender along with the garlic cloves and basil leaves. You can also add a bit of sea salt and black pepper, if desired. Blend for about 1 minute.Add about 1/2 cup of pizza sauce to the dough. Next, add the mozzarella cheese.Bake the pizza in your preheated 525°F (or higher) oven on the bottom rack for 5 minutes then move it to the middle rack for 8-10 minutes.",
          cuisineType: "Italian",
          servings: "2",
          cookingTime: "30 min",
          calories: "466 cal",
          likes: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pasta e Fagioli", //Italian Pasta and Beans
          imageUrl:
            "https://res.cloudinary.com/jessy/image/upload/v1617622113/pasta-e-fagioli-107_hzofad.jpg",
          instructions:
            "In a large Dutch oven or soup pot over medium heat, warm 3 tablespoons of the olive oil until shimmering. Add the chopped onion, carrot, celery, ½ teaspoon of the salt, and about 10 twists of black pepper. Cook, stirring often, until the vegetables have softened and the onions are turning translucent, about 6 to 10 minutes.Add the garlic and cook, stirring constantly, until fragrant, about 30 seconds. Add the tomatoes, stir, and cook until the tomatoes are bubbling all over. Add the broth, water, bay leaves, oregano, and red pepper flakes.Raise the heat to medium-high and bring the mixture to a simmer. Cook for 10 minutes, stirring occasionally, and reducing the heat as necessary to maintain a gentle simmer.Use a heat-safe measuring cup to transfer about 1 ½ cups of the soup (avoiding the bay leaves) to a blender. Add about ¾ cup of the drained beans. Securely fasten the lid and blend until completely smooth, being careful to avoid hot steam escaping from the lid. Pour the blended mixture back into the soup.Add the remaining beans, pasta, kale and parsley to the simmering soup. Continue cooking, stirring often to prevent the pasta from sticking to the bottom of the pot, for about 20 minutes, or until the pasta and greens are pleasantly tender.Remove the pot from the heat, then remove and discard the bay leaves. Stir in the lemon juice, the remaining tablespoon of olive oil, and remaining ¼ teaspoon salt. Taste and season with more salt (I usually add another ¼ teaspoon) and pepper until the flavors really sing. Garnish bowls of soup as desired, and serve.",
          cuisineType: "Italian",
          servings: "6 bowls or 8 cups of soup",
          cookingTime: "40 minutes",
          calories: "343 cal",
          likes: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ratatouille",
          imageUrl:
            "https://res.cloudinary.com/jessy/image/upload/v1617622121/ratatouille-720x720_cznlae.jpg",
          instructions:
            "Preheat oven to 350F.Spread 3/4 of tomato sauce into a pan that will fit all of your vegetables.Begin to layer vegetables (i.e. tomato, then zucchini, then pepper) in a clockwise rotation beginning in the centre and moving outward. Don't worry about the order of the vegetables as you'll have more slices of some things than others.Fill in any gaps between the vegetables with remaining tomato sauce. Season with salt, pepper, and dry oregano. Drizzle with olive oil.Bake uncovered for one hour.",
          cuisineType: "French",
          servings: "1",
          cookingTime: "1 hr",
          calories: "80 cal",
          likes: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chicken Cordon Bleu",
          imageUrl:
            "https://res.cloudinary.com/jessy/image/upload/v1617622094/chicken-cordon-bleu-recipe-6-of-8_qvimpo.jpg",
          instructions:
            "Preheat oven to 350°F.Lay chicken breasts between plastic wrap or in a plastic bag and pound until thin, about 1/2 thick. If large breasts, slice horizontally to make cutlets.In a bowl whisk together the mustard, maple syrup and white pepper and brush half of the mixture on each breast. Place a slice of ham and cheese on each chicken breast. Start at the narrowest end of the pounded chicken breast and then roll up. Secure with a toothpicks.Brush each chicken roll with remaining maple mustard sauce. Roll in Panko bread crumbs, press the crumbs on chicken to adhere.Transfer the chicken rolls to a greased baking dish. Drizzle some more olive oil over each chicken roll. To keep moist, add 1/4 cup of chicken stock or a dry white wine in the baking dish to cook with chicken. Cover with foil.Bake for 15 minutes in the middle of the oven. For a browned top I remove foil and continue to cook uncovered for another 5 minutes to brown the crumbs. Chicken is cook when internal temperature reaches 165°F.Serve immediately with any pan drippings poured over and on a bed of sautéed spinach or other vegetables.",
          cuisineType: "French",
          servings: "4",
          cookingTime: "20 minutes",
          calories: "357.9 cal",
          likes: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pad Thai",
          imageUrl:
            "https://res.cloudinary.com/jessy/image/upload/v1617622103/Pad-Tha-2-2_sh3nzh.jpg",
          instructions:
            "Cook noodles according to package instructions, just until tender.Rinse under cold water.Mix the sauce ingredients together. Set aside.Heat 1½ tablespoons of oil in a large saucepan or wok over medium-high heat.Add the shrimp, chicken or tofu, garlic and bell pepper. The shrimp will cook quickly, about 1-2 minutes on each side, or until pink. If using chicken, cook until just cooked through, about 3-4 minutes, flipping only once.Push everything to the side of the pan. Add a little more oil and add the beaten eggs.Scramble the eggs, breaking them into small pieces with a spatula as they cook.Add noodles, sauce, bean sprouts and peanuts to the pan (reserving some peanuts for topping at the end). Toss everything to combine.Top with green onions, extra peanuts, cilantro and lime wedges. Serve immediately!",
          cuisineType: "Thai",
          servings: "4",
          cookingTime: "15 minutes",
          calories: "400 cal",
          likes: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Thai Green Currry",
          imageUrl:
            "https://res.cloudinary.com/jessy/image/upload/v1617622138/thai-green-curry_llj34m.jpg",
          instructions:
            "Reduce ¾ cup coconut milk in a pot until thick and coconut oil starts to separate from the coconut milk (if the oil doesn’t separate after it thickens, it’s okay, just proceed with the recipe).Add curry paste and sauté. Stir constantly over medium heat for about 2 minutes until it gets aromatic. (If paste sticks to the bottom of the pan, you can deglaze with a little bit of coconut milk.)Add the chicken and stir to mix with the paste.Add kaffir lime leaves, chicken stock, remaining coconut milk, palm sugar, and fish sauce. Bring to a simmer and leave for 10-15 minutes or until the chicken is fork-tender.Once the curry is done simmering, add bamboo shoots and bring to a boil. If you prefer your peppers to be more cooked, add them at this stage. Once boiling, remove from heat.Taste and add more fish sauce and/or sugar as needed.Stir in Thai basil and spur chilies or bell peppers.Ready to serve with rice.",
          cuisineType: "Thai",
          servings: "4",
          cookingTime: "20 mins",
          calories: "759 cal",
          likes: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Greek Salad",
          imageUrl:
            "https://res.cloudinary.com/jessy/image/upload/v1617621970/greek-salad-2_y6yr1x.jpg",
          instructions:
            "Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve.",
          cuisineType: "Mixed",
          servings: "4",
          cookingTime: "15 mins",
          calories: "116 cal",
          likes: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cuisines", null, {});
  },
};
