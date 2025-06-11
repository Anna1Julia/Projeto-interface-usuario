import React from 'react';

const Card = ({ character, onClick }) => {
  return (
    <div 
      className="card" 
      onClick={() => onClick(character)}
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-color)'
      }}
    >
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
};

export default Card;