import React from 'react';
import DP from './images/DP1.jpg'; // Importing the image from your local folder

function About() {
  return (
    <div className="container mx-auto px-4 md:p-20 flex items-center min-h-screen bg-green-100 p-12">
      <div className="flex flex-col md:flex-row items-center justify-center py-12 md:py-24 bg-green-300 shadow-2xl rounded-lg mx-4 md:mx-0 p-12">
        <div className="mb-6 md:mb-0 md:flex-1 md:mr-4"> {/* Adjusted the margin to reduce the gap */}
          <img 
            src={DP}
            alt="Chidanand Sisodia"
            className="rounded-full shadow-lg max-w-full h-auto align-middle border-none"
          />
        </div>
        <div className="md:flex-1 p-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">About Me</h1>
          <p className="text-lg font-bold text-gray-600 mb-4">
            I'm Chidanand Sisodia, a passionate software developer with a focus on web development
            and data science. I love building interactive applications and exploring new technologies
            that improve user experiences.
          </p>
          <p className="text-lg font-bold text-gray-600">
            My journey in tech started with my interest in problem-solving and has evolved into a
            career that allows me to creatively express solutions through code. I specialize in
            modern JavaScript frameworks and have a keen interest in developing scalable web
            applications.
            My journey in tech started with my interest in problem-solving and has evolved into a
            career that allows me to creatively express solutions through code. I specialize in
            modern JavaScript frameworks and have a keen interest in developing scalable web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
