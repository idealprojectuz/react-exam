import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import cardslice from './slice/cardslice'
import likeSlice from './slice/likeslice.js'
import { addlike, removeLike, totallike } from './slice/likeslice.js';
import { addData, removeData, totalcount, totalprice, increment, decrement } from './slice/cardslice'
const productmiddleware = createListenerMiddleware();

productmiddleware.startListening(
    {
        matcher: isAnyOf(addData, removeData),
        effect: (_, api) => {
            api.dispatch(totalcount())
        }
    }
)

const totalpricemiddleware = createListenerMiddleware();

totalpricemiddleware.startListening(
    {
        matcher: isAnyOf(increment, decrement, addData, removeData),
        effect: (_, api) => {
            api.dispatch(totalprice())
        }
    }
)

const totallikemiddleware = createListenerMiddleware();

totallikemiddleware.startListening(
    {
        matcher: isAnyOf(addlike, removeLike),
        effect: (_, api) => {
            api.dispatch(totallike())
        }
    }
)
export const store = configureStore({
    reducer: {
        card: cardslice,
        like: likeSlice,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(totalpricemiddleware.middleware, totallikemiddleware.middleware, productmiddleware.middleware)
})
