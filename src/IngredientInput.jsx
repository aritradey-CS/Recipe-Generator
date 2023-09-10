// src/IngredientInput.js
import React, { useState } from 'react';

function IngredientInput({ onSearch }) {
  const [ingredients, setIngredients] = useState('');

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSearch = () => {
    // Pass the ingredients to the parent component for searching
    onSearch(ingredients);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default IngredientInput;
