import React,{useEffect} from 'react';
import DP from './images/DP1.jpg'; // Importing the image from your local folder

function About() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'; // Enable smooth scrolling for all operations
  }, []);


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
        <div className="md:flex-1 lg:p-5 sm:pt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">About Me</h1>
          <p className="text-lg font-bold text-gray-600 mb-4">
          I am Chidanand Sisodia, a software developer with a passion for Data Science 
          and a broad interest in various technologies. My professional path reflects a commitment to 
          learning and utilizing a diverse range of tools and frameworks, ensuring I remain adaptable 
          and innovative in the ever-evolving tech landscape.
          </p>
          <p className="text-lg font-bold text-gray-600">
          I am enthusiastic about exploring new solutions and continuously expanding my skills, 
          particularly in Software development and Data Science. 
          My approach is characterized by a constant drive to integrate creative problem-solving 
          with the latest technological advancements, aiming to produce impactful and forward-thinking solutions.


          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
