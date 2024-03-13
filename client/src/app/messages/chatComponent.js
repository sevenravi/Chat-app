"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Input } from "@nextui-org/react";
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import axios from 'axios';

const ChatComponent = () => {
  const { detail: selectedUserDetails } = useSelector(state => state.selectedUser)
  const {userDetails}=useSelector(state => state.user)

  const [msg, setMsg] = useState('')
  const [msgList, setMsgList] = useState([])

  const socket = io('http://localhost:5000')
  
  const sendMessage =async()=>{
    //  alert(msg)
     setMsgList([...msgList,{senderId : userDetails._id,receiverId : selectedUserDetails._id,text : msg}])
      setMsg('')
      socket.emit('send msg',{senderId : userDetails._id,receiverId : selectedUserDetails._id,text : msg})
      // const {data}=await axios.post(`http://localhost:5000/new-text`,{
      //   senderId : userDetails._id,
      //   receiverId : selectedUserDetails._id,
      //   text : msg
      // })
      // console.log(data)
         
  }

  useEffect(()=>{
    debugger;
    const eventListner =(data)=>{
      setMsgList(prevMsgList => [...prevMsgList, data]);

    }
    socket.on('connection')
    socket.emit('add users',userDetails._id)
    socket.on ('receive msg',eventListner)
    return ()=> socket.off('receive msg',eventListner)
  },[])

 useEffect(() => {
  getMsgList()
 },[selectedUserDetails._id])

 const getMsgList =async()=>{
  if (selectedUserDetails._id){
    const {data}=await axios.get(`http://localhost:5000/texts?senderId=${userDetails._id}&receiverId=${selectedUserDetails._id}`)
      // console.log(data)
      setMsgList(data)
  }
      
 }
 

  return (


    <>
      <div className='chat-header flex border-1 h-14 mr-2'>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <p className='p-2'><b>{selectedUserDetails?.name}</b></p>
      </div>
      <div className="chat-body my-2 mr-2 border-1 h-5/6">
        
        <section className='outgoing-msg my-1 mx-3 '>
          <span>
            { msgList.map ((item,id)=>{
    return (<div className={item.senderId === userDetails._id ? ' m-2 p-1  bg-blue-200 rounded ml-[25%] text-right':'m-2 p-1 bg-gray-200 rounded mr-[25%]'} key={id}>{item.text}<br/></div>)
  })}
          </span>
        </section>
      </div>
      <div className="chat-footer flex  mr-2 h-14 my-2">
        <Input autoFocus className='mx-1 p-1'value={msg} onChange={(e)=>setMsg(e.target.value)}/>
        <Button className='mx-1 h-12 mt-2' onClick={()=>sendMessage()}>Send</Button>
      </div>
    </>
  );
};

export default ChatComponent;
