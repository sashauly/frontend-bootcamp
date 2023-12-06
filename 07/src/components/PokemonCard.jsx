import PropTypes from 'prop-types';
import React from 'react';

const PokemonCard = React.memo(function PokemonCard({ pokemon, onRemove }) {
  return (
    <li className="flex flex-col gap-2 p-2 rounded-lg shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-800 overflow-hidden">
      <img
        className="w-full"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="font-bold text-xl">{pokemon.name}</p>

      <button
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        onClick={() => onRemove(pokemon.name)}
      >
        ❌
      </button>
    </li>
  );
});

export default PokemonCard;

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
    }),
    forms: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};
