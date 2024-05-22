import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import icon from '../public/down-arrow.png'

const SideArrow = ({link}) => {
  return (
    <div className='flex justify-end absolute bottom-2 md:bottom-10 right-2 md:right-10'>
        <Link href={`${link}`}><Image src={icon} width={70} height={70} alt="arrow icon"></Image></Link>
    </div>
  )
}

export default SideArrow