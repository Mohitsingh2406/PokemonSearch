// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search for a Pokémon"
      />
    </div>
  );
};

export default SearchBar;

