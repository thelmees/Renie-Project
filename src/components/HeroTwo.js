import React from 'react'
import Renie8 from '../images/Renie8.jpg'

function HeroTwo({isFixed}) {
    return (

        <div className={`mt-8 rounded-md transition ease-out  ${isFixed ? 'fixed w-[30%]' : 'hidden'} top-0  z-10`}>

            <div class="items-stretch flex flex-col justify-center rounded-x1  rounded-xl h-16">
                <div class=" justify-between items-stretch flex gap-5  mt-5">
                    <div class="flex grow basis-[0%] flex-col items-stretch leading-6">
                    <img className='rounded-md w-[900px] h-[125px]' src={Renie8} alt=''/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroTwo