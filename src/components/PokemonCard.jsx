// src/components/PokemonCard.jsx
import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        </div>
        <div className="card-back">
          <h3>{pokemon.name}</h3>
          <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
          <p>Height: {pokemon.height * 10} cm</p>
          <p>Weight: {pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

