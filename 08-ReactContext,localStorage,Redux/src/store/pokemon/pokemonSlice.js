import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchPokemonList',
  async () => {
    const localStorageData = localStorage.getItem('pokemonList');
    if (localStorageData) {
      console.log('[LOG]: fetching from local storage');
      return JSON.parse(localStorageData);
    } else {
      console.log('[LOG]: fetching from API');
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((response) => response.json())
      );
      const pokemonList = await Promise.all(promises);

      const simplifiedPokemonList = pokemonList.map((pokemon) => ({
        name: pokemon.name,
        sprites: {
          front_default: pokemon.sprites.front_default,
        },
      }));
      console.log('[LOG]: save to the local storage');
      localStorage.setItem(
        'pokemonList',
        JSON.stringify(simplifiedPokemonList)
      );

      return simplifiedPokemonList;
    }
  }
);

const initialState = {
  pokemonList: [],
  status: 'idle',
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, { payload: pokemon }) => {
      if (!state.pokemonList.some((p) => p.name === pokemon.name)) {
        const simplifiedPokemon = {
          name: pokemon.name,
          sprites: {
            front_default: pokemon.sprites.front_default,
          },
        };
        state.pokemonList.push(simplifiedPokemon);
        console.log(`[LOG]: ${pokemon.name} was added to the list`);
        localStorage.setItem('pokemonList', JSON.stringify(state.pokemonList));
        console.log('[LOG]: saved to the local storage');
      } else {
        alert('This Pokemon is already in the list');
      }
    },
    removePokemon: (state, { payload: name }) => {
      state.pokemonList = state.pokemonList.filter(
        (pokemon) => pokemon.name !== name
      );
      console.log(`[LOG]: ${name} was removed from the list`);
      localStorage.setItem('pokemonList', JSON.stringify(state.pokemonList));
      console.log('[LOG]: saved to the local storage');
    },
    reset: () => {
      localStorage.removeItem('pokemonList');
      console.log('[LOG]: remove pokemonList from the local storage');
      console.log('[LOG]: reset the state');
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addPokemon, removePokemon, reset } = pokemonSlice.actions;

export default pokemonSlice.reducer;
