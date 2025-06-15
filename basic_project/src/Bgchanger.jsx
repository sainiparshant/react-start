import React, { useState } from 'react'

function Bgchanger() {

    const [color, setColor] = useState('olive')

    const change = (newColor) =>{
        setColor(newColor)
    };

  return (
    <div className={` w-full h-screen`} style={{background:color}}>
      
      <div className='bg-white  inset-x-0 rounded-xl font-semibold flex gap-6 p-4 fixed flex-wrap justify-center bottom-12' >
            <button className='rounded-lg p-4  bg-red-400 cursor-pointer ' onClick={() => change('red')}>Red</button>
            <button className='rounded-lg p-4 bg-blue-400 cursor-pointer ' onClick={()=>change('blue')}>Blue</button>
            <button className='rounded-lg p-4 bg-yellow-400 cursor-pointer ' onClick={() =>change('yellow')}>Yellow</button>
            <button className='rounded-lg p-4 bg-green-400 cursor-pointer ' onClick={() => change('green')}>Green</button>
            <button className='rounded-lg p-4 bg-violet-400 cursor-pointer ' onClick={() => change('violet')}>Violet</button>
      </div>
    </div>
  )
}

export default Bgchanger