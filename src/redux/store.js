import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rockets.reducer,
  },
});

export default store;
