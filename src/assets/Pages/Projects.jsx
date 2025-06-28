import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';


function Projects() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-10 '>
      <h1 className='text-5xl bold uppercase underline text-purple-700'>Projects

      </h1>


      <div className='flex flex-row flex-wrap items-center justify-center  gap-15 mt-22'>
      {/* card    */}
      {/* 1 st project   */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="design.jpeg" alt="" className='w-cover h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/rush" className=" underline">DesignRush</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
      </div>


      {/* 2 nd project    */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="premier.jpg" alt="" className='w-cover h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/premier" className=" underline">Premier</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>

      {/* 3rd project    */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="obys.jpg" alt="" className='w-cover h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/agency" className=" underline">Obys Agency</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>

      {/* 4 th project bg-gradient-to-b from-black via-gray-900 to-black text-white p-10 */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="Cotten Weave.jpeg" alt="" className='w-cover h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/weave" className=" underline">Cotten Weave</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>

      {/* 5 th project    */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="optitrend.jpg" alt="" className='w-cover h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/trend" className=" underline">OptiTrend</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>

      </div>

    </div>
  );
}

export default Projects;
