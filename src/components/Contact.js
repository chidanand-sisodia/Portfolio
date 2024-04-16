import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookF, FaTwitter, FaTelegram } from 'react-icons/fa';

function Contact() {
  return (
    <section className="text-gray-700 body-font relative bg-gray-500">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 bg-white  p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Send me a message and I'll get back to you as soon as possible!</p>
          <input type="text" id="name" name="name" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4" placeholder="Name" />
          <input type="email" id="email" name="email" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4" placeholder="Email" />
          <textarea id="message" name="message" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-4" placeholder="Message"></textarea>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:mr-auto w-full  md:mt-0">
          <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">Get in Touch</h2>
          <p className="leading-relaxed mb-4">Chidanand Sisodia</p>
          <p className="leading-relaxed mb-1">I have worked on multiple projects and have built my own website.</p>
          <p className="leading-relaxed mb-3">Dhule, Maharashtra</p>
          <a className="leading-relaxed mb-3 text-indigo-500" href="mailto:chidanandrajput@gmail.com">chidanandrajput@gmail.com</a>
          <div className="flex">
            <a href="https://linkedin.com/in/chidanand-sisodia-9576381b4" className="mr-2 text-gray-500 hover:text-gray-700">
              <FaLinkedin size="24" />
            </a>
            <a href="https://github.com/chidanand-sisodia" className="mr-2 text-gray-500 hover:text-gray-700">
              <FaGithub size="24" />
            </a>
            <a href="https://www.instagram.com/__mr.rajput__07" className="mr-2 text-gray-500 hover:text-gray-700">
              <FaInstagram size="24" />
            </a>
            <a href="https://facebook.com/profile.php?id=100069659790587" className="mr-2 text-gray-500 hover:text-gray-700">
              <FaFacebookF size="24" />
            </a>
            <a href="https://telegram.com/Chidanandsisodia" className="text-gray-500 hover:text-gray-700">
              <FaTelegram size="24" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
