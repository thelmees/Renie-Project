import React, { useEffect, useState } from 'react'
import Renie1 from '../images/Renie1.png'
import Renie2 from '../images/Renie2.png'
import Renie5 from '../images/Renie5.jpg'
import Renie6 from '../images/Renie6.jpg'
import Renie7 from '../images/Renie7.jpg'

function Banner({ autoplay = true, autoplayInterval = 5000 }) {
    
        const images = [Renie1,Renie2,Renie5,Renie6,Renie7]

        const [currentSlide, setCurrentSlide] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
              if (autoplay) {
                setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
              }
            }, autoplayInterval);
        
            return () => clearInterval(intervalId);
          }, [images.length, currentSlide, autoplay, autoplayInterval]);


  return (
    <div className="overflow-hidden relative h-[50%]">
      <div
        className='flex transition ease-out duration-40 mt-[73px]'
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((src) => {
          return <img src={src} alt='' className=' w-[100%] object-contain' />;
        })} 
      </div>


      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full mb-8">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrentSlide(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-2 cursor-pointer  ${
                i === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  )
}

export default Banner