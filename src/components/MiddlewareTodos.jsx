import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, fetchMiddleWareTodos, removeTodo, toggleTodo } from '../redux/features/MiddleWareTodo/MiddleTodoSlice'

const MiddlewareTodos = () => {
  const [text, setText]=useState('')
  const {error, loading, items}= useSelector((state)=> state.middlwaretodos)
  const dispatch= useDispatch()

  useEffect(()=>{
dispatch(fetchMiddleWareTodos())
  },[dispatch])

console.log(items)
  
  if(loading){
    return <p>loading...</p>
  }if(error){
    return <p>{error}</p>
  }
  const handleAddTask=()=>{
    if(text.trim()){
        dispatch(addTodo(text))
        setText('')
    }
  }
  return (
    <div className='space-y-4 flex flex-col justify-center items-center my-20'>
       <h2>MiddleWare Todo App</h2>
      <div className='flex items-center gap-3'>
       
      <input type="text" placeholder='Add task' value={text} onChange={(e)=> setText(e.target.value)} className='border' />
      <button onClick={handleAddTask} className='border'>Add Task</button>
      </div>
    <ul>
      {items.length >0 ? items.map((todo)=>(
        <li key={todo.id} className={`${todo.complete ? 'line-through text-gray-600':''} flex space-x-8 border-b my-6`}><p onClick={()=>dispatch(toggleTodo(todo.id))}>{todo.title || todo.text}</p> <button onClick={()=> dispatch(removeTodo(todo.id))} className='text-red-600 border px-4 rounded'>Remove</button></li>
      )):<p>No task available</p>}
    </ul>
    </div>
  )
}

export default MiddlewareTodos