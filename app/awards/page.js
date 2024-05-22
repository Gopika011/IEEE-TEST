import React from 'react'
import Tilted from '@/components/tilted'
import SideArrow from '@/components/SideArrow'

const Awards = () => {
  return (
    <div className='flex flex-row min-h-screen'>
    <div className='w-1/4'>
      <Tilted title1="AWA" title2="RDS"></Tilted>
    </div>

    <div className='w-3/4 pl-10 pt-10 md:pl-52 md:pt-24 relative'>
      
      <SideArrow link="/eventsDet"></SideArrow>
    </div>

    
  </div>
  )
}

export default Awards