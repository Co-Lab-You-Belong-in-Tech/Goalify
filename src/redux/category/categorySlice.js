import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 0,
  categories: [
    {
      id: 0,
      category: 'Active goals',
    },
    {
      id: 1,
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
    modifyCategory(state, action) {
       state.categories = action.payload;
    },
  },
});

// export actions
export const { updateSelected, modifyCategories, modifyCategory } = categorySlice.actions;

export default categorySlice.reducer;
