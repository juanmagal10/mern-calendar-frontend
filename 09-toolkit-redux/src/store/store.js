import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './slices/apis';
import {counterSlice} from './slices/counter'
import { pokemonSlice } from './slices/pokemons/pokemonSlice';

export const store = configureStore({
    reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    [todoApi.reducerPath]:todoApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(todoApi.middleware)
})