'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setOpen(!open);

    // Toggle body scroll based on menu open/close
    document.body.style.overflow = open ? '' : 'hidden'; // Enable or disable scrolling
  };

  return (
    <>
      <div className='border'>
        <div className='bg-black px-6 py-1 flex justify-between'>
          <div className='text-white text-center '>
            <h1>Free Shipping All Across The Pakistan</h1>
          </div>

          <ul>
            <Link href='/' className='text-white px-4'>
              SIGN IN
            </Link>
            <Link href='/' className='text-white'>
              FAQ'S
            </Link>
          </ul>
        </div>
        <div className='relative shadow-lg p-5 bg-white backdrop-blur-md z-50'>
          <nav className='px-4 flex justify-between items-center max-w-6xl mx-auto'>
            <div>
              <img src='https://preview.colorlib.com/theme/malefashion/img/logo.png.webp' alt='' />
            </div>

            <ul className='hidden md:block'>
              <Link className='text-lg font-semibold  px-4 ' href='/'>
                HOME
              </Link>
              <Link className='text-lg font-semibold px-4' href='/'>
                PAGES
              </Link>
              <Link className='text-lg font-semibold px-4' href='/'>
                BLOGS
              </Link>
            </ul>

            <div className='text-xl cursor-pointer hidden md:block '>
              <i className='bx bx-search p-2' />
              <i className='bx bx-heart p-2' />
              <i className='bx bx-cart p-2' />
            </div>

            {/* mobile navbar */}
            <div
              className={`bg-white p-4 ${open ? '' : ' -translate-x-[100%] '} transition-all duration-1000 w-1/2 block md:hidden h-screen absolute left-0 top-0 border-2 border-red-400 z-50`}
            >
              <div className='text-xl cursor-pointer '>
                <i className='bx bx-search p-2  ' />
                <i className='bx bx-heart p-2 ' />
                <i className='bx bx-cart p-2 ' />
              </div>

              <ul className='mt-2'>
                <Link className='text-lg font-semibold border px-2 py-2 block border-red-500' href='/'>
                  HOME
                </Link>
                <Link className='text-lg font-semibold px-2 block py-2' href='/'>
                  PAGES
                </Link>
                <Link className='text-lg font-semibold px-2 block py-2' href='/'>
                  BLOGS
                </Link>
              </ul>
            </div>

            <div className='block md:hidden text-3xl'>
              <i onClick={toggleMenu} className={`bx cursor-pointer bx-${open ? 'x' : 'menu'}`} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
