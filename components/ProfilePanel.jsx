import React from 'react'
import { FiUser } from "react-icons/fi";


const ProfilePanel = ({name,des}) => {
  return (
    <div className='flex flex-row gap-20'>
        <div>
            <FiUser className='text-8xl'/>
        </div>

          <div className='text-white flex flex-col gap-5'>
            <h1 className='text-5xl font-semibold'>{name}</h1>
            <h3 className='text-2xl font-semibold text-customGray'>{des}</h3>
          </div>
    </div>
  )
}

export default ProfilePanel