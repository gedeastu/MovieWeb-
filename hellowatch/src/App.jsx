import './App.css';
import logo from './components/index/img/hellowatch.svg';
import Main from './pages/mainPage';
import TvShow from './pages/tvPage';
import Trending from './pages/trendingPage';
import Weeks from './components/mostViewed/week'
import Months from './components/mostViewed/month'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  const HideShow = () => {
    let pswrd = document.getElementById("Password");
    if(pswrd.type === "password"){
      pswrd.type = "text";
    }else{
      pswrd.type = "password";
    }
  };
  const search = (value)=>{
    console.log({value});
  }
  return (
    <>
    <div className='container max-w-full bg-[#080B10] min-h-screen'>

     {/* HEADER  */}
    <header id="header" className='max-w-full'>
      <div id="navbar" className='flex justify-between items-center px-5 py-3 w-full bg-[#080B10]/10 backdrop-blur-lg fixed z-50 md:pt-4'>
        <div id="logoAndMenu" className='flex gap-5 items-center'>
          <div id="menu" className=''>
          <label id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="bg-transparent cursor-pointer border-none hover:bg-transparent hover:border-none">
          <svg className='fill-white hover:fill-[#704DB9]' xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </label>
          <div id="dropdown" className="z-10 hidden">
              <ul className="py-2 ml-3 mt-2 text-sm text-white text-left bg-[#080B10] border border-white/20 rounded-lg shadow-md w-44 dark:bg-gray-700" aria-labelledby="dropdownDefaultButton">
                <li className='flex items-center gap-2 px-4 group'>
                  <svg className='fill-white group-hover:fill-green-400' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V216c0-13.3-10.7-24-24-24H248z"/></svg>
                  <a href="#" className="block py-2 group-hover:text-green-400 dark:group-hover:text-green-400">Home</a>
                </li>
                <li className='flex items-center gap-2 px-4 group'>
                  <svg className='fill-white group-hover:fill-green-400' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                  <a href="#" className="block py-2 group-hover:text-green-400 dark:group-hover:text-green-400">Genre</a>
                </li>
                <li className='flex items-center gap-2 px-4 group'>
                  <svg className='fill-white group-hover:fill-green-400' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                  <a href="#" className="block py-2 group-hover:text-green-400 dark:group-hover:text-green-400">Country</a>
                </li>
                <li className='flex items-center gap-2 px-4 group'>
                  <svg className='fill-white group-hover:fill-green-400' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>
                  <a href="#" className="block py-2 group-hover:text-green-400 dark:group-hover:text-green-400">Movies</a>
                </li>
                <li className='flex items-center gap-2 px-4 group'>
                  <svg className='fill-white group-hover:fill-green-400' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                  <a href="#" className="block py-2 group-hover:text-green-400 dark:group-hover:text-green-400">TV Shows</a>
                </li>
                <li className='flex items-center gap-2 px-4 group'>
                  <svg className='fill-white group-hover:fill-green-400' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
                  <a href="#" className="block py-2 group-hover:text-green-400 dark:group-hover:text-green-400">Trending</a>
                </li>
              </ul>
          </div>
          </div>
          <img src={logo} alt="" className='w-8' />
          <h3 className='font-semibold text-white text-xl' >HelloWatch</h3>
        </div>
        <div id='searchDesktop' className='flex items-center gap-2'>
          <button id='filter' className='hidden bg-[#704DB9] w-20 h-8 rounded-lg md:flex md:justify-center md:gap-2 md:items-center'>
          <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
          <p className='text-white'>Filter</p>
          </button>
          <div id="fieldSearch" className='hidden md:flex'>
            <div id="search" className='flex items-center justify-evenly gap-3'>
              <input type="text" onChange={({target}) => search(target.value)} className='rounded-2xl w-[23rem] h-10 text-white font-semibold bg-white/10' placeholder='Search movies / tv series...'/>
              <button className='bg-[#704DB9] p-2 rounded-2xl'>
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div id="utilities" className='my-auto flex gap-5 items-center'>
        <button id='search' className="bg-[#704DB9] w-10 h-10 flex justify-center items-center rounded-xl md:hidden" onClick={()=>window.modal_search.showModal()}>
        <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
        <button id='signIn' className="bg-[#704DB9] w-10 h-10 flex justify-evenly items-center rounded-xl md:w-24" onClick={()=>window.modal_signIn.showModal()}>
        <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
        <h3 className='font-semibold text-white hidden md:flex'>Sign In</h3>
        </button>
        </div>
      </div>
      <div id="default-carousel" className="relative w-screen mx-auto pt-20" data-carousel="slide">
          <div className="relative h-96 overflow-hidden rounded-lg md:h-[40rem]">
              
              <div className="hidden duration-1000 delay-300 ease-in-out" data-carousel-item>
                <div id="pict1" className="bg-cover bg-center w-full h-full relative flex flex-col">
                    <div className="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 w-full h-44"></div>
                    <div id="content" className='flex flex-col gap-2.5 justify-end pb-5 bg-gradient-to-t from-[#080B10] to-transparent w-full h-full'>
                      <div className='flex flex-col gap-2 scale-90 md:scale-110'>
                      <h1 className='uppercase text-white text-2xl font-bold text-center mb-0 md:text-4xl'>
                      Spider-Man: Across the Spider-Verse 
                      </h1>
                      <div id="descWatch" className='flex items-center justify-evenly w-full md:w-[40rem] md:mx-auto'>
                      <div id="WatchedType" className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                        <h3 className='font-semibold text-white'>PG</h3>
                      </div>
                      <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                        <h3 className='font-semibold'>HD</h3>
                      </div>
                      <div id="ratings" className='flex items-center gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
                      <p className='text-white font-bold'>9.0</p>
                      </div>
                      <div id="duration" className='flex items-center text-white gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                      <p>140 min</p>
                      </div>
                        <h3 className='text-white font-medium'>
                          Animation
                        </h3>
                        <h3 className='text-white font-medium'>
                          Action
                        </h3>
                        <h3 className='text-white font-medium'>
                          Adventure
                        </h3>
                        </div>
                        <div id="narration" className='hidden w-[50rem] text-sm my-2 text-center mx-auto text-white md:flex'>
                          <p>Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.</p>
                        </div>
                      </div>
                      <div id="btn_watch" className='flex w-max mx-auto gap-2'>
                          <button id='watch' className='font-semibold flex items-center gap-2 bg-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Watch Now</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                          </button>
                          <button id='bookmark' className='font-semibold flex items-center gap-2 bg-transparent border border-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Add Bookmark</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                          </button>
                        </div>
                    </div>
                </div>
              </div>

              <div className="hidden duration-1000 delay-300 ease-in-out" data-carousel-item>
                <div id="pict2" className="bg-cover bg-center w-full h-full relative flex flex-col">
                    <div className="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 w-full h-44"></div>
                    <div id="content" className='flex flex-col gap-2.5 justify-end pb-5 bg-gradient-to-t from-[#080B10] to-transparent w-full h-full'>
                      <div className='flex flex-col gap-2 scale-90 md:scale-110'>
                      <h1 className='uppercase text-2xl text-white font-bold text-center mb-0 md:text-4xl'>
                      The Flash 
                      </h1>
                      <div id="descWatch" className='flex items-center justify-evenly w-full md:w-[40rem] md:mx-auto'>
                      <div id="WatchedType" className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                        <h3 className='font-semibold text-white'>PG-13</h3>
                      </div>
                      <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                        <h3 className='font-semibold'>HD</h3>
                      </div>
                      <div id="ratings" className='flex items-center gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
                      <p className='text-white font-bold'>7.3</p>
                      </div>
                      <div id="duration" className='flex items-center text-white gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                      <p>150 min</p>
                      </div>
                        <h3 className='text-white font-medium'>
                          Action
                        </h3>
                        <h3 className='text-white font-medium'>
                          Fantasy
                        </h3>
                        <h3 className='text-white font-medium'>
                          Adventure
                        </h3>
                        </div>
                      </div>
                      <div id="narration" className='hidden w-[43rem] text-sm my-2 text-center mx-auto text-white md:flex'>
                          <p>
                          Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.
                          </p>
                      </div>
                      <div id="btn_watch" className='flex items-center w-max mx-auto gap-2'>
                          <button id='watch' className='font-semibold flex items-center gap-2 bg-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Watch Now</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                          </button>
                          <button id='bookmark' className='font-semibold flex items-center gap-2 bg-transparent border border-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Add Bookmark</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                          </button>
                        </div>
                    </div>
                </div>
              </div>

              <div className="hidden duration-1000 delay-300 ease-in-out" data-carousel-item>
                <div id="pict3" className="bg-cover bg-center w-full h-full relative flex flex-col">
                    <div className="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 w-full h-44"></div>
                    <div id="content" className='flex flex-col gap-2.5 justify-end pb-5 bg-gradient-to-t from-[#080B10] to-transparent w-full h-full'>
                      <div className='flex flex-col gap-2 scale-90 md:scale-110'>
                      <h1 className='uppercase text-2xl text-white font-bold text-center mb-0 md:text-4xl'>
                      Arcane 
                      </h1>
                      <div id="descWatch" className='flex items-center justify-evenly w-full md:w-[40rem] md:mx-auto'>
                      <div id="WatchedType" className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                        <h3 className='font-semibold text-white'>TV-SERIES</h3>
                      </div>
                      <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                        <h3 className='font-semibold'>HD</h3>
                      </div>
                      <div id="ratings" className='flex items-center gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
                      <p className='text-white font-bold'>9.1</p>
                      </div>
                      <div id="duration" className='flex items-center text-white gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                      <p>41 min</p>
                      </div>
                        <h3 className='text-white font-medium'>
                          Animation
                        </h3>
                        <h3 className='text-white font-medium'>
                          Fantasy
                        </h3>
                        <h3 className='text-white font-medium'>
                          Adventure
                        </h3>
                        </div>
                      </div>
                      <div id="narration" className='hidden w-[43rem] text-sm my-2 text-center mx-auto text-white md:flex'>
                          <p>
                          Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League Of Legends champions and the power that will tear them apart.
                          </p>
                      </div>
                      <div id="btn_watch" className='flex w-max mx-auto gap-2'>
                          <button id='watch' className='font-semibold flex items-center gap-2 bg-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Watch Now</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                          </button>
                          <button id='bookmark' className='font-semibold flex items-center gap-2 bg-transparent border border-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Add Bookmark</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                          </button>
                        </div>
                    </div>
                </div>
              </div>
              <div className="hidden duration-1000 delay-300 ease-in-out" data-carousel-item>
                <div id="pict4" className="bg-cover bg-center w-full h-full relative flex flex-col">
                    <div className="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 w-full h-44"></div>
                    <div id="content" className='flex flex-col gap-2.5 justify-end pb-5 bg-gradient-to-t from-[#080B10] to-transparent w-full h-full'>
                      <div className='flex flex-col gap-2 scale-90 md:scale-110'>
                      <h1 className='uppercase text-2xl text-white font-bold text-center mb-0 md:text-4xl'>
                      John Wick : Chapter 4
                      </h1>
                      <div id="descWatch" className='flex items-center justify-evenly w-full md:w-[40rem] md:mx-auto'>
                      <div id="WatchedType" className='bg-transparent border border-slate-200 rounded-lg w-max px-2'>
                        <h3 className='font-semibold text-white'>Rated-R</h3>
                      </div>
                      <div id='quality' className='bg-slate-200 text-[#080B10] rounded-lg w-max px-2'>
                        <h3 className='font-semibold'>HD</h3>
                      </div>
                      <div id="ratings" className='flex items-center gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
                      <p className='text-white font-bold'>7.9</p>
                      </div>
                      <div id="duration" className='flex items-center text-white gap-1'>
                      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                      <p>169 min</p>
                      </div>
                        <h3 className='text-white font-medium'>
                          Action
                        </h3>
                        <h3 className='text-white font-medium'>
                          Thiller
                        </h3>
                        <h3 className='text-white font-medium'>
                          Drama
                        </h3>
                        </div>
                      </div>
                      <div id="narration" className='hidden w-[43rem] text-sm my-2 text-center mx-auto text-white md:flex'>
                          <p>
                          John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.
                          </p>
                      </div>
                      <div id="btn_watch" className='flex w-max mx-auto gap-2'>
                          <button id='watch' className='font-semibold flex items-center gap-2 bg-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Watch Now</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                          </button>
                          <button id='bookmark' className='font-semibold flex items-center gap-2 bg-transparent border border-[#704DB9] text-white py-1.5 px-3 rounded-2xl'>
                            <p>Add Bookmark</p>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                          </button>
                        </div>
                    </div>
                </div>
              </div>

              {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <div id="pict1" className="bg-cover bg-center w-full h-full relative backdrop-brightness-200">
                  <div className="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 h-44 w-full"></div>
                  <div id="content">
                  </div>
                  <div className="absolute bg-gradient-to-t from-[#080B10] to-black/0 top-0 h-full w-full"></div>
                </div>
              </div> */}
          </div>
      </div>
    </header>
    <dialog id="modal_search" className="modal">
          <form method="dialog" className="modal-box bg-transparent border border-white/20 text-white backdrop-blur-3xl shadow-lg">
            <h3 className="font-bold text-lg">Find your Movies / TV Series</h3>
            <div id="search" className='flex items-center justify-evenly mt-3 gap-3'>
            <button id='filter' className='bg-white w-28 h-10 rounded-xl flex justify-center gap-1.5 items-center'>
            <svg className='fill-[#704DB9]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
            <p className='text-[#704DB9] font-medium'>Filter</p>
            </button>
              <input type="text" className='rounded-2xl w-[23rem] text-[#080B10] font-semibold' placeholder='search title'/>
              <button className='bg-white p-2.5 rounded-2xl'>
              <svg className='fill-[#704DB9]' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </button>
            </div>
            <div className="modal-action absolute -top-3.5 right-3">
              <button className="bg-transparent border-none w-7 h-7 flex items-center justify-center rounded-lg">
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </button>
            </div>
          </form>
    </dialog>
    <dialog id="modal_signIn" className="modal">
          <form method="dialog" className="modal-box bg-transparent border border-white/20 text-white flex flex-col gap-3 shadow-lg backdrop-blur-3xl">
            <div className="modal-action absolute -top-3.5 right-3">
              <button className="bg-transparent border-none bg-slate-400 w-7 h-7 flex items-center justify-center rounded-lg">
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </button>
            </div>
            <h3 className="font-bold text-3xl">Sign In</h3>
            <div id='signUp' className='flex gap-1.5 items-center'>
              <p>Not a Member? </p>
              <a href="#" className='font-semibold text-white active:scale-95'>Sign Up Now</a>
            </div>
            <div id="username" className='bg-transparent border border-white/20 text-white rounded-xl'>
              <div id='title' className='flex items-center pt-2 px-2 gap-2'>
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
              <h3 className='text-white font-medium'>Account</h3>
              </div>
              <input type="text" className='bg-transparent w-full text-white border-none font-semibold focus:outline-none focus:ring-0 focus:border-none' placeholder='Username or e-mail'/>
            </div>
            <div id="password" className='bg-transparent border border-white/20 text-white rounded-xl relative'>
              <div id='title' className='flex items-center pt-2 px-2 gap-2'>
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <h3 className='text-white font-medium'>Password</h3>
              </div>
              <form action="" className=''>
              <input id='Password' type="password" className='bg-transparent w-full text-white border-none font-semibold focus:outline-none focus:ring-0 focus:border-none' placeholder='Your password'/>
              <label className="swap absolute right-4 bottom-3">
              <input type="checkbox" className='hidden' onClick={()=>HideShow()}/>
              <svg class="swap-off fill-white/30" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
              <svg class="swap-on fill-white/30" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/></svg>
             </label>
              </form>
            </div>
            <button id='Login' className='flex items-center justify-center gap-2 bg-[#704DB9] py-2 rounded-xl border border-white/20'>
              <p className='text-white uppercase font-medium'>
                Login
              </p>
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4l107.1-99.9c3.8-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5l107.1 99.9c4.5 4.2 7.1 10.1 7.1 16.3c0 12.3-10 22.3-22.3 22.3H304v96c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V256H150.3C138 256 128 246 128 233.7c0-6.2 2.6-12.1 7.1-16.3z"/></svg>
            </button>
            <button id='forgotPassword' className='font-medium'>
              Forgot password
            </button>
          </form>
    </dialog>
    {/* END OF HEADER */}
    
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/TvShows' element={<TvShow/>}/>
          <Route path='/Trending' element={<Trending/>}/>
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/weeks' element={<Weeks/>}/>
          <Route path='/months' element={<Months/>} />
        </Routes>
      </Router>
    
      <footer>

      </footer>
    </div>
    </>
  );
}

export default App;
