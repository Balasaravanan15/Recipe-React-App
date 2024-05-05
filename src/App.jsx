// App.js
import React, { useState } from 'react';
import './App.css';
import { recipeLists as initialRecipeLists } from './data';
import RecipeContainer from './RecipeContainer';
import Header from './Header';

export default function App() {
  const [recipeLists, setRecipeLists] = useState(initialRecipeLists);

  // Function to add a new recipe to the recipe lists
  const handleAddRecipe = (newRecipe) => {
    setRecipeLists([...recipeLists, newRecipe]);
  };

  const handleSearch = (query) => {
    if (!query) {
      setRecipeLists(initialRecipeLists); // If the search query is empty, show all recipes
    } else {
      const filteredRecipes = initialRecipeLists.filter(recipe =>
        recipe.title.toLowerCase().startsWith(query.toLowerCase())
      );
      setRecipeLists(filteredRecipes);
    }
  };
  return (
    <div>
      <Header recipeLists={recipeLists} onSearch={handleSearch} onAddRecipe={handleAddRecipe} />
      <RecipeContainer recipeLists={recipeLists} />
    </div>
  );
}