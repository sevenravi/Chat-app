import React from 'react';
import { Avatar, Button, Input } from "@nextui-org/react";

const ChatComponent = () => {
  return (
    <>
      <div className='chat-header flex border-1 h-14 mr-2'>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <p className='p-2'><b>Seven Ravi</b></p>
      </div>
      <div className="chat-body my-2 mr-2 border-1 h-5/6">
        <section className='incoming-msg my-1 mx-3 w-3/4'>
          <span className="label">ram:</span><br/>
          <span className="message bg-red-400"></span>
          <span>hi</span>
        </section>
        <section className='outgoing-msg my-1 mx-3 w-3/4'>
          <span className="label">me:</span><br/>
          <span className="message bg-blue-400"></span>
          <span>hi k cha?</span>
        </section>
      </div>
      <div className="chat-footer flex  mr-2 h-14 my-2">
        <Input autoFocus className='mx-1 p-1'placeholder='enter your message....'/>
        <Button className='mx-1 h-12 mt-2'>Send</Button>
      </div>
    </>
  );
};

export default ChatComponent;
