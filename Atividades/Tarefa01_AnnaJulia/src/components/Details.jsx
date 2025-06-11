import React from 'react';

const Details = ({ character }) => {
  if (!character) return null;

  return (
    <div 
      className="details"
      style={{
        backgroundColor: 'var(--details-bg)',
        color: 'var(--text-color)'
      }}
    >
      <div className="details-content">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
    </div>
  );
};

export default Details;