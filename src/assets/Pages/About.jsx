import React from 'react'
import { Link } from 'react-router-dom';


function Rush() {
  return (
    <div className='h-screen w-screen flex flex-row items-center justify-center bg-black gap-9'>
      <div className='w-200 h-200  border-1 border-white   p-5 hover:from-blue-500 to-purple-500 bg-gradient-to-r transition duration-300 ease-in-out'>
        <h1 className='text-5xl text-white mt-8 flex justify-center'>About me</h1>
        <p className='text-amber-50 text-xl m-10'>   I'm Anushka Katole, currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science at Dr. D. Y. Patil School of Science and Technology, Pimpri Chinchwad, Pune. I'm passionate about building meaningful digital experiences through frontend development and thoughtful UI/UX design.</p>
        <p className='text-amber-50 m-10 text-xl'>   As a Design Team Member at IEEE Pune Section, I contribute to creative and impactful projects using my skills in graphic design, modern web technologies, and user experience principles. I'm enthusiastic about solving real-world problems using technology, and I’m always looking to grow and learn.
        </p>
      </div>



    </div>
  )
}

export default Rush
