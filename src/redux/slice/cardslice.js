import { createSlice } from "@reduxjs/toolkit";
import { loadstate } from "../../utils/savestate";

const initialState = loadstate('card') || {
    data: []
};

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
    },
});

export const { addData, removeData } = cardSlice.actions
export default cardSlice.reducer

