import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  {
    id: 1,
    goal: 'Est elit dolor eiusmod labore conse',
  },
  { id: 2, goal: 'Exercitation nulla cupidatat ea ipsum. ' },
  { id: 3, goal: 'Ut exercitation exercitation' },
  {
    id: 4,
    goal: 'Id qui nulla laborum irure esse',
  },
  {
    id: 5,
    goal: 'Adipisicing aliquip nostrud',
  },
  {
    id: 6,
    goal: 'Occaecat consequat laboris reprehenderit',
  },
  {
    id: 7,
    goal: 'Enim deserunt magna sint officia',
  },
  {
    id: 8,
    goal: 'Culpa anim voluptate Lorem',
  },
];

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal(state, action) {
      state.push(action.payload);
    },
  },
});

// export actions
export const { addGoal } = goalSlice.actions;

export default goalSlice.reducer;
