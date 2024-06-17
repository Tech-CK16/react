import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            // originalState = {items: ["pizza"]}
            // RTK - either Mutate the existing state or return a New State
            // state.items.length = 0; // originalState = {items: []}
            return { items: [] }; // this new object will be replaced inside originalState = {items: []}
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
