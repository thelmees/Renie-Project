import React from 'react'
import Renie3 from '../images/Renie3.png'

function Hero({ isFixed }) {
    return (

        <div className={`py-3 transition ease-out m-auto  ${isFixed ? 'fixed w-[30%]' : 'static'} top-0  z-10`}>

            <div class="bg-gradient-to-b from-[#e31662] to-[#3c72ed] items-stretch flex flex-col justify-center p-4 rounded-x1  rounded-xl h-22">
                <div class=" justify-between items-stretch flex gap-5 px-0.5">
                    <div class="flex grow basis-[0%] flex-col items-stretch leading-6">
                        <div class="mt-2 px-2 w-[150px] text-center text-blue-500 text-left text-xl font-medium uppercase whitespace-nowrap bg-white justify-cer
                                    ter items-stretch leading-6 rounded-md"> Lets start!</div>
                        <div class="text-white text-md font-medium uppercase whitespace-nowrap leading-4 mt-1.5">
                            Register and locate
                            <br />
                            your nearest
                            <br />
                            Renie bin!
                        </div>
                    </div>
                    <img alt="img" loading="lazy" src={Renie3} class="aspect-square object-contain object-center overflow-hidden self-center
                                                                       shrink-0 max-w-full my-auto"/>
                </div>
            </div>


        </div>
    )
}

export default Hero