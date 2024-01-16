'use client'
import React, { useState } from 'react';
import { Input, Button , Link , Divider } from '@nextui-org/react';
import {EyeFilledIcon} from "../../../icons/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../../../icons/EyeSlashFilledIcon";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // Implement login logic here
  };



  return (
    <div className="flex h-screen bg-black text-white " style={{ backgroundImage: 'url("bgimage.jpg")' }}>
      <div className="flex-1 flex flex-col justify-center pl-80 pb-80">
        <h1 className="text-7xl font-bold mb-3">YoChat!</h1>
        <section className='ml-5'>Stay connected !</section>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center  ">
        <form className='border-1 p-20 rounded-2xl backdrop-blur-md'>
          <Input
            isRequired
            className="max-w-xs mb-4"
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            isRequired
            label="Password"
            placeholder="Enter your password"
            // type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="max-w-xs mb-4"
              endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
          />
          <div>
          <Button onClick={login}>Log in</Button>
          <Link href='' className='ml-4 '>Forget passowrd</Link>
          </div>
          <Divider className='m-3 mt-5 bg-white'/>
          <Button className='mt-1 text-black ml-7'><Link href='/register' className='m-5 text-black'>Create New User</Link></Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
