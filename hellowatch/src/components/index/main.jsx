import './main.css';
import dune from './img/dune.jpg';
import gotg from './img/gotgVol3.jpeg';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Main () {
  const navigate = useNavigate();
  return (
    <>
    <main className='bg-[#080B10] grid grid-cols-1 px-3 pt-20 relative md:grid-cols-4'>
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
        {/* <div id="dune" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src={dune} alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div> */}
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
        <div id="forest" className='w-36 bg-[#101722] p-2 rounded-xl group hover:border-2 hover:border-[#704DB9] hover:ease-in-out hover:transition-all hover:duration-200 md:w-44'>
          <div id='play' className='bg-gradient-to-t from-[#704DB9] flex flex-col justify-center items-center to-transparent rounded-xl overflow-hidden transition-all h-max w-full relative'>
          <button className='absolute z-50 hidden gap-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          <h2 className='text-center font-bold text-white'>Play</h2>
          </button>
          <img src="https://picsum.photos/id/190/200/300" alt="" className='group-hover:opacity-20 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500'/>
          </div>
          <div id="desc" className='bg-[#080B10] text-[0.60rem] text-center rounded-md mt-2 py-1'>
            <h2>Movie - 2021 - 160 min</h2>
          </div>
          <h2 className='text-center font-medium'>Dune</h2>
          <div id='line' className='h-[0.10rem] bg-white/20 rounded-full w-full my-1'></div>
          <div id='ratings' className='flex items-center gap-1 justify-center'>
          <h3 className='font-semibold'>8.0</h3>
          <div class="rating rating-xs">
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled/>
            <input type="radio" name="rating-5" class="mask mask-star-2 bg-slate-300" disabled/>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div id="part2" className='mt-20 md:mt-0'>
      <div id="MostView" className=''>
        <div id="paginator" className='flex flex-col md:items-center md:flex-row md:gap-5 md:place-self-center'>
        <h1 className='font-bold text-[#789cff] text-xl pb-2 md:pb-0'>Most Viewed</h1>
        <ul className='flex items-center gap-2'>
          <button className='text-sm font-medium bg-[#704DB9] text-white p-1.5 rounded-lg'>Days</button>
          <button onClick={()=>navigate('/weeks')} className='text-sm'>Weeks</button>
          <button onClick={()=>navigate('/months')} className='text-sm'>Months</button>
        </ul>
        </div>
        <div id='content' className='my-5'>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/252/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/257/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/220/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/250/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/155/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div id="RecentlyUpdated" className='mt-5'>
      <h1 className='font-bold text-[#789cff] text-xl pb-2 md:pb-0'>Recently Updated</h1>
        {/* <div id="paginator" className='flex flex-col md:items-center md:flex-row md:gap-5 md:place-self-center'>
        <ul className='flex items-center gap-2'>
          <button className='text-sm font-medium bg-[#704DB9] text-white p-1.5 rounded-lg'>Days</button>
          <button className='text-sm'>Weeks</button>
          <button className='text-sm'>Years</button>
        </ul>
        </div> */}
        <div id='content' className='mt-3'>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/252/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/257/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/220/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/250/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        <div id="secretInvasion" className='p-2 rounded-xl gap-3 flex items-center hover:bg-[#151E2D] hover:transition-all hover:duration-300 hover:ease-in-out'>
          <div id='img'>
            <img src="https://picsum.photos/id/155/180/280" alt="" className='w-24 rounded-xl'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div id="desc" className='flex items-center gap-3 text-white font-medium'>
            <div id='type' className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                <h3 className='font-semibold text-white'>TV-14</h3>
            </div>
            <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                <h3 className='font-semibold'>HD</h3>
            </div>
            <div id='until' className='flex gap-2'>
              <h3>Season 01</h3>
              <h3>Episode 01</h3>
            </div>
          </div>
          <div id="title">
            <h1 className='font-bold text-white text-xl'>Secret Invasion</h1>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </main>
    </>
  );
}

export default Main;