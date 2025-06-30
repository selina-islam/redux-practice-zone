import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/features/counter/counterSlice'

const CounterApp = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch=useDispatch()
    const handleIncrement=()=>{
        dispatch(increment())
    }
    const handleDecrement=()=>{
        dispatch(decrement())
    }

    const handleIncrementBy5=(number)=>{
            dispatch(incrementByAmount(5))
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen '>
        <h2 className='py-5 text-2xl font-bold'>Counter App</h2>
        <div className='flex gap-7 items-center'>
            <button onClick={handleIncrement} className='border px-4 rounded'>Increment</button>
            <span>{count}</span>
            <button onClick={handleDecrement} className='border px-4 rounded'>Decrement</button>
            <button onClick={()=> handleIncrementBy5()} className='border px-4 rounded'>Increment5</button>
        </div>
    </div>
  )
}

export default CounterApp