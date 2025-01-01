import Image from 'next/image';
import React from 'react';

function OurTeam() {
  return (
    <div className="team-container bg-gradient-to-b from-red-200 to-red-900 py-12 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
        Our Team
      </h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl">
        
      <Image
            className="rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 border-solid border-black border-2"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team"
            width={500} 
            height={400}
          />
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
            It takes the world&apos;s best talent to change the game.
          </h3>
          <button className="bg-teal-800/70 text-white px-6 py-3 rounded-md border border-transparent hover:bg-white hover:text-black hover:border-black transition duration-200 text-sm sm:text-base md:text-lg">
            Join Our Team
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default OurTeam;
