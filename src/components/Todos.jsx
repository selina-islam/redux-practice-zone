import React, { useState } from 'react'
import Preferences from './Preferences'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleTodo } from '../redux/features/todos/todos'

const Todos = () => {
    const todos= useSelector((state)=> state.todos)
    const dispatch= useDispatch()
    const [todoText, setTodoText]= useState('')
    // function to adding todo
    const handleAddTodo=()=>{
        if(todoText.trim()){
            dispatch(addTodo(todoText),
            setTodoText('')
               
            )
        }
    }

  return (
    <div className='flex flex-col items-center 
    justify-center h-screen w-5xl mx-auto'>
        <h2 className='text-2xl font-bold py-4'>Todos App</h2>
        <div>
            <input
            value={todoText}
            onChange={(e)=> setTodoText(e.target.value)}
            type="text" placeholder='add your task' className='border border-gray-400 px-2 py-1 focus:outline-0 rounded focus:ring-1 focus:ring-green-300 focus:border-transparent'/>
            <button onClick={handleAddTodo} className=' px-4 ml-2 py-1 rounded bg-green-500 hover:bg-green-600'>Add</button>
        </div>
        <div className='w-5xl max-w-sm mx-auto'>
            <ul className='w-full'>
                {todos.length> 0 ? todos.map((todo)=>(
                    <li key={todo.id} className='flex mt-4 justify-between items-center border-b'><p onClick={()=> dispatch(toggleTodo(todo.id))} className={`${todo.complete ? 'text-gray-500 line-through' : ''}`}>{todo.text}</p> <button onClick={()=> dispatch(removeTodo(todo.id))} className='bg-red-400 px-3 rounded'>remove</button></li>
                )) : <p> todos not found</p>}
                
            </ul>
        </div>
        <Preferences/>
    </div>
  )
}

export default Todos