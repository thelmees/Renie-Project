import React from 'react'
import Renie4 from '../images/Renie4.png'

function Navbar({isFixed}) {
  return (
    <div>
      
        <div id='nav' className={`bg-white text-white py-3 ${isFixed ? 'fixed top-0  w-[70%] z-10' : 'static'}`}>

            <img className='h-16 p-3 w-[10%]' src={Renie4} alt="" />

          
      </div>
    </div>
  )
}

export default Navbar