import React, { useState } from 'react';
import './Header.css';

export default function Header({ recipeLists, onSearch, onAddRecipe }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instruction: '' });

  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  const handleAddRecipeClick = () => {
    setIsFormVisible(true);
  };

  const handleSaveRecipe = () => {
    onAddRecipe(newRecipe);
    setIsFormVisible(false);
    setNewRecipe({ title: '', ingredients: '', instruction: '' });
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setNewRecipe({ title: '', ingredients: '', instruction: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  return (
    <div className="Header">
      <h1>Recipe Book</h1>
      <div className="header-buttons">
        <form>
          <input 
            type="text" 
            placeholder="Search By Recipe Name"
            onChange={handleSearchChange}
          />
        </form>
        <button onClick={handleAddRecipeClick}>Add Recipe</button>
      </div>
      {isFormVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCancel}>&times;</span>
            <h2>Add Recipe</h2>
            <label>Title:</label>
            <input 
              type="text" 
              placeholder="Title" 
              name="title"
              value={newRecipe.title}
              onChange={handleInputChange}
            />
            <br></br>
            <label>Ingredients:</label>
            <input 
              type="text" 
              placeholder="Ingredients" 
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
            />
            <br></br>
            <label>Instructions:  </label>
            <textarea 
              placeholder="Instructions" 
              name="instruction"
              value={newRecipe.instruction}
              onChange={handleInputChange}
            />
            <div className="form-buttons">
              <button onClick={handleSaveRecipe}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
