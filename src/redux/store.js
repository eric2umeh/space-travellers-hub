import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rocketsSlice';
import missions from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rockets.reducer,
    missions: missions.reducer,
  },
});

export default store;
