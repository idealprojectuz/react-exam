import { createSlice } from "@reduxjs/toolkit";
import { loadstate } from "../../utils/savestate";

const initialState = loadstate('card') || {
    data: [],
    totalcount: 0,
    totalprice: 0,
};

const calculateTotalPrice = (data) => {
    let totalPrice = 0;
    data.forEach((item) => {
        totalPrice += Number(item.count) * Number(item.price);
    });
    return totalPrice;
}
const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },
        removeData: (state, action) => {
            const id = action.payload.id;
            const index = state.data.findIndex((obj) => obj.id === id);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        },
        totalprice: (state, action) => {
            state.totalprice = calculateTotalPrice(state.data);
        },
        totalcount: (state, action) => {
            state.totalcount = state.data.length
        },
        increment: (state, action) => {
            const id = action.payload.id
            const index = state.data.findIndex(obj => obj.id === id)
            state.data[index].count = Number(state.data[index].count) + Number(1)
        },
        decrement: (state, action) => {
            const id = action.payload.id
            const index = state.data.findIndex(obj => obj.id === id)
            if (state.data[index].count > 1) {
                state.data[index].count = Number(state.data[index].count) - Number(1)
            }
        }
    },
});

export const { addData, removeData, totalcount, increment, decrement, totalprice } = cardSlice.actions
export default cardSlice.reducer

