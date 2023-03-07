/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRocketsData = createAsyncThunk(
  'rockets/fetchRocketsData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');

    if (response.status !== 200) return [];

    const { data } = response;
    const results = data.map((rocket) => ({
      rocket_id: rocket.id,
      rocket_name: rocket.name,
      rocket_type: rocket.type,
      rocket_images: rocket.flickr_images,
      rocket_description: rocket.description,
    }));
    return results;
  },
);

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.rocket_id !== action.payload) return rocket;

        return { ...rocket, reserved: true };
      });
      return { rockets: [...newState] };
    },
    cancelRocket(state, action) {
      const newState2 = state.rockets.map((rocket) => {
        if (rocket.rocket_id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return { ...state, rockets: [...newState2] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsData.fulfilled, (state, { payload }) => ({
      ...state,
      rockets: [...payload],
    }));
  },
});

export default rockets;

export const { reserveRocket, cancelRocket } = rockets.actions;
