import { configureStore } from "@reduxjs/toolkit";
import counterReducer from'./features/counter/counterSlice.js'
import likeDislikekeReducer from './features/LikeDisLike/likeDislikeSlice.js'
const store=configureStore({
    reducer:{
        counter: counterReducer,
        LikeDislike: likeDislikekeReducer,
    }
})
export default store;