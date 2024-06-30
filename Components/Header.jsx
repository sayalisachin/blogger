import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {

  const[email,setEmail]= useState("");

  const onSubmitHandler= async(e) =>{
    e.preventDefault();
    
      toast.success("Email Verified");
     
    
  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            <button
  className='flex items-center gap-2 font-medium py-1 px-3 sm:py-2 sm:px-3 border border-solid border-black transition duration-300 ease-in-out hover:shadow-[0_0_0_2px_#ffffff] hover:border-black hover:bg-black hover:text-white hover:scale-105'
  onClick={() => {
    // Navigate to the admin page
    window.location.href = '/admin';
  }}
>
  Get Started <Image src={assets.arrow} alt='' />
</button>
            
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3x1 sm:text-5x1 text-m font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>here all your personalised curated blogs bought for you by blogger.</p>
            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none'/>
                <button type= 'submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header