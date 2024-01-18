'use client'
import React, { useState } from 'react'
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../icons/EyeSlashFilledIcon";
import { useFormik } from 'formik'
import * as Yup from 'yup'



const page = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const registerUser =async(values)=>{
       
       try {
        await fetch('http://localhost:5000/register',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(values)
       })
       alert("registration successfull");
       } catch (error) {
        alert("User already exist");
        res.status(401).send("user already exist")
        console.log(error)
       } 
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
        confirmPassword:Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], "Passwords didn't match"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword:'',
        },
        validationSchema:SignupSchema,
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
                    className="max-w-xs mb-4 "
                    type="name"
                    label="Name"
                    placeholder="Enter your Full name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                    <div className='text-white'>{formik.errors.name}</div>
                ) : null}
                <Input
                    isRequired
                    name='email'
                    className="max-w-xs mb-4"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
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
                    className="max-w-xs mb-4"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
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
                    className="max-w-xs mb-4"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <div className='text-white'>{formik.errors.confirmPassword}</div>
                ) : null}
                <Button className='ml-20' type='submit'  >
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default page

