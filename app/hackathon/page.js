
import React from 'react'
import Navbar from '@/components/navbar'


const Hackathon = () => {
  return (
    <div className='h-screen'>
      <Navbar text="menu" link="/navigate"></Navbar>
      <div className='text-5xl flex justify-center items-center h-full'>
        <h1>Hackathons </h1>
      </div>

    </div>

  )
}

export default Hackathon