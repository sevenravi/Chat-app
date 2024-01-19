'use client'
import React, { useState } from 'react'
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../icons/EyeSlashFilledIcon";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const page = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [activeInput, setActiveInput] = useState(null);
    const router = useRouter()

    const handleFocus = (fieldName) => {
        setActiveInput(fieldName);
    };

    const handleBlur = () => {
        setActiveInput(null);
    };

    const registerUser = async (values) => {
            const res = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
            const data = await res.json()
            toast(data.msg);
            if ( res.status === 200)  router.push(`/`)
       
    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        confirmPassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], "Passwords didn't match"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
            registerUser(values)
        },
    });

    return (
        
        <div className="flex flex-col justify-center items-center  h-screen bg-black text-white" style={{ backgroundImage: 'url("bgimage.jpg")' }}>
            <h1 className='text-4xl font-bold mb-8'>YoChat</h1>
            
            <form onSubmit={formik.handleSubmit}>
                <Input
                    isRequired
                    name='name'
                    className="max-w-xs mb-2 "
                    type="name"
                    label="Name"
                    placeholder="Enter your Full name"
                    onChange={formik.handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    value={formik.values.name}
                />
                {activeInput === 'name' &&<p className='mb-2 ml-3 font-thin text-sm text-red-500'>{formik.errors.name}</p>}
                <Input
                    isRequired
                    name='email'
                    className="max-w-xs mb-2"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    value={formik.values.email}
                />
                {activeInput === 'email' &&<p className='mb-2 ml-3 font-thin text-sm text-red-500'>{formik.errors.email}</p>}
                <Input
                    isRequired
                    name='password'
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
                    className="max-w-xs mb-2"
                    onChange={formik.handleChange}
                    onFocus={() => handleFocus('password')}
                    onBlur={handleBlur}
                    value={formik.values.password}
                />
                {activeInput === 'password' &&<p className='mb-2 ml-3 font-thin text-sm text-red-500'>{formik.errors.password}</p>}
                <Input
                    isRequired
                    name='confirmPassword'
                    label="Confirm Password"
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
                    className="max-w-xs mb-2"
                    onChange={formik.handleChange}
                    onFocus={() => handleFocus('confirmPassword')}
                    onBlur={handleBlur}
                    value={formik.values.confirmPassword}
                />
                {activeInput === 'confirmPassword' &&<p className='mb-2 ml-3 font-thin text-sm text-red-500'>{formik.errors.confirmPassword}</p>}
                <Button className='ml-20' type='submit'  >
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default page

