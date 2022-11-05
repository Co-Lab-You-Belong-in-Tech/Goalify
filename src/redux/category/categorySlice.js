import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 0,
  categories: [
    {
      id: 0,
      category: 'All goals',
    },
    {
      id: 1,
      category: 'Active goals',
    },
    {
      id: 2,
      category: 'Paused goals',
    },
  ],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateSelected(state, action) {
      state.selected = action.payload;
    },
    modifyCategories(state, action) {
      state.categories = [...action.payload];
    },
  },
});

// export actions
export const { updateSelected, modifyCategories } = categorySlice.actions;

export default categorySlice.reducer;
