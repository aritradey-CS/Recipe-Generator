// src/RecipeList.js
import React from 'react';

function RecipeList({ recipes }) {
  return (
    <div>
      <h2>Recipe Suggestions:</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
