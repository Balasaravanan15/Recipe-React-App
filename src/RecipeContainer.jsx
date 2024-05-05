import React, { useState } from 'react';
import Box from './Box';
import Modal from './Modal';
import './Modal.css'; // Import the modal CSS file

export default function RecipeContainer({ recipeLists }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // State to toggle the modal visibility

  const handleViewMore = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true); // Show the modal when "View More" is clicked
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
    setModalVisible(false); // Hide the modal when closed
  };

  return (
    <div>
      {recipeLists.map((recipe, index) => (
        <Box key={index} title={recipe.title} onViewMoreClick={() => handleViewMore(recipe)} />
      ))}
      <div className={`modal-container ${modalVisible ? 'visible' : ''}`}>
        <Modal isOpen={!!selectedRecipe} onClose={handleCloseModal}>
          {selectedRecipe && (
            <>
              <h2>{selectedRecipe.title}</h2>
              <p><strong>Ingredients:</strong> {Array.isArray(selectedRecipe.ingredients) ? selectedRecipe.ingredients.join(', ') : ''}</p>
              <p><strong>Instructions:</strong> {selectedRecipe.instruction}</p>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
}
