import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebookF, FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';
import gif from './images/giphy.gif';

function Footer() {
  return (
    <footer className=" text-white body-font">
      <div className=" bg-gray-800 container px-5 py-10 mx-auto max-w-full flex items-center sm:flex-row flex-col ">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white ">
          {/* <svg xmlns={gif} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg> */}
          <img
                    className="block h-12  lg:ml-3  w-auto"
                    src={gif}
                    alt="Workflow"
                  />
          <span className="ml-3 text-2xl">Chidanand Sisodia</span>
        </a>
        <div className='flex justify-center '>
        <p className="text-sm text-gray-400  sm:ml-6 sm:mt-0 mt-4">© Made with &hearts; By Chidanand - All rights reserved</p>
        </div>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className=" text-gray-400" href="https://www.linkedin.com/in/chidanand-sisodia-9576381b4">
            <FaLinkedin />
          </a>
          <a className="ml-4 text-gray-400" href="https://github.com/chidanand-sisodia">
            <FaGithub />
          </a>
          <a className="ml-4 text-gray-400" href="mailto:chidanandrajput.com">
            <FaEnvelope />
          </a>
          
          <a className="ml-4 text-gray-400" href="https://www.telegram.me/ChidanandSisodia">
            <FaTelegram />
          </a>
          <a className="ml-4 text-gray-400" href="https://www.instagram.com/__mr.rajput__07">
            <FaInstagram />
          </a>
        </span>
      </div>
      
    </footer>
  );
}

export default Footer;
