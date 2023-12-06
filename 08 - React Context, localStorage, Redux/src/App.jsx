import { useEffect } from 'react';
import './App.css';

import PokemonList from './components/PokemonList';
import Search from './components/Search';
import ThemeToggle from './components/ThemeToggle';

import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from './components/LoadingSpinner';
import { ThemeProvider } from './contexts/ThemeContext';
import { fetchPokemonList, reset } from './store/pokemon/pokemonSlice';

export default function App() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const error = useSelector((state) => state.pokemon.error);
  const status = useSelector((state) => state.pokemon.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPokemonList());
    }
  }, [status, dispatch]);

  let content = null;

  if (status === 'loading') {
    content = <LoadingSpinner />;
  } else if (status === 'succeeded') {
    content =
      pokemonList.length > 0 ? (
        <PokemonList pokemonList={pokemonList} />
      ) : (
        <div className="flex flex-col w-full h-full gap-4 p-2 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-900">
          <p>There is nothing here.</p>
          <p className="text-3xl">Start searching!</p>
        </div>
      );
  } else if (status === 'failed') {
    content = <p className="text-red-500">{error}</p>;
  }

  return (
    <ThemeProvider>
      <div className="container">
        <div className="flex flex-col items-center gap-2 py-2">
          <ThemeToggle />

          <h1 className="text-3xl font-bold">Pokemon List</h1>
          <span>
            made by:{' '}
            <a
              href="https://github.com/sashauly"
              target="_blank"
              rel="noreferrer"
            >
              stonehom
            </a>
          </span>
          <Search />

          <span>Total: {pokemonList.length}</span>
          <button
            onClick={() => dispatch(reset())}
            className="px-2 text-base font-semibold text-white bg-gray-900 border rounded-lg dark:bg-white dark:text-gray-900"
          >
            Reset List
          </button>
          {content}
        </div>
      </div>
    </ThemeProvider>
  );
}
