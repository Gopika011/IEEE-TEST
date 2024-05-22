import React from 'react'
import Tilted from '@/components/tilted'
import SideArrow from '@/components/SideArrow'
import ProfilePanel from '@/components/ProfilePanel'

const Execom = () => {
  return (
    <div className='flex flex-row min-h-screen'>
      <div className='w-1/4'>
        <Tilted title1="EXE" title2="COM"></Tilted>
      </div>

      <div className='w-3/4 pl-10 pt-10 md:pl-32 md:pt-24 relative'>
        
        <div className='mt-24 flex flex-col gap-40'>

          <ProfilePanel name="AKSHAY SANJEEV" des="IEEE CHAIR"></ProfilePanel>
          <ProfilePanel name="AKSHAY SANJEEV" des="IEEE VICE CHAIR"></ProfilePanel>

        </div>

        <SideArrow link="/eventsDet"></SideArrow>
      </div>
    </div>
  )
}

export default Execom