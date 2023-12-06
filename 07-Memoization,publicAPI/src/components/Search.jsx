import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = React.memo(function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        return response.json();
      })
      .then((data) => onSearch(data))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex justify-center">
      <label htmlFor="search">
        <span className="hidden">Search</span>
      </label>
      <input
        className="border px-2 rounded-lg text-sm focus:outline-none"
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
        className="border px-2 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-lg text-base font-semibold"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
});

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
