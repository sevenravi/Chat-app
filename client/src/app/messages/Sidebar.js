import React from 'react';
import {Divider} from "@nextui-org/react";
import { IoIosLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { logout } from '@/redux/reducerSlice/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const Sidebar = () => {

  const dispatch=useDispatch()
  const router = useRouter()

  const handleLogout=()=>{
        dispatch(logout())
        router.push('/')
  }
  return (
    <div className="flex flex-col   m-2 mr-1 ">

      <div className="flex-grow sidebar-body flex flex-col justify-center items-center w-16">
      <section className='my-2 flex flex-col items-center cursor-pointer'>
          <FaMessage color='gray' size={'30px'} />
          <span className='text-xs text-gray-300 m-1'>All chats</span>
        </section>
        <Divider className="bg-gray-500" style={{ height: "2px" }}/>
      <section className='my-2 flex flex-col items-center cursor-pointer'>
          <FaUserCircle color='gray' size={'30px'} />
          <span className='text-xs text-gray-300 m-1'>Profile</span>
        </section>
      </div>

      <div className="sidebar-footer">
        <section className='my-2 flex flex-col items-center p-2 mb-10 cursor-pointer'onClick={()=>handleLogout()}>
          <IoIosLogOut size={'28px'} />
          <span className='text-xs text-gray-300 m-1'>Logout</span>
        </section>
      </div>
      
    </div>
  );
}

export default Sidebar;
