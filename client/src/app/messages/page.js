'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const z = useSelector(state=>state.count)
  console.log(z)
  return (
    
    <div className='flex flex-row h-screen text-white bg-zinc-800' >
      <div className="border-white border-1 m-8 ml-17 w-1/3" >messages</div>
      <div className="border-white border-1 m-8 w-2/3" >Seven D Great</div>
    </div>
  )
}

export default page
