import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
  middleware: [thunk],
});

export default store;
