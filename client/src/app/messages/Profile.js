import React from 'react'
import { useSelector } from 'react-redux';
import Avatar from '@/components/avatar/page'

const Profile = () => {

  const { detail: selectedUserDetails } = useSelector(state => state.selectedUser)

  return (
    <div className="border-1 m-2 bg-white rounded-2xl	 text-black w-11/12  ">

      <div className="profile-header flex flex-col items-center justify-center m-32 mt-8 ">
        <Avatar />
      <p className='m-3 text-xl font-mono font-semibold'>{selectedUserDetails?.name}</p>
      </div>

    </div>
  )
}

export default Profile
