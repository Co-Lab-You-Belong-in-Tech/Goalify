import {createSlice} from '@reduxjs/toolkit';

const initialState = [{
    id:0, content:"I want to get a Tech Job min 1500$", milestones:[
        { content: "I want to strengthen my React skills"}],
    motivation: "I could save some of it to travel outside."
}];

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
