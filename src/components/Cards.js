import React from 'react'

function Cards({cards}) {
  return (
    <div className='p-8 w-full'>

        {cards.map((data)=>(
<div className="w-full rounded overflow-hidden shadow-lg border-2  border-black-700 mt-8 ">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-center m-8">{data.title}</h2>
        <p className="text-gray-700 text-base">{data.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
        ))}

    </div>
  )
}

export default Cards