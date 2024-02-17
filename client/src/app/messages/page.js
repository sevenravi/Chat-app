'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Divider } from "@nextui-org/react";
import ChatComponent from './chatComponent';
import ChatInbox from './chatInbox';
import { useSelector } from 'react-redux';

const Page = () => {

  const  {detail:selectedUserDetails}  = useSelector(state => state.selectedUser)



  return (

    <div className='flex flex-row h-screen text-white bg-zinc-800' >
      {/* {JSON.stringify(list)} */}
      <div className="sidebar ml-4 m-4 mr-2">
        <section>logout</section>
        <section>profile</section>
      </div>
      <div className="messageBody flex flex-row  border-white border-1 rounded-2xl m-4 mr-2 w-11/12 bg-white text-black">
        <ChatInbox />
        <Divider className='m-3' orientation="vertical" />

        <div className="border-white border-1 m-4 mr-2 w-2/3" >
          <ChatComponent />
          {/* {JSON.stringify(selectedItem)} */}
        </div>

      </div>
      <div className="flex m-4 ml-2  w-3/12 ">
        <div className="border-1 m-2 bg-white rounded-2xl	 text-black w-11/12  ">
                   
          {selectedUserDetails?.name}
          
        </div>
      </div>
    </div>
  )
}

export default Page


