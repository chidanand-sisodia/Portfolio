// import React, { useState, useEffect } from 'react';
// import { FaLinkedin, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
// import Alert from './Alert';

// function Dashboard() {
//     const titles = ['Software Developer', 'Web Developer', 'Aspiring Data Scientist'];
//     const [currentTitle, setCurrentTitle] = useState('');
//     const [index, setIndex] = useState(0);
//     const [subIndex, setSubIndex] = useState(0);
//     const [reverse, setReverse] = useState(false);

//     // Typing effect
//     useEffect(() => {
//         if (subIndex === titles[index].length + 1 && !reverse) {
//             setReverse(true);
//             return;
//         }

//         if (subIndex === 0 && reverse) {
//             setReverse(false);
//             setIndex((prevIndex) => (prevIndex + 1) % titles.length);
//             return;
//         }

//         const timeout = setTimeout(() => {
//             setCurrentTitle(titles[index].substring(0, subIndex));
//             setSubIndex((prev) => prev + (reverse ? -1 : 1));
//         }, Math.max(reverse ? 50 : subIndex === titles[index].length ? 500 : 100, parseInt(Math.random() * 200)));

//         return () => clearTimeout(timeout);
//     }, [subIndex, index, reverse, titles]);

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100 sm:p-3xl md:p-3xl ">
//             <Alert onClose={() => console.log('Alert closed')} />

//             <div className="text-center sm:p-3xl md:p-3xl ">
               
//             <h1 className='text-5xl font-bold mb-9'>Hello, </h1>
//                 <h1 className='text-6xl font-bold mb-6'>I'm Chidanand Sisodia</h1>
//                 <h2 className='text-4xl font-medium text-gray-600 mb-6 inline-block overflow-hidden whitespace-nowrap'>{`${currentTitle}${reverse ? '' : '|'}`}</h2>
//                 <div className="flex justify-center items-center gap-10 p-2 mb-10">
//                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-blue-500'><FaLinkedin /></a>
//                     <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-gray-600'><FaGithub /></a>
//                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-pink-600'><FaInstagram /></a>
//                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-blue-600'><FaFacebookF /></a>
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-blue-400'><FaTwitter /></a>
//                 </div>
//                 <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">About Me !</button>
                
//                 <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Resume</button>
               
//             </div>
              
//         </div>
       
// );
// }

// export default Dashboard;


import React, { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram,  FaChevronDown,FaTelegramPlane,FaEnvelope, FaDownload  } from 'react-icons/fa';
import Alert from './Alert';
import twitter from './images/twitter_5969020.png'
import './styles/Dashboard.css';

function Dashboard(onScrollToAbout) {
    const navigate = useNavigate();
    const titles = ['Software Developer', 'Web Developer', 'Aspiring Data Scientist'];
    const [currentTitle, setCurrentTitle] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const nextSectionRef = useRef(null);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
        } else {
            document.body.style.overflow = 'unset'; // Enable scroll when modal is closed
        }
    };

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

    // const scrollToNextSection = () => {
    //     nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    // };
    const scrollToNextSection = () => {
        navigate('/about');
      };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6">
            <Alert onClose={() => console.log('Alert closed')} />

            <div className="text-center space-y-6">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold lg:mb-9 sm:mb-6'>Hello,</h1>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold lg:mb-9 sm:mb-6'>I'm Chidanand Sisodia</h1>
                <h2 className='text-xl sm:text-2xl md:text-4xl font-medium text-gray-600 mb-6 inline-block overflow-hidden whitespace-nowrap'>{`${currentTitle}${reverse ? '' : '|'}`}</h2>
                <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10 p-2 mb-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='floating-icon text-3xl sm:text-4xl md:text-5xl hover:text-blue-500'><FaLinkedin /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='floating-icon text-3xl sm:text-4xl md:text-5xl hover:text-gray-600'><FaGithub /></a>
                    <a href="mailto:chidanandrajput.com" className='floating-icon text-3xl sm:text-4xl md:text-5xl hover:animate-googleColors'><FaEnvelope /> </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='floating-icon text-3xl sm:text-4xl md:text-5xl hover:text-pink-600'><FaInstagram /></a>
                    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='floating-icon text-3xl sm:text-4xl md:text-5xl hover:text-blue-600'><FaFacebookF /></a> */}
                    <a href="https://telegram.me/Chidanandsisodia" target="_blank" rel="noopener noreferrer" className='floating-icon  text-3xl sm:text-4xl md:text-5xl hover:text-blue-400'><FaTelegramPlane /></a>


                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-3xl sm:text-4xl md:text-5xl hover:text-blue-400'><FaTwitter /></a> */}
                </div>
                <br></br>
                 <button onClick={scrollToNextSection} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">About Me !</button>
                 <button onClick={toggleModal} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Resume</button>
                 {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center p-4 z-20 max-w-full">
                    <div className="bg-white rounded-lg shadow-lg p-5 relative w-full max-w-4xl max-h-[90vh] md:h-auto  overflow-y-auto sm:mt-2">
                        {/* Close Button */}
                        <button onClick={toggleModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                        <svg className="fill-current h-10 w-10" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.846 7.349 14.849a1.2 1.2 0 01-1.697-1.697L8.303 10 5.652 7.349A1.2 1.2 0 117.349 5.651L10 8.303l2.651-2.652a1.2 1.2 0 111.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 010 1.698z"/>
            </svg>
                        </button>

                        {/* Resume Image within a scrollable container */}
                        <div className="overflow-y-auto max-h-96">
                            <img src="https://ik.imagekit.io/dpst6vive/certificates/Chidanand_Resume_page-0001.jpg?updatedAt=1713277081061" alt="Resume" className="w-full h-auto" />
                        </div>

                        {/* Download Button */}
                        <a
                            href="https://ik.imagekit.io/dpst6vive/certificates/Chidanand_Resume.pdf?updatedAt=1713278240679"
                            download="Chidanand's_Resume.pdf"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg mt-4"
                        >
                            <FaDownload />
                            Download Resume
                        </a>
                    </div>
                </div>
            )}

                <br></br>
                <br></br> 
                <div>
                    <button onClick={scrollToNextSection} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-2xl p-3 animate-bounce">
                        <FaChevronDown />
                    </button>
                </div>
                 
            </div>
        </div>
    );
}

export default Dashboard;
