import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import icon from '../public/top-arrow.png';

const Navbar = ({text, link}) => {
  return (
    <nav>
      <div className='m-10 flex justify-between text-2xl'>
        <Link href="/" className='text-white font-medium'>IEEE SB MITS</Link>
        <Link href={link} className='mx-10 flex items-center'>{text} <Image src={icon} width={30} height={30}></Image> </Link>
      </div>
    </nav>
  )
}

export default Navbar