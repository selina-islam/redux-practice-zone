import { createSlice } from "@reduxjs/toolkit";

const initialState={
    likeCount:0,
    dislikeCount:0,
}
const likeDislikeSlice= createSlice({
    name: 'likeDislike',
    initialState,
    reducers:{
        incrementLike :(state)=>{
            state.likeCount=state.likeCount +1
        },
        decrementLike : (state)=>{
            state.dislikeCount=state.dislikeCount -1
        } ,
        resetLikeDislike :(state)=>{
            state.likeCount=0;
            state.dislikeCount=0;
        }
    
    }
})

export const {incrementLike, decrementLike, resetLikeDislike}=likeDislikeSlice.actions;
export default likeDislikeSlice.reducer