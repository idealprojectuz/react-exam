import { createSlice } from "@reduxjs/toolkit";
import { loadstate } from "../../utils/savestate";

const initialState = loadstate('like') || {
    data: [],
    totallike: 0,
};

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addlike: (state, action) => {
            state.data.push(action.payload);
        },
        removeLike: (state, action) => {
            const id = action.payload.id;
            const index = state.data.findIndex((obj) => obj.id === id);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        },
        totallike: (state, action) => {
            state.totallike = state.data.length
        },
    },
});

export const { addlike, removeLike, totallike } = likeSlice.actions
export default likeSlice.reducer

