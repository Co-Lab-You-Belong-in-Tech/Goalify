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
    removeGoal(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    editGoal(state, { payload }) {
      const res = state.map((goal) => {
        if (goal.id === payload.id) {
          return {
            ...payload,
          };
        }
        return goal;
      });
      return res;
    },
  },
});

// export actions
export const { addGoal, removeGoal, editGoal } = goalSlice.actions;

export default goalSlice.reducer;
