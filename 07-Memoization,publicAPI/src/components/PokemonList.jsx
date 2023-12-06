import PropTypes from 'prop-types';
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = React.memo(function PokemonList({ pokemonList, onRemove }) {
  return (
    <ul className="bg-gray-300 dark:bg-gray-900 rounded-lg shadow-lg p-2 list-style-none grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-hidden">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} onRemove={onRemove} />
      ))}
    </ul>
  );
});

export default PokemonList;

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
