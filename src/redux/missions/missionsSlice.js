import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchMissionsData = createAsyncThunk(
  'missions/fetchMissionsData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');

    const { data } = response;
    data.map((mission) => ({
      mission_id: mission.id,
      mission_name: mission.name,
      mission_description: mission.description,
    }));
    return data;
  },
);

const initialState = {
  missions: [],
};

const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissionsData.pending]: (state) => {
      state.loading = true;
    },
    [fetchMissionsData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchMissionsData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default missions;
