import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('category')
  ? JSON.parse(localStorage.getItem('category'))
  : {
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
localStorage.setItem('category', JSON.stringify(initialState));
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateSelected(state, action) {
      state.selected = action.payload;
      localStorage.setItem('category', JSON.stringify(state));
    },
    modifyCategories(state, action) {
      state.categories = [...action.payload];
      localStorage.setItem('category', JSON.stringify(state));
    },
    modifyCategory(state, action) {
      state.categories = action.payload;
      localStorage.setItem('category', JSON.stringify(state));
    },
  },
});

// export actions
export const { updateSelected, modifyCategories, modifyCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
