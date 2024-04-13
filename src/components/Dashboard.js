import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Alert from './Alert';

function Dashboard() {
    const titles = ['Software Developer', 'Web Developer', 'Aspiring Data Scientist'];
    const [currentTitle, setCurrentTitle] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typing effect
    useEffect(() => {
        if (subIndex === titles[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCurrentTitle(titles[index].substring(0, subIndex));
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 50 : subIndex === titles[index].length ? 500 : 100, parseInt(Math.random() * 200)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, titles]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Alert onClose={() => console.log('Alert closed')} />

            <div className="text-center">
               
            <h1 className='text-5xl font-bold mb-9'>Hello, </h1>
                <h1 className='text-6xl font-bold mb-6'>I'm Chidanand Sisodia</h1>
                <h2 className='text-4xl font-medium text-gray-600 mb-6 inline-block overflow-hidden whitespace-nowrap'>{`${currentTitle}${reverse ? '' : '|'}`}</h2>
                <div className="flex justify-center items-center gap-10 p-2 mb-10">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-blue-500'><FaLinkedin /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-gray-600'><FaGithub /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-pink-600'><FaInstagram /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-blue-600'><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-blue-400'><FaTwitter /></a>
                </div>
                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">About Me !</button>
                
                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Resume</button>
 
            </div>
            
        </div>
    );
}

export default Dashboard;
