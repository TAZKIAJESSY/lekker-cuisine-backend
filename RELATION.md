=>cuisine-cuisineingredient-ingredient[many-many relationship]
=>user-favourite-cuisine[many to many]
=>user-shoppingList-ingredient[many to many]

1.  **cuisine----cuisineIngredient--ingredient**

**cusine**

      cuisine.belongsToMany(models.ingredient, {
        through: "cuisineIngredients",
        foreignKey: "cuisineId",
      });

**cuisineIngredient**
cuisineIngredient.belongsTo(models.cuisine);
cuisineIngredient.belongsTo(models.ingredient);

**ingredient**
ingredient.belongsToMany(models.cuisine, {
through: "cuisineIngredients",
foreignKey: "ingredientId",
});

ingredient.hasMany(models.shoppingList);
}

2.  **user----favourite--cuisine**

**user**
user.hasMany(models.cuisine, { as: "owner" });

      user.belongsToMany(models.cuisine, {
        through: "favourites",
        foreignKey: "cuisineId",
        as: "fav",
      });

**cuisine**
cuisine.belongsTo(models.user);

      cuisine.belongsToMany(models.user, {
        through: "favourites",
        foreignKey: "cuisineId",
        as: "fav",
      });

**favourite**
favourite.belongsTo(models.user);
favourite.belongsTo(models.cuisine);

3.  **user----shoppinglist--ingredient**

**shoppingList**
shoppingList.belongsTo(models.user);
shoppingList.belongsTo(models.ingredient);
