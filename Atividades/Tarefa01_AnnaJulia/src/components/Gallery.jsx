import React from 'react';
import { characters } from '../data/characters';
import Card from './Card';
import Details from './Details';

const Gallery = ({ selectedCharacter, setSelectedCharacter }) => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {characters.map((character) => (
          <Card 
            key={character.id} 
            character={character} 
            onClick={setSelectedCharacter} 
          />
        ))}
      </div>
      <Details character={selectedCharacter} />
    </div>
  );
};

export default Gallery;