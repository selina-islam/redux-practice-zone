import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../redux/features/preferences/preferences'

const Preferences = () => {
    const darkmode= useSelector((state)=> state.preferences.darkmode)
    const dispatch= useDispatch()
    useEffect(()=>{
        if(darkmode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkmode])
  return (
    <div className='mt-12 space-y-3'>
        <h2 className='text-xl font-bold '>Preferences</h2>
        <p>Dark Mode: {darkmode ? 'enabled': 'disabled'}</p>
        <button onClick={()=> dispatch(toggleDarkMode())} className='bg-blue-500 px-6 py-2 rounded'>
          Toggle Dark mode
        </button>
    </div>
  )
}

export default Preferences