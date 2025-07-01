import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchMiddleWareTodos= createAsyncThunk('middlewareTodos/ fetchmiddlewareTodos', async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8');
    const data= await response.json();
    return data;
})



const MiddleWareTodoSlice= createSlice({
    name: 'MiddleWareTodo',
    initialState:{
        items:[],
        loading: false,
        error: null,
    },
    reducers:{
        addTodo: (state, action)=>{
            state.items.push({
                id: Date.now(),
                text: action.payload,
                complete:false,
            })
        },

        removeTodo:(state, action)=>{
            state.items= state.items.filter((todo)=> todo.id !== action.payload)
        },

        toggleTodo: (state, action)=>{
            const todo= state.items.find((todo)=> todo.id === action.payload)
            if(todo){
                todo.complete= !todo.complete
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchMiddleWareTodos.pending, (state)=>{
            state.loading= true;
            state.error= null;
        })
        .addCase(fetchMiddleWareTodos.fulfilled, (state, action)=>{
            state.loading= false;
            state.items= action.payload
        })
        .addCase(fetchMiddleWareTodos.rejected, (state, action)=>{
            state.loading= false;
            state.error= action.error.message
        })
    }
})

export const {addTodo, removeTodo, toggleTodo}= MiddleWareTodoSlice.actions;
export default MiddleWareTodoSlice.reducer;