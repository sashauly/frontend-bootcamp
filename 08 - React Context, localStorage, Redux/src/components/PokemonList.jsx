import PropTypes from 'prop-types';
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = React.memo(function PokemonList({ pokemonList }) {
  return (
    <ul className="grid min-w-full grid-flow-row gap-4 p-2 overflow-hidden bg-gray-300 rounded-lg shadow-lg dark:bg-gray-900 list-style-none sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
});

export default PokemonList;

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};
