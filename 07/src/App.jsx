import { useCallback /*, useMemo*/, useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Search from './components/Search';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  // const memoizedPokemonList = useMemo(() => {
  //   return pokemonList;
  // }, [pokemonList]);

  const handleSearch = useCallback(
    (pokemon) => {
      if (!pokemonList.some((p) => p.name === pokemon.name)) {
        setPokemonList((prevList) => [pokemon, ...prevList]);
      } else {
        alert('This Pokemon is already in the list');
      }
    },
    [pokemonList]
  );

  const handleRemove = useCallback((name) => {
    setPokemonList((prevList) =>
      prevList.filter((pokemon) => pokemon.name !== name)
    );
  }, []);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        return Promise.all(promises);
      })
      .then((pokemonList) => setPokemonList(pokemonList))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col items-center py-2 gap-2">
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
        <Search onSearch={handleSearch} />
        <span>Total: {pokemonList.length}</span>
        <PokemonList pokemonList={pokemonList} onRemove={handleRemove} />
      </div>
    </div>
  );
}
