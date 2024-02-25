"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Input } from "@nextui-org/react";
import { useSelector } from 'react-redux';

const ChatComponent = () => {
  const { detail: selectedUserDetails } = useSelector(state => state.selectedUser)
  const [msg, setMsg] = useState('')
  const [msgList, setMsgList] = useState([])
  
  const sendMessage =()=>{
    //  alert(msg)
     setMsgList([...msgList,msg])
      setMsg('  ')
  }

 useEffect(() => {
   console.log(msgList)
 
   
 }, [msgList])

 const SenderMsg =()=>{
 
 }
 

  return (


    <>
      <div className='chat-header flex border-1 h-14 mr-2'>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <p className='p-2'><b>Seven Ravi</b></p>
      </div>
      <div className="chat-body my-2 mr-2 border-1 h-5/6">
        <section className='incoming-msg my-1 mx-3 w-3/4'>
          <span className="label">{selectedUserDetails?.name}:</span><br/>
          <span className="message bg-red-400"></span>
          <span>hi</span>
        </section>
        <section className='outgoing-msg my-1 mx-3 w-3/4'>
          <span className="label">me:</span><br/>
          <span className="message bg-blue-400"></span>
          <span>hi k cha?
            { msgList.map ((item,id)=>{
    return (<div key={id}>{item}<br/></div>)
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
