import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import icon from '../public/back-arrow.png'


const BackArrow = () => {
  return (
    <div className='flex absolute top-2 md:top-5 left-2 md:left-5'>
        <Link href='/scroll' className='m-2 flex items-center text-2xl font-semibold'><Image src={icon} width={35} height={35} alt="arrow icon"></Image>back</Link>
    </div>
  )
}

export default BackArrow