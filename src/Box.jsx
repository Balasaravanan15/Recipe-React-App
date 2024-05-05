import React from 'react';
import './Box.css';

export default function Box({ title, onViewMoreClick }) {
  const handleClick = () => {
    if (onViewMoreClick) {
      onViewMoreClick();
    }
  };

  return (
    <div className='Box'>
      <h3>{title}</h3>
      <button onClick={handleClick}>View More</button>
    </div>
  );
}
