import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('products/fetch', async () => {       // returns a promise with either rejected, fullfilled, pending. All these 3 need to be handled by the reducer carefully
    const apiUrl = `https://api.escuelajs.co/api/v1/products`;
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    return (jsonData);
});

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        status: 'idle',     // idle, loading, success, failed
        error: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {                     // to handle the promises from thunk
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            }).addCase(fetchData.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'success'
            }).addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                    state.error = action.error.message
            });
    }
});

export default productSlice.reducer;
export const {  } = productSlice.actions;