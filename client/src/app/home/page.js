'use client'
import React, { useState } from 'react';
import { Input, Button, Divider } from '@nextui-org/react';
import Link from 'next/link';
import { EyeFilledIcon } from "../../../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../icons/EyeSlashFilledIcon";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import {addUserDetails} from '@/redux/reducerSlice/userSlice'


const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter()
  const dispatch = useDispatch()

  
  const login = async (values) => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()

    console.log(data)
    if (res.status === 200){
      router.push(`/messages`)
      dispatch(addUserDetails(data))
    }
      
    toast(data.msg);
  };
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('please enter your password '),

  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
      login(values)
    },
  });


  return (
    <div className="flex h-screen bg-black text-white " style={{ backgroundImage: 'url("bgimage.jpg")' }}>
      <div className="flex-1 flex flex-col justify-center pl-80 pb-80">
        <h1 className="text-7xl font-bold mb-3">YoChat!</h1>
        <section className='ml-5'>Stay connected !</section>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center  ">
        <form onSubmit={formik.handleSubmit} className='border-1 p-20 rounded-2xl backdrop-blur-md'>
          <Input
            isRequired
            name='email'
            className="max-w-xs mb-4"
            type="email"
            label="Email"
            onChange={formik.handleChange}
            placeholder="Enter your email"
            value={formik.values.email}
          />
          <p className='mb-2 ml-3 font-thin text-sm text-white'>{formik.errors.email}</p>
          <Input
            isRequired
            name='password'
            label="Password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="max-w-xs mb-2 "
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
          <p className='mb-2 ml-3 font-thin text-sm text-white'>{formik.errors.password}</p>
          <div>
            <Button type='submit'>Log in</Button>
            <Link href='' className='ml-4 '>Forget passowrd</Link>
          </div>
          <Divider className='m-3 mt-5 bg-white' />
          <Button as={Link} href='/register' className='mt-1 text-black ml-14  '>Create New User</Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
