/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchRocketsData = createAsyncThunk(
  'rockets/fetchRocketsData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');

    if (response.status !== 200) return 'An error occured!';

    const { data } = response;
    const results = data.map((rocket) => ({
      rocket_id: rocket.id,
      rocket_name: rocket.name,
      rocket_type: rocket.type,
      rocket_images: rocket.flickr_images,
      rocket_description: rocket.description,
    }));
    return results;
  }
);

const initialState = {
  rockets: [],
};

const rockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsData.fulfilled, (state, { payload }) => ({
      ...state,
      rockets: [...payload],
    }));
  },
});

export default rockets;
