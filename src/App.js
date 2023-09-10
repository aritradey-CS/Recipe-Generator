// src/App.js
import React, { useState } from 'react';
import IngredientInput from './IngredientInput';
import RecipeList from './RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = (ingredients) => {
    // Simulate fetching recipe suggestions from a mock API
    const mockAPIResponse = [
      'Pasta with Tomato Sauce',
      'Chicken Stir-Fry',
      'Vegetable Curry',
    ];

    // Update the state with the recipe suggestions
    setRecipes(mockAPIResponse);
  };

  return (
    <div className="App">
      <h1>Recipe Generator</h1>
      <IngredientInput onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
