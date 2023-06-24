import './main.css';
import dune from './img/dune.jpg';
import gotg from './img/gotgVol3.jpeg';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Main () {
  const navigate = useNavigate();
  return (
    <>
    <main className='bg-[#080B10] grid grid-cols-1 px-3 pt-12 relative md:grid-cols-4'>
      <div id="part1" className='col-span-3 relative h-max'>
      <div id="paginatorWatchType" className='w-max flex flex-col md:items-center md:flex-row md:gap-5'>
        <h1 className='font-bold text-[#789cff] text-xl pb-2 md:pb-0'>Recommended</h1>
        <ul className='flex items-center gap-2'>
        <button className='text-sm font-medium bg-[#704DB9] text-white p-1.5 rounded-lg'>Movies</button>
        <button className='text-sm' onClick={()=>navigate('/TvShows')}>TV Shows</button>
        <button className='text-sm' onClick={()=>navigate('/Trending')}>Trending</button>
        </ul>
      </div>
      <div id="listMovies" className='flex flex-wrap justify-evenly mx-auto my-5 gap-2 md:justify-start'>
        
      </div>
      </div>
      <div id="part2" className=''>
      <div id="paginatorMostView" className='flex flex-col md:items-center md:flex-row md:gap-2 md:place-self-center'>
        <h1 className='font-bold text-[#789cff] text-xl pb-2 md:pb-0'>Most Viewed</h1>
        <ul className='flex items-center gap-2'>
          <button className='text-sm font-medium bg-[#704DB9] text-white p-1.5 rounded-lg'>Days</button>
          <button className='text-sm'>Weeks</button>
          <button className='text-sm'>Years</button>
        </ul>
      </div>
      </div>
    </main>
    </>
  );
}

export default Main;