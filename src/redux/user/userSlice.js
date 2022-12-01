import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {
       name: ''
    };
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        assignUser(state, action) {
            state = {...state, ...action.payload}
            localStorage.setItem('user', JSON.stringify(state));
            return state
        },
    },
});

// export actions
export const { assignUser } = userSlice.actions;

export default userSlice.reducer;
