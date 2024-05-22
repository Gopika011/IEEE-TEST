'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import icon from '../public/top-arrow.png';
import NavigateMenuTop from './NavigateMenuTop';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className='w-full'>
      <div className='m-10 flex justify-between text-2xl'>
        <Link href="/" className='text-white font-medium'>IEEE SB MITS</Link>
        <div onClick={()=> setMenuOpen(true)} className='mx-10 flex items-center cursor-pointer'>menu <Image src={icon} width={30} height={30}></Image></div>
      </div>

      <div className={menuOpen
        ? 'fixed left-0 top-0 w-screen h-screen bg-black ease-in p-10 duration-300 z-50 CONT'
        : 'fixed left-0 -top-full w-screen h-screen p-10 ease-in duration-300 bg-black z-50'
      }>
      <div className='flex justify-between text-2xl'>
        <div onClick={()=> setMenuOpen(false)}><Link href="/" className='text-white font-medium'>IEEE SB MITS</Link></div>
        <div onClick={()=> setMenuOpen(false)} className='mx-10 flex items-center cursor-pointer'>close <Image src={icon} width={30} height={30}></Image></div>
      </div>
        <NavigateMenuTop></NavigateMenuTop>
      </div>

      
    </nav>
  )
}

export default Navbar