import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cards/cardSlice';

// Aquí exportamos el store de Redux
export const store = configureStore({
  reducer: {
    cards,
  },
});
