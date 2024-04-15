import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebookF, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" text-white body-font">
      <div className=" bg-gray-800 container px-5 py-10 mx-auto flex items-center sm:flex-row flex-col ">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-3 text-xl">YourBrand</span>
        </a>
        <p className="text-sm text-gray-400  sm:ml-6 sm:mt-0 mt-4">© {new Date().getFullYear()} YourBrand - All rights reserved</p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400" href="https://www.facebook.com/yourusername">
            <FaFacebookF />
          </a>
          <a className="ml-4 text-gray-400" href="https://www.twitter.com/yourusername">
            <FaTwitter />
          </a>
          <a className="ml-4 text-gray-400" href="https://www.instagram.com/yourusername">
            <FaInstagram />
          </a>
          <a className="ml-4 text-gray-400" href="https://www.linkedin.com/in/yourusername">
            <FaLinkedin />
          </a>
          <a className="ml-4 text-gray-400" href="https://github.com/yourusername">
            <FaGithub />
          </a>
        </span>
      </div>
      
    </footer>
  );
}

export default Footer;
