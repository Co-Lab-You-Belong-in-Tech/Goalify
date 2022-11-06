import {createSlice} from '@reduxjs/toolkit';

const initialState = [{
    categoryId: 1, id: 0,
    content: 'I want to get a Tech Job min 1400$', milestones: [{
        id: 0, content: 'I want to strengthen my React skills', completed: false,
    }, {
        id: 1, content: 'strengthen Tailwind skills', date: 'October 19, 2022', completed: false,
    }, {
        id: 2, content: 'strengthen Rails skills', completed: false,
    }, {id: 3, content: 'strengthen JS skills', completed: false}, {
        id: 4, content: 'strengthen Ruby skills', completed: false
    }, {id: 5, content: 'strengthen Redis skills', completed: false}, {
        id: 6, content: 'strengthen Next skills', completed: false
    }, {id: 7, content: 'strengthen GraphQL skills', completed: false},
    ], motivation: 'I could save some of it to travel outside.',
},];

const goalSlice = createSlice({
    name: 'goals', initialState, reducers: {
        addGoal(state, action) {
            state.push(action.payload);
        }, removeGoal(state, action) {
            return state.filter((item) => item.id !== action.payload);
        }, editGoal(state, {payload}) {
            return state.map((goal) => {
                if (goal.id === payload.id) {
                    return {
                        ...goal, ...payload,
                    };
                }

                return goal;
            });
        },
        updateGoalStatus(state, {payload}) {
            return state.map((goal) => {
                if (goal.id === payload.id) {
                    return {
                        ...goal, catagoryId: payload.catagoryId,
                    };
                }

                return goal;
            });
        },
    },
});

// export actions
export const {
    addGoal, removeGoal, editGoal,
    updateGoalStatus,
} = goalSlice.actions;

export default goalSlice.reducer;
