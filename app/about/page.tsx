import React from 'react';
import './about.css';
import { FetchingFounders } from '@/components/pages/FetchingFrounders';

function About() {

  return (
    <div className="about-container">
      {/* Introduction Section */}
      <div className="introduction">
        <h2>We Are Prisme Edge Studio</h2>
        <h1>
        We're creating the best in interactive entertainment by making games that change the way people have fun.
        </h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        {/* Image Section */}
       
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1080&auto=format&fit=crop"
            alt="Gaming"
            className="about-image"
          />
          <div className='para'>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
          </div>
          
        </div>

        <div className='founders-background'>
          <div className='founders'>
            
            <FetchingFounders />

          </div>

        </div>  
      
    </div>
  );
}

export default About;
