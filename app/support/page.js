import SideArrow from '@/components/SideArrow'
import Tilted from '@/components/tilted'
import Link from 'next/link'
import React from 'react'

const Links = [
  {href:'/', text:'ieee.org'},
  {href:'/', text:'myieee'},
  {href:'/', text:'digital library'},
  {href:'/', text:'ieee RAS'},
  {href:'/', text:'ieee spectrum'},
  {href:'/', text:'ieee region 10'},
  {href:'/', text:'ieee kerala section'},
]

const Support = () => {
  return (
    <div className='flex flex-row min-h-screen'>
      <div className='w-1/4'>
        <Tilted title1="ESSE" title2="NTIALS"></Tilted>

      </div>
      <div className='w-3/4 pl-10 pt-10 md:pl-52 md:pt-24 relative'>
        <h1 className='text-white font-semibold text-2xl lg:text-5xl pb-10'>SUPPORT</h1>
        <ul className='flex flex-col gap-2 md:gap-8 font-semibold text-xl lg:text-3xl text-customFootGray'>
          {Links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>

        <SideArrow link="/eventsDet"></SideArrow>
      </div>
    </div>
  )
}

export default Support