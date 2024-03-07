import React from 'react'
import Avatar from '../avatar/page'
import { useSelector } from 'react-redux';


const Profile = () => {
    const {userDetails}=useSelector(state => state.user)

  return (
    <div className='text-black'>
        <Avatar/>
        <p><b>{userDetails.name}</b></p>
    </div>
  )
}

export default Profile
