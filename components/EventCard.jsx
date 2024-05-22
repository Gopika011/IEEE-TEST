'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//carousal - react slick

const data = [
    {name: "RAZZLE DAZZLE", date: "14th Feb @5.00pm", year: 2022},
    {name: "RAZZLE DAZZLE", date: "14th Feb @5.00pm", year: 2022},
    {name: "RAZZLE DAZZLE", date: "14th Feb @5.00pm", year: 2022},
    {name: "RAZZLE DAZZLE", date: "14th Feb @5.00pm", year: 2023},
]


const EventCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      
  return (
    <div className=' w-3/4 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>

            {data.map( (dat) => (
                <div className='border border-white h-[180px] rounded'>
                    <div className='flex flex-col gap-8 justify-center h-full items-center'>
                        <h1 className='text-3xl'>{dat.name}</h1>
                        <h3 className='text-3xl'>{dat.date}</h3>

                    </div>
                </div>
            ))}
        </Slider>
            
        </div>
    </div>
    
  )
}

export default EventCard