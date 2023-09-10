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
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter ingredients (comma-separated)"
            value={ingredients}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default IngredientInput;
