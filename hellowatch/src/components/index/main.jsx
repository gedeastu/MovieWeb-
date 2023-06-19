import './main.css';
import logo from './img/hellowatch.svg'
import theBatman from './img/batman.jpg';
function Main () {
  return (
    <>
    <div id="header" className='max-w-full'>
      <div id="navbar" className='grid grid-cols-2 md:grid-cols-3 p-3 w-full bg-[#080B10]/20 backdrop-blur-lg fixed z-50'>
        <div id="logoAndMenu" className='flex gap-2 items-center'>
          <div id="menu" className=''>
          <label tabindex={0} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="btn bg-transparent border-none swap swap-rotate hover:bg-transparent hover:border-none">
              <svg class="swap-off fill-white" xmlns="http://www.w3.org/2000/svg" width="" height="3em" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
          </label>
          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700">
              <ul class="py-2  text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
          </div>
          </div>
          <img src={logo} alt="" className='w-8' />
        </div>
        <div id="utilities">
          <div id="search">

          </div>
        </div>
      </div>
      <div id="default-carousel" class="relative w-screen mx-auto pt-20" data-carousel="slide">
          <div class="relative h-96 overflow-hidden rounded-lg md:h-[40rem]">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div id="pict1" class="bg-cover bg-center w-full h-full relative backdrop-brightness-200">
                  <div class="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 h-44 w-full"></div>
                  <div id="content">
                  </div>
                  <div class="absolute bg-gradient-to-t from-[#080B10] to-black/0 top-0 h-full w-full"></div>
                </div>
              </div>
              
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div id="pict2" class="bg-cover bg-center w-full h-full relative">
                    <div class="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 w-full h-44"></div>
                    <div id="content">
                    </div>
                    <div class="absolute bg-gradient-to-t from-[#080B10] to-black/0 top-0 h-full w-full"></div>
                  </div>
              </div>
              
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <div id="pict3" class="bg-cover bg-top w-full h-full relative">
                  <div class="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 h-44 w-full"></div>
                  <div id="content">
                  </div>
                  <div class="absolute bg-gradient-to-t from-[#080B10] to-black/0 top-0 h-full w-full"></div>
                </div>
              </div>
              
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <div id="pict4" class="bg-cover bg-center w-full h-full relative">
                  <div class="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 h-44 w-full"></div>
                  <div id="content">
                  </div>
                  <div class="absolute bg-gradient-to-t from-[#080B10] to-black/0 top-0 h-full w-full"></div>
                </div>
              </div>
              
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <div id="pict5" class="bg-cover bg-top w-full h-full relative">
                  <div class="absolute bg-gradient-to-b from-[#080B10] to-black/0 top-0 h-44 w-full"></div>
                  <div id="content">
                  </div>
                  <div class="absolute bg-gradient-to-t from-[#080B10] to-black/0 top-0 h-full w-full"></div>
                </div>
              </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Main;