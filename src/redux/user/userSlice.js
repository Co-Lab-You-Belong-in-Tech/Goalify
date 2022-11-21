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
        assignName(state, action) {
            state.name = action.payload;
            localStorage.setItem('user', JSON.stringify(state));
        },
    },
});

// export actions
export const { assignName } = userSlice.actions;

export default userSlice.reducer;
