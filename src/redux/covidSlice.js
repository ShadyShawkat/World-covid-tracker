/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidAPI from '../API/APIHandler';

export const fetchCountries = createAsyncThunk(
  'covid/fetchCountries',
  covidAPI.fetchAllCountries,
);

const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    countries: {},
    loadingState: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        if (state.loadingState === 'idle') {
          state.loadingState = 'pending';
        }
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        if (state.loadingState === 'pending') {
          state.loadingState = 'idle';
        }
        const { countries } = action.payload.dates['2022-01-31'];
        state.countries = countries;
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        if (state.loadingState === 'pending') {
          state.loadingState = 'idle';
        }
        state.error = action.error;
      });
  },
});

export const covidActions = covidSlice.actions;

export default covidSlice.reducer;
