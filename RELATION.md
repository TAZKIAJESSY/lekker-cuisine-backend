=>user-cuisine[one to many relationship]
=>cuisine-ingredient[many-many relationship]
=>user-checklist[one to many]

**user**
user.hasMany(models.cuisine);

user.hasMany(models.checkList, { as: "userLikes" });

user.belongsToMany(models.cuisine, {
through: "checkLists",
foreignKey: "userId",
}

**cusine**
cuisine.belongsTo(models.user);

cuisine.belongsToMany(models.ingredient, {
through: "cuisineIngredients",
foreignKey: "cuisineId",
}

**checkList**
checkList.belongsTo(models.user);
checkList.belongsTo(models.cuisine);
