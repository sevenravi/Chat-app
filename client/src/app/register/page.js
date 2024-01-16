'use client'
import React, { useState } from 'react'
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../icons/EyeSlashFilledIcon";

const page = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const registerUser = () => {

    }

    return (
        <div className="flex flex-col justify-center items-center  h-screen bg-black text-white" style={{ backgroundImage: 'url("bgimage.jpg")' }}>
            <h1 className='text-4xl font-bold mb-8'>YoChat</h1>
            <Input
                isRequired
                className="max-w-xs mb-4 "
                type="name"
                label="Name"
                placeholder="Enter your Full name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <Input
                isRequired
                className="max-w-xs mb-4"
                type="email"
                label="Email"
                placeholder="Enter your email"
            />
            <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
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
                className="max-w-xs mb-4"
            />
            <Input
                isRequired
                label="Confirn Password"
                placeholder="Re-enter your password"
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
                className="max-w-xs mb-4"
            />
            <Button onSubmit={registerUser} >
                Sign Up
            </Button>
        </div>
    )
}

export default page