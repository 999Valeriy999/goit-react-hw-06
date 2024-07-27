import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filtersSlice.actions;

// Селектор 
export const selectFilter = (state) => state.filters;

// Экспортируем filtersReducer
export const filtersReducer = filtersSlice.reducer;

export default filtersSlice.reducer;