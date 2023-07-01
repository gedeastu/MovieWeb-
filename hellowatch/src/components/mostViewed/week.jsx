import './week.css';
import { useNavigate } from 'react-router-dom';
function Week () {
  const navigate = useNavigate();
  return (
    <>
    <div id="part2" className='mt-20 md:mt-0'>
      <div id="MostView" className=''>
        <div id="paginator" className='flex flex-col md:items-center md:flex-row md:gap-5 md:place-self-center'>
        <h1 className='font-bold text-[#789cff] text-xl pb-2 md:pb-0'>Most Viewed</h1>
        <ul className='flex items-center gap-2'>
          <button onClick={() => navigate('/')} className='text-sm'>Days</button>
          <button className='text-sm font-medium bg-[#704DB9] text-white p-1.5 rounded-lg'>Weeks</button>
          <button onClick={() => navigate('/months')} className='text-sm'>Months</button>
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
    </>
  );
}

export default Week;