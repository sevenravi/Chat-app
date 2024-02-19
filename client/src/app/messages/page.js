'use client'
import React from 'react'
import { Divider } from "@nextui-org/react";
import ChatComponent from './chatComponent';
import ChatInbox from './chatInbox';
import Profile from './Profile';
import Sidebar from './Sidebar';

const Page = () => {
  return (
    <div className='flex flex-row h-screen text-white bg-zinc-800' >

      <Sidebar />

      <div className="messageBody flex flex-row  border-white border-1 rounded-2xl m-4 mr-2 w-11/12 bg-white text-black">

        <ChatInbox />
        <Divider className='m-3' orientation="vertical" />

        <div className="border-white border-1 m-4 mr-2 w-2/3" >
          <ChatComponent />
        </div>

      </div>
      <div className="flex m-4 ml-2  w-3/12 ">
        <Profile />
      </div>
    </div>
  )
}

export default Page


