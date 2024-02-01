'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardBody,Divider } from "@nextui-org/react";

const page = () => {
  const [list, setlist] = useState([])
  const [selectedItem, setselectedItem] = useState(null)

  const userList = async () => {
    const res = await fetch('http://localhost:5000/getuser')
    const data = await res.json()
    setlist(data)

  }
  useEffect(() => {
    userList()
  }, [])

  const handleOnPress = (item) => {
    setselectedItem(item)
  }

  return (

    <div className='flex flex-row h-screen text-white bg-zinc-800' >
      {/* {JSON.stringify(list)} */}
      <div className="sidebar ml-4 m-4 mr-2">
        <section>logout</section>
        <section>profile</section>
      </div>
      <div className="messageBody flex flex-row  border-white border-1 rounded-2xl m-4 mr-2 w-11/12 bg-white text-black">


        <div className="border-white border-1 m-4 mr-2 w-1/3" >
          {list.length > 0 && list.map((item, id) => {
            return (<div key={id} onClick={() => handleOnPress(item)}>
              <Card className={selectedItem?._id == item._id ? 'mb-1 bg-zinc-200' : 'mb-1'}>
                <CardBody>
                  {item.name}

                </CardBody>
              </Card></div>)

          })}
        </div>
        <Divider className='m-3' orientation="vertical" />

        <div className="border-white border-1 m-4 mr-2 w-2/3" >Seven D Great   {JSON.stringify(selectedItem)}</div>

      </div>
      <div className="flex m-4 ml-2  w-3/12 ">
        <div className="border-1 m-2 bg-white rounded-2xl	 text-black w-11/12  ">
          profile view
        </div>
      </div>
    </div>
  )
}

export default page


