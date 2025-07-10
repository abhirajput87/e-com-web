import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { AppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const login = () => {
    navigate("/logIn")
  }
  const signup = () => {
    navigate("signUp")
  }

  const { isHovered, setIsHovered, filterHandler, products } = useContext(AppContext);

  const categories = [...new Set(products.map(item => item.category))]; 
  return (
    <nav className='flex w-full z-50 justify-around h-14 bg-gray-400'>
      {/* Logo */}
      <button onClick={() => window.location.reload()}>
        <img
          src="main_logo.png"
          className='h-14 hover:scale-110 transition-transform duration-300 ease-in-out rounded-full'
          alt='Logo'
        />
      </button>

      {/* Category Buttons */}
      <div className='flex gap-4 items-center'>
        {categories.length === 0 && <p className='font-bold text-'>No categories found</p>}
        
        {categories.map((category, index) => (
            <button
            key={index}
            className="relative uppercase inline-block after:block after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 after:mx-auto after:origin-center hover:after:w-full"
            onClick={() => filterHandler(category)}
            >
            {category}
            </button>
        ))}
        </div>

      {/* Cart & User */}
      <div className='flex gap-8'>
        <NavLink className="mt-4 text-2xl">
          <FaCartShopping />
        </NavLink>

        <div
          className="relative inline-block text-left mt-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setTimeout(() => setIsHovered(false), 800)}
        >
          <NavLink className="text-xl">
            <FaUser />
          </NavLink>

          {isHovered && (
            <div className="absolute flex justify-center text-center flex-col gap-2 z-10 mt-2 w-32 bg-gray-200 border rounded shadow-lg">
              <button 
              onClick={login}
              className='block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:font-semibold'>Log In</button>
              <button
              onClick={signup}
              className='block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:font-semibold'>Sign Up</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
