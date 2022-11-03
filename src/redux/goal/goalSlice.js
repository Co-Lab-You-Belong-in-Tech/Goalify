import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    catagoryId: 1,
    id: 0,
    currentMilestone: 0,
    content: 'I want to get a Tech Job min 1500$',
    milestones: [
      {
        id: 0,
        content: 'I want to strengthen my React skills',
        completed: false,
      },
      {
        id: 1,
        content: 'strengthen Tailwind skills',
        date: 'October 19, 2022',
        completed: false,
      },

      {
        id: 2,
        content: 'strengthen Rails skills',
        completed: false,
      },
      { id: 3, content: 'strengthen JS skills', completed: false },
    ],
    motivation: 'I could save some of it to travel outside.',
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
      return state.map((goal) => {
        if (goal.id === payload.id) {
          return {
            ...goal,
            ...payload,
          };
        }

        return goal;
      });
    },
    updateProgress(state, { payload }) {
      return state.map((goal) => {
        if (
          goal.id === payload.id &&
          goal.currentMilestone < goal.milestones.length - 1
        ) {
          let milestoness = goal.milestones.map((m) => {
            if (m.id === goal.milestones[goal.currentMilestone].id) {
              return {
                ...m,
                completed: true,
              };
            } else {
              return m;
            }
          });
          return {
            ...goal,
            currentMilestone: goal.currentMilestone + 1,
            milestones: milestoness,
          };
        }

        return goal;
      });
    },
    updateGoalStatus(state, { payload }) {
      return state.map((goal) => {
        if (goal.id === payload.id) {
          return {
            ...goal,
            catagoryId: payload.catagoryId,
          };
        }

        return goal;
      });
    },
  },
});

// export actions
export const {
  addGoal,
  removeGoal,
  editGoal,
  updateProgress,
  updateGoalStatus,
} = goalSlice.actions;

export default goalSlice.reducer;
