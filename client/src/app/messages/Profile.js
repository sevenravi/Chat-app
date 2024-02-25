import React from 'react'
import { Avatar } from '@nextui-org/react';
import { useSelector } from 'react-redux';


const Profile = () => {

  const { detail: selectedUserDetails } = useSelector(state => state.selectedUser)

  return (
    <div className="border-1 m-2 bg-white rounded-2xl	 text-black w-11/12  ">

      <div className="profile-header flex flex-col items-center justify-center m-32 mt-8 ">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-20 h-20 text-large"/>

      <p className='m-3 text-xl font-mono font-semibold'>{selectedUserDetails?.name}</p>
      </div>

    </div>
  )
}

export default Profile
