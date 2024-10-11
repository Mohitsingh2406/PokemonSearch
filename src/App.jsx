// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const results = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokeDetails = await axios.get(pokemon.url);
            return pokeDetails.data;
          })
        );
        setPokemons(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Pokémon Search</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <p className="loading-text">Loading Pokémon...</p>
      ) : (
        <div className="pokemon-grid">
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          ) : (
            <p className="no-results">No Pokémon found!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;


