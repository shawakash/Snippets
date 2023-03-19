import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: [{
            id: nanoid(10),
            quantity: 0
        }]
    },
    reducers: {
        addInCart: (state, action) => {
            const item = state.cart.find((cartItem) => cartItem.id == action.payload.id);
            if(item) {
                item.quantity += 1;
                return ;
            }
            state.cart.push({...action.payload, quantity: 1});
        },
        delInCart: (state, action) => {
            const item = state.cart.find((ele) => ele.id == action.payload);
            console.log(item)
            if(!(item)){
                return;
            }
            if(item.quantity == 0){
                state.cart = state.cart.filter((cartItem) => cartItem.id != action.payload);
                return;
            }
            (state.cart.find((ele) => ele.id == action.payload)).quantity -= 1;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((cartItem) => cartItem.id != action.payload);
        }
    }
});

export default cartSlice.reducer;
export const {addInCart, delInCart, removeFromCart} =cartSlice.actions