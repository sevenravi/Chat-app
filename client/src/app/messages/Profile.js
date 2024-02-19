import React from 'react'
import { useSelector } from 'react-redux';


const Profile = () => {

    const  {detail:selectedUserDetails}  = useSelector(state => state.selectedUser)

  return (
    <div className="border-1 m-2 bg-white rounded-2xl	 text-black w-11/12  ">
                   
    {selectedUserDetails?.name}
    
  </div>
  )
}

export default Profile
