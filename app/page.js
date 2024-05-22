import React from 'react';
import Image from 'next/image';
import background from '../public/IEEE.png';
import Navbar from "@/components/navbar";
import Link from 'next/link';
import icon from '../public/down-arrow.png'

const App = () => {
  return (
    <>
      <Navbar text="menu" link="/navigate"></Navbar>
      <div className='border border-x-purple-500 relative overflow-hidden mx-20'>
        <div className="absolute inset-0">
          <Image src={background} layout='fill' className='w-full h-full' />
        </div>
        
        <div className='my-24 mx-28 border border-red-950 relative z-10'>
          {/* Content */}
          <div className='text-white text-4xl w-1/2 mb-20'>
            <h1>Digital <i>craftsmanship</i> SCULPTING YOU AS A LEADER</h1>
          </div>
          <div className='text-2xl w-1/2 font-light text-slate-300'>
            <p>Platform for the young minds to explore and experiment technological advancements with professional competencies following ethical standards</p>
          </div>
        </div>
      </div>

      <Link href="/scroll" ><Image src={icon} width={50} height={50} className='mt-10 ml-20'></Image></Link>
    </>
  );
}

export default App;
