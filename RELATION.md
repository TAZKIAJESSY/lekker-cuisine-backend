=>user-cuisine[one to many relationship]
=>cuisine-ingredient[many-many relationship]
=>user-favourite[one to many]
=>user-shoppingList[one to many]

**user**
user.hasMany(models.cuisine);

user.hasMany(models.favourite);

user.hasMany(models.shoppingList);

**cusine**
cuisine.belongsTo(models.user);

cuisine.belongsToMany(models.ingredient, {
through: "cuisineIngredients",
foreignKey: "cuisineId",
});

cuisine.hasMany(models.favourite);

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

**favourite**
favourite.belongsTo(models.user);
favourite.belongsTo(models.cuisine);

**shoppingList**
shoppingList.belongsTo(models.user);
shoppingList.belongsTo(models.ingredient);
