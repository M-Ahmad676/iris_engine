import React, {useEffect, useState} from 'react'
import { IoMdAddCircle } from "react-icons/io";

export default function GameCover({title, FetchGames}) {
  
  const [games, setGames] = useState([]);

  useEffect(()=> {
     
    const FetchData = async() => {
    const responseData = await FetchGames('racing',4,'2020-01-01,2024-11-30','Forza,MotoGP,Need for Speed')
  
      // Ensure that the response is an array or fallback to an empty array
      if (Array.isArray(responseData)) {
        setGames(responseData);
      } else {
        setGames([]); // Set empty array if the response is not an array
      }
    }
      
    FetchData()

  },[FetchGames])

  return (
    <div>
        <h3 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-medium">{title}</h3>  
      <div className='pt-8 text-center'>
        <div className='text-right text-sm text-white cursor-pointer hover:underline pb-4 font-normal'>Show All</div>
        <div className='flex justify-between'>
        {games.map(game => (
          <div className='rounded-xl group max-w-[15rem] cursor-pointer' key={game.id}>
           <div className='relative w-full h-[14rem]'>
           <img src={game.background_image} alt={game.name} className='object-cover w-full rounded-lg transition-all duration-150 group-hover:opacity-70 h-full' />
           <IoMdAddCircle className='text-[1.8rem] absolute top-2 right-2 hidden group-hover:block hover:text-[#ffffff]'/>
           </div>
           <div className='flex flex-col justify-between text-white py-3 text-left h-[9rem]'>
          <div className='h-[3rem]'>
           <p className='text-[#ff32bb] font-medium text-sm'>Base Game</p>
           <h3 className='text-[1.05rem] font-medium'>{game.name}</h3>
           </div>
           <h2 className='text-[1rem] font-semibold pt-3 text-gray-300'>Free</h2> 
           </div>       
          </div>
          ))}
        </div>
        </div>
      </div>
  )
}
