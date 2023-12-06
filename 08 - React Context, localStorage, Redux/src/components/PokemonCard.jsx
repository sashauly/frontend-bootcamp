import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removePokemon } from '../store/pokemon/pokemonSlice';

const PokemonCard = React.memo(function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col gap-2 p-2 overflow-hidden bg-white rounded-lg shadow-lg dark:shadow-gray-900 dark:bg-gray-800">
      <img
        className="w-full"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="text-xl font-bold">{pokemon.name}</p>

      <button
        className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
        onClick={() => dispatch(removePokemon(pokemon.name))}
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
  }),
};
