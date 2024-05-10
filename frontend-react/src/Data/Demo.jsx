import React from 'react';

const ingredients = [
  {
    ingredientCategory: "bread",
    ingredientName: "white Bread"
  },
  {
    ingredientCategory: "bread",
    ingredientName: "red Bread"
  },
  {
    ingredientCategory: "souce",
    ingredientName: "tomato souce"
  },
  {
    ingredientCategory: "souce",
    ingredientName: "onion souce"
  }
];

const IngredientsList = () => {
  // Grouping ingredients by category
  const categorizedIngredients = ingredients.reduce((acc, ingredient) => {
    const { ingredientCategory, ingredientName } = ingredient;
    if (!acc[ingredientCategory]) {
      acc[ingredientCategory] = [];
    }
    acc[ingredientCategory].push(ingredientName);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(categorizedIngredients).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {categorizedIngredients[category].map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;
