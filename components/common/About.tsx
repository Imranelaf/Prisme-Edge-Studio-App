import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <p className="text-teal-800/100  font-semibold uppercase tracking-wide">About Prisme Edge Studio</p>
      <h1 className="text-8xl md:text-5xl font-bolder text-gray-800 mt-4 mb-6">
        Your Source for <br /> Video Games Entertainment
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me
        to add your own content and make changes to the font. I’m a great place for you to tell a story and let your
        users know a little more about you.
      </p>
      <button className="bg-teal-800/70 text-white px-6 py-3 rounded-md border border-transparent hover:bg-white hover:text-black hover:border-black transition duration-200">
  Learn more
</button>

    </div>
  );
}

export default About;
