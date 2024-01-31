'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardBody } from "@nextui-org/react";

const page = () => {
  const [list, setlist] = useState([])
  const [selectedItem,setselectedItem]= useState(null)

  const userList = async () => {
    const res = await fetch('http://localhost:5000/getuser')
    const data = await res.json()
    setlist(data)

  }
  useEffect(() => {
    userList()
  }, [])

  const handleOnPress =(item)=>{
    setselectedItem(item)
  }

  return (

    <div className='flex flex-row h-screen text-white bg-zinc-800' >
      {/* {JSON.stringify(list)} */}
      <div className="border-white border-1 m-8 ml-17 w-1/3" >
      {list.length>0 && list.map((item,id)=>{
        return (<div key={id}  onClick={()=>handleOnPress(item)}>
          <Card  className= {selectedItem?._id == item._id ? 'mb-1 bg-blue-500':'mb-1'}>
          <CardBody>
             {item.name}
            
          </CardBody>
        </Card></div>)
        
        })}
      </div>
      <div className="border-white border-1 m-8 w-2/3" >Seven D Great   {JSON.stringify(selectedItem)}</div>
    </div>
  )
}

export default page


