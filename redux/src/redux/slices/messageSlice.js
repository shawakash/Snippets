import {createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
    name: 'messageSlice',          // name of the slice
    initialState: {
        message: ''               // initial state
    },
    reducers: {                  // responsible for changing state
        setMessage: (state,action) => {     // what to change
            state.message = action.payload
        },
        resetMessage: (state,action) => {   // what to change
            state.message = ''
        }
    }
});

export default messageSlice.reducer;    // exports the reducers
export const {setMessage, resetMessage} = messageSlice.actions;      // exports the actions
