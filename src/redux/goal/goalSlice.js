import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('goals')
  ? JSON.parse(localStorage.getItem('goals'))
  : [
      // {
        // categoryId: 0,
        // id: 0,
        // content: 'I want to get a Tech Job min 1400$',
        // milestones: [
        //   {
        //     id: 0,
        //     content: 'I want to strengthen my React skills',
        //     completed: false,
        //   },
        //   {
        //     id: 1,
        //     content: 'strengthen Tailwind skills',
        //     date: 'October 19, 2022',
        //     completed: false,
        //   },
        //   {
        //     id: 2,
        //     content: 'strengthen Rails skills',
        //     completed: false,
        //   },
        //   { id: 3, content: 'strengthen JS skills', completed: false },
          // {
          //   id: 4,
          //   content: 'strengthen Ruby skills',
          //   completed: false,
          // },
          // { id: 5, content: 'strengthen Redis skills', completed: false },
          // {
          //   id: 6,
          //   content: 'strengthen Next skills',
          //   completed: false,
          // },
          // { id: 7, content: 'strengthen GraphQL skills', completed: false },
        // ],
        // motivation: 'I could save some of it to travel outside.',
      // },
    ];

// helper function to update the goal array when any part has been modified
function updateGoals(state, payload) {
  const goals = state.map((goal) => {
    if (goal.id === payload.id) {
      return {
        ...goal,
        ...payload,
      };
    }

    return goal;
  });

  return goals;
}

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal(state, action) {
      const newState = [...state, action.payload]
      localStorage.setItem('goals', JSON.stringify(newState));
      return newState;
    },
    removeGoal(state, action) {
      const goals = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('goals', JSON.stringify(goals));
      return goals;
    },
    editGoal(state, { payload }) {
      const goals = updateGoals(state, payload);
      localStorage.setItem('goals', JSON.stringify(goals));
      return goals;
    },
    updateGoalStatus(state, action) {
      const goals = updateGoals(state, action.payload);
      localStorage.setItem('goals', JSON.stringify(goals));
      return goals;
    },
    updateGoalMilestone(state, { payload }) {
      const { goal, currentMilestoneId, milestoneUpdates } = payload;
      let milestones = goal.milestones.map((m) => {
        if (m.id === currentMilestoneId) {
          return {
            ...m,
            ...milestoneUpdates
          };
        } else {
          return m;
        }
      });
      
      const goals = updateGoals(state, {...goal, milestones});
      localStorage.setItem('goals', JSON.stringify(goals));
      return goals;
    },
    deleteGoalMilestone(state, { payload }) {
      const { goal, currentMilestoneId } = payload;
      let milestones = goal.milestones.filter((m) => {
        if (m.id !== currentMilestoneId) {
          return m;
        }
      });
      const goals = updateGoals(state, {...goal, milestones});
      localStorage.setItem('goals', JSON.stringify(goals));
      return goals;
    }
  },
});

// export actions
export const { addGoal, removeGoal, editGoal, updateGoalStatus, updateGoalMilestone, deleteGoalMilestone } =
  goalSlice.actions;

export default goalSlice.reducer;
