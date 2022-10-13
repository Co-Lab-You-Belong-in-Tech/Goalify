import { createSlice } from '@reduxjs/toolkit';

const goalSlice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {
    addGoal(state, action) {
      state.push(action.payload);
    },
  },
});

// export actions
export const { addGoal } = goalSlice.actions;

export default goalSlice.reducer;
