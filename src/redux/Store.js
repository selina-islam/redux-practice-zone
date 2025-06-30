import { configureStore } from "@reduxjs/toolkit";
import counterReducer from'./features/counter/counterSlice.js'
import likeDislikekeReducer from './features/LikeDisLike/likeDislikeSlice.js'
import todosReducer from './features/todos/todos.js'
import preferencesReducer from './features/preferences/preferences.js'
const store=configureStore({
    reducer:{
        counter: counterReducer,
        LikeDislike: likeDislikekeReducer,
        todos: todosReducer,
        preferences: preferencesReducer
    }
})
export default store;