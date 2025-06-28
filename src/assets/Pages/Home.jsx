import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import akImg from '../ak1.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='bg-black h-screen w-100% '> 
         <div className='flex flex-col items-center justify-center pt-15'>   
            <h1 className="text-3xl font-bold underline text-white ">
                Anushka <span className='text-purple-700'>katole</span>
            </h1>
            <p className='text-white pt-1'>“Turning ideas into intelligent solutions.”</p>
            <img src="{akImg}" alt="Anushka" class="pt-16 w-100 h-120" />
         <div className=''>
           <h1 className="text-7xl font-bold text-white  ">
              WEB DESIGNER
           </h1>
           <h1 className="text-7xl font-bold text-white ">
             & <span className='text-purple-700'>DEVELOPER</span>
           </h1>
        </div>
        <br />
        <hr />

        /*  boxes  */
        /* box -1   */
      <div className="bg-black text-white w-full  flex flex-row gap-15 items-center justify-center pt-20 ">
        <div className="text-white text-center h-100 w-150 ">
          <img src="ak1.jpg" alt="" className='w-cover h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline">My Projects</Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
        
        </div>

        <div className="text-white text-center  h-100 w-150 ">
          <img src="p-1.jpeg" alt="" className='w-cover h-80 border'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/Skills" className=" underline">My Skills</Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

        </div> 

      </div>


      {/* box -2 */}
      <div className="bg-black text-white w-full  flex flex-row gap-15 items-center justify-center pt-20 ">
        <div className="text-white text-center h-100 w-150 ">
          <img src="back.jpg" alt="" className='w-cover h-80 w-full border'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/background" className=" underline">My Background</Link>
             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
        
        </div>

        <div className="text-white text-center  h-100 w-150 ">
          <img src="p-2.jpeg" alt="" className='w-cover h-80 border'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/about " className=" underline">About me</Link></h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

        </div> 

      </div>
      <br />
      <hr />


      {/* last  navbar */}
      <div className='h-30 w-full  bg-black flex gap-10 items-center pt-1 pl-250 justify-center '>
        <div className='text-amber-50 text-xl '>
          <p>@ 2025 Anushka katole All Rights Reserved.</p>
        </div>
      </div>





     </div>  
    </div>

    </div>
  )
}

export default Home
