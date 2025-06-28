import { Link } from 'react-router-dom';
import React from 'react';


function Skills() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-10">
        <h1 className="text-4xl font-bold mb-13 text-center">
            My Skills</h1>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">HTML</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">CSS / Tailwind</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">JavaScript</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">React.js</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">Python</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">Routers</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">Vite</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">Git & GitHub</div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">UI/UX Design</div>

        </div>
      </div>
    );
  }
  
  export default Skills;
  