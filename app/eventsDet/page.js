import BackArrow from '@/components/BackArrow'
import EventCard from '@/components/EventCard'
import React from 'react'

const Lists = [2023, 2022, 2021, 2020, 2019, 2018]

const EventDet = () => {
  return (
    <div className='flex flex-col h-screen relative'>
      <BackArrow></BackArrow>
      <div className='h-2/5 flex flex-col justify-center items-center'>
        <div>
          <ul className='menu menu-horizontal mb-1 mt-32'>
            {Lists.map( (list) => (
                <li key={list} className='px-3'><button className='btn btn-outline rounded-t-2xl rounded-bl-2xl text-3xl px-6'>{list}</button></li>
              ))}
          </ul>
        </div>
        <div className='bg-white h-0.5 w-3/5'></div>
      </div>

      <div className='h-3/5'>
          <EventCard></EventCard>
      </div>
    </div>
  )
}

export default EventDet