import { configureStore } from "@reduxjs/toolkit";
import counterReducer from'./features/counter/counterSlice.js'
import likeDislikekeReducer from './features/LikeDisLike/likeDislikeSlice.js'
import todosReducer from './features/todos/todos.js'
import preferencesReducer from './features/preferences/preferences.js'
import MiddlewareReducer from './features/MiddleWareTodo/MiddleTodoSlice.js'
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
const logger= createLogger()


const store=configureStore({
    reducer:{
        counter: counterReducer,
        LikeDislike: likeDislikekeReducer,
        todos: todosReducer,
        preferences: preferencesReducer,
        middlwaretodos: MiddlewareReducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
export default store;