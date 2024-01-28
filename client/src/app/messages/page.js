'use client'
import React, { useEffect, useState } from 'react'
const page = () => {
  const userList=async ()=>{
    const [list, setlist] = useState([])
    const res = await fetch('http://localhost:5000/getuser')
    const data =await res.json()
    setlist(data)
    console.log(list)
    
  }
  useEffect(() => {
    userList()
  }, [])
  

  return (
    
    <div className='flex flex-row h-screen text-white bg-zinc-800' >
      <div className="border-white border-1 m-8 ml-17 w-1/3" >messages</div>
      <div className="border-white border-1 m-8 w-2/3" >Seven D Great</div>
    </div>
  )
}

export default page


