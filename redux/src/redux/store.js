import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import noteReducer from "./slices/notesSlices";

export default configureStore({
    reducer: {
        messageReducer,
        noteReducer
    }                   
});

// only key is provided as in js it means name the value same as key

// export default configureStore({
//     key value for reducers from different slices
// });
// configureStore is used to combine all slices reducers
// now move to index.js to tell the app that a general store is present