import './index.css';
import React from 'react';


function Card({username="hello"}){

  

    return(
       <div className="border-4 border-black max-w-xl mx-auto p-6 rounded-lg shadow-lg">

      <h1 className="text-center font-bold text-2xl mb-8 underline">{username}</h1>

      <div className="flex flex-col md:flex-row gap-6">
       
        <div className="md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s"
            alt="Example"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        <div className="md:w-1/2 text-justify">
          <p>
            sjkhgskjg kfjskj sgfskjfg hkjsfhkjefh skjfgsjkhgskjhg sgkjhsdgkjhsdgkjsdghsdkj vskjghksdjvghkj
            gfhkjgfhsdgvkjhsgfkjs fgkjhsgfsk jgfksjhfksjgf skjgf skgjhskjg hskgjhskgjvskjg hsgkjh sgkjs gksjg skjf
          </p>
        </div>
      </div>
    </div>
    )
}

export default Card