/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import covidAPI from '../API/APIHandler';

export const fetchCountries = createAsyncThunk(
  'covid/fetchCountries',
  covidAPI.fetchAllCountries,
);

export const fetchTotalData = createAsyncThunk(
  'covid/fetchTotalData',
  covidAPI.fetchAllContinents,
);

const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    countries: [],
    error: null,
    totalData: {
      totalCases: 0,
      totalDeaths: 0,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchTotalData.fulfilled, (state, action) => {
        state.totalData.totalCases = action.payload.reduce(
          (acc, cur) => acc + cur.cases,
          0,
        );
        state.totalData.totalDeaths = action.payload.reduce(
          (acc, cur) => acc + cur.deaths,
          0,
        );
        state.error = null;
      })
      .addCase(fetchTotalData.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const covidActions = covidSlice.actions;

export default covidSlice.reducer;
