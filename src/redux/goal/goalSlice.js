import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

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
    },
});

// export actions
export const {addGoal, removeGoal, editGoal} = goalSlice.actions;

export default goalSlice.reducer;
