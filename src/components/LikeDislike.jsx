import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementLike, incrementLike, resetLikeDislike } from '../redux/features/LikeDisLike/likeDislikeSlice'

const LikeDislike = () => {
    //useElector is used to access the state from the redus store
const {dislikeCount,  likeCount}= useSelector((state)=> state.LikeDislike)
const dispatch= useDispatch()


    // This component is a simple like & dislike app
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-2xl py-2 font-black'>Like & Dislike App</h1>
        <div className='space-x-3'>
            <button className='border px-4 rounded text-red-500'>Dislike {dislikeCount}</button>
            <button className='border px-4 rounded text-green-500'>Like {likeCount}</button>
        </div>
        <div className='space-x-4 mt-3'>
            <button onClick={()=> dispatch(decrementLike())}  className='border px-4 rounded'>Dislike</button>
            <button onClick={()=> dispatch(incrementLike())} className='border px-4 rounded'>Like</button>
            <button onClick={()=> dispatch(resetLikeDislike())} className='border px-4 rounded'>Reset</button>
        </div>
    </div>
  )
}

export default LikeDislike