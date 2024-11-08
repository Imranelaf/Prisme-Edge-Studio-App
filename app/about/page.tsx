import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-red-900 text-gray-100 py-16 px-6">
      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-lg font-semibold text-teal-300 tracking-wider uppercase">
          We Are Prisme Edge Studio
        </p>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
          Changing the way people have fun with interactive entertainment.
        </h1>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1080&auto=format&fit=crop"
            alt="Gaming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
           
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">What We Are About</h1>
          <div className="space-y-6">
            {/* Accomplishment */}
            <div>
              <h2 className="text-2xl font-semibold text-teal-600">
                Accomplishment
              </h2>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat illum alias officiis vitae sed adipisci numquam,
                aspernatur veritatis tempora debitis.
              </p>
            </div>
            {/* Creativity */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-600">
                Creativity
              </h2>
              <p className="mt-2 text-gray-700">
                I’m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story 
                and let your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
