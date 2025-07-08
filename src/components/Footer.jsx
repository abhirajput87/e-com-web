import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex mx-auto justify-around gap-16 bg-gray-400 mt-10'>
      

      <div className='my-6 p-2'>
        <div>
            <p className='font-bold'>Contact Us</p>
        </div>
        <div className='mt-3 mb-2'>
          <a href="tel:01234567890" className="text-black hover:underline">
            0123 456 7890
          </a>
            
        </div>
          <a href="mailto:info@gmail.com" className=" text-black hover:underline">
            info@gmail.com
          </a>
        </div>

      <div className='my-6 p-2'>
        <span>
            <p className='font-bold'>Shop</p>
        </span>
        <NavLink>
            <p className=" mt-3 mb-2 hover:underline">Tops</p>
            <p className=" mb-2 hover:underline">Bottoms</p>
            <p className=" mb-2 hover:underline">Outerwear</p>
            <p className=" mb-2 hover:underline">New in</p>
            <p className=" mb-2 hover:underline">About</p>
            <p className=" mb-2 hover:underline">Blog</p>
            <p className=" mb-2 hover:underline">Contact</p>
        </NavLink>
        
      </div>

      <div className='my-6 p-2'>
        <span className='font-bold '>Company</span>
        <NavLink className="" >
            <p className=" mt-3 mb-2 hover:underline">Cookies</p>
            <p className=" mb-2 hover:underline">Payments</p>
            <p className=" mb-2 hover:underline">Term & Conditions</p>
            <p className=" mb-2 hover:underline">Privacy Policy</p>
            <p className=" mb-2 hover:underline">Security</p>
        </NavLink>
      </div>

      <div>
        <img src='main_logo.png' alt='' className='h-[18rem]'/>
      </div>


    </div>
  )
}

export default Footer
