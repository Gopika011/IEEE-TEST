import React from 'react';
import Tilted from '@/components/tilted';
import SideArrow from '@/components/SideArrow';
import Link from 'next/link';

const Events = () => {
  return (
    <div className='flex flex-row min-h-screen'>
      <div className='w-1/4'>
        <Tilted title1="EVE" title2="NTS"></Tilted>
      </div>

      <div className='w-3/4 pl-10 pt-10 md:pl-52 md:pt-24 relative text-white flex flex-col gap-12 md:gap-32'>
        <div>
          <h1 className='text-3xl md:text-5xl font-semibold mb-10'>Upcoming</h1>
          <h1 className='text-xl md:text-3xl font-semibold mb-2'>PEGASUS'23</h1>
          <p className='text-lg text-customFootGray font-semibold mb-5'>a solution based hackathon conducted by ieee</p>
          <button className='bg-customGray text-lg font-semibold py-1 px-4 rounded-lg'>register now</button>
        </div>

        <div>
          <h1 className='text-3xl md:text-5xl font-semibold mb-10'>Past Events</h1>
          <h1 className='text-xl md:text-3xl font-semibold mb-2'>PEGASUS'22</h1>
          <p className='text-lg text-customFootGray font-semibold'>a solution based hackathon conducted by ieee</p>
        </div>

        <SideArrow link="/eventsDet"></SideArrow>
      </div>
    </div>
  );
};

export default Events;
