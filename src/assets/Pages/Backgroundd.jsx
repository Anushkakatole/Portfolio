import React from 'react';
import { Link } from 'react-router-dom';

function Backgroundd() {
  return (
    <div className='h-screen w-screen flex flex-row items-center justify-center bg-black gap-9'>
      <div className='w-100 h-100  border-1 border-white   p-5 hover:from-blue-500 to-purple-500 bg-gradient-to-r transition duration-300 ease-in-out'>
        <h1 className='text-5xl text-white mt-8 flex justify-center'>Education</h1>
        <p className='text-amber-50 m-5'>Pursuing Artificial Intelligence and Data Science at Dr. D. Y. Patil School of Science and Technology, Pimpri Chinchwad Pune.</p>
        <p className='text-amber-50 m-5 text-xl'>Bachelor of Technology - BTech, Artificial Intelligence</p>
        <h2 className='text-amber-50 m-5'>Website Developer & Designer</h2>
        
      </div>

      <div className='w-100 h-100  border-1 border-white   p-5 hover:from-blue-500 to-purple-500 bg-gradient-to-r transition duration-300 ease-in-out'>
        <h1 className='text-5xl text-white mt-8 flex justify-center'>Experiences</h1>
        <h2 className='text-amber-50 m-9  text-'>Design team Member <br />IEEE Pune Section - Full time <br /> Jan 2025 - Present Pune, Maharashtra, India
        </h2>
        
      </div>
      
    </div>

  );
}

export default Backgroundd;
