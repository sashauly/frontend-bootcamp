import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../store/pokemon/pokemonSlice';

const Search = React.memo(function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        return response.json();
      })
      .then((pokemon) => {
        dispatch(addPokemon(pokemon));
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex justify-center gap-2">
      <label htmlFor="search">
        <span className="hidden">Search</span>
      </label>
      <input
        className="px-2 text-sm text-gray-700 bg-gray-200 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none"
        type="search"
        id="search"
        name="search"
        placeholder="Search Pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
      <button
        className="px-2 text-base font-semibold text-white bg-gray-900 border rounded-lg dark:bg-white dark:text-gray-900"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
});

export default Search;
