import {createSlice} from '@reduxjs/toolkit'

const noteSlice = createSlice({
    name: 'noteSlice',
    initialState: {
        notes: []
    },
    reducers: {
        setNote: (state, action) => {
            state.notes.push(action.payload);
        },
        delNote: (state, action) => {
            state.notes = state.notes.filter((iterativeNote)=> (iterativeNote.id != action.payload));
        }
    }
});

export default noteSlice.reducer;
export const {setNote, delNote} = noteSlice.actions;