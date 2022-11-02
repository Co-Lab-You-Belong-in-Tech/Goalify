import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 0,
  catagories: [
    {
      id: 0,
      catagory: 'All goals',
    },
    {
      id: 1,
      catagory: 'Active goals',
    },
    {
      id: 2,
      catagory: 'Paused goals',
    },
  ],
};

const catagorySlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    updateSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

// export actions
export const { updateSelected } = catagorySlice.actions;

export default catagorySlice.reducer;
