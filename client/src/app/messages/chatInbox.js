'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, } from "@nextui-org/react";
import {  useDispatch, useSelector } from 'react-redux';
import { setSelectedUserDetails } from '@/redux/reducerSlice/selectedUserSlice';


const chatInbox = () => {
    const [list, setlist] = useState([])
    // const [selectedItem, setselectedItem] = useState(null)
    const dispatch = useDispatch()
    const {selectedUserDetails}=useSelector(state => state.selectedUser.detail)

    const userList = async () => {
        const res = await fetch('http://localhost:5000/getuser')
        const data = await res.json()
        setlist(data)
    
      }
      useEffect(() => {
        userList()
      }, [])
    
      const handleOnPress = (item) => {
        // setselectedItem(item)
        dispatch(setSelectedUserDetails({detail:item}))
        }

  return (
    
      <div className="border-white border-1 m-4 mr-2 w-1/3" >
          {list.length > 0 && list.map((item, id) => {
            return (<div key={id} onClick={() => handleOnPress(item)}>
              <Card className={selectedUserDetails?._id == item._id ? 'mb-1 bg-zinc-200' : 'mb-1'}>
                <CardBody>
                  {item.name}
                </CardBody>
              </Card></div>)

          })}
        </div>
  
  )
}

export default chatInbox
