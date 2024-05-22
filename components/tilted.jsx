/*
import React from 'react'

const tilted = () => {
  return (
    <div className='min-h-56 relative px-5 border border-pink-600'>
        <h3 className='text-6xl bottom-0 left-0  absolute -rotate-90 border border-yellow-500'>HEADER</h3>
        <div className='bg-white w-2 h-screen absolute ml-24'></div>
    </div>
  )
}

export default tilted
*/

/*
import React from 'react'

const Tilted = ({title,ml}) => { 
  return (
    <div className='min-h-56 relative px-5 border border-pink-600'>
        <h3 className={`text-6xl -left-20 -ml-${ml} -mt-16 absolute px-11 -rotate-90 origin-bottom-right border border-yellow-500 bg-black z-10`}>{title}</h3>
        <div className='bg-white w-2 h-screen absolute ml-28'></div>
    </div>
  )
}

export default Tilted

*/

import React from 'react'

const Tilted = ({title1,title2,ml}) => { 
  return (
    <div className='flex flex-col h-screen md:px-10'>
      <div className='h-3/5 relative'>
          <h3 className={`text-5xl lg:text-6xl font-semibold ml-20 absolute -bottom-10 -rotate-90 origin-top-left text-customGray`}>{title1}<span className='text-white'>{title2}</span></h3>
      </div>

      <div className='h-2/5 px-3'>
        <div className='bg-white w-1.5 h-4/5 ml-24'></div>
      </div>
    </div>

  )
}

export default Tilted