import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/navbar'
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { PiTwitchLogo } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";

const Links = [
  { href: "/execom", text: "Who we are" },
  { href: "/events", text: "Events" },
  { href: "/awards", text: "Achievements" },
  { href: "/", text: "Say hello" }
]

const Navigate = () => {
  return (
    <div className='slide-in-top'>
      <Navbar text="close" link="/"></Navbar>
      <div className='flex flex-col md:flex-row justify-between'>
      <div className='md:w-1/2'>
        <ul className='text-white text-4xl font-bold mx-4 md:ml-10 lg:ml-32 my-5'>
          {Links.map((link) => (
            <li key={link.href} className='py-4 md:py-10'>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='w-1/2 flex flex-col gap-8 md:gap-12 my-8 md:my-40 mx-4 md:ml-36 lg:ml-72 text-xl font-semibold'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-400'>E-MAIL US</h1>
          <h1 className='text-white'>ieeesb@mgits.ac.in</h1>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-400'>CHAT WITH US</h1>
          <h1 className='text-white'>+91 XXX-XXX-XXXX</h1>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='text-gray-400'>CONNECT WITH US</h1>
          <div className='flex flex-row gap-6 ml-2'>
            <IoLogoInstagram className='text-2xl'/>
            <CiTwitter className='text-2xl'/>
            <PiTwitchLogo className='text-2xl'/>
            <FiLinkedin className='text-2xl'/>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Navigate
