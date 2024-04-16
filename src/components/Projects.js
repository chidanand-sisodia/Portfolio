// import React, { useEffect } from 'react';
// import { FaGithub,FaHeart, FaTimes } from 'react-icons/fa';

// // Sample data for projects
// const projects = [
//   {
//     id: 1,
//     title: "Project One",
//     description: "This project focuses on solving complex algorithmic problems with efficient solutions.",
//     imageUrl: "https://via.placeholder.com/300",
//     githubUrl: "https://github.com/yourgithub/project-one",
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     description: "A web development project that uses modern frameworks and technologies to create scalable applications.",
//     imageUrl: "https://via.placeholder.com/300",
//     githubUrl: "https://github.com/yourgithub/project-two",
//   },
//   {
//     id: 3,
//     title: "Project Two",
//     description: "A web development project that uses modern frameworks and technologies to create scalable applications.",
//     imageUrl: "https://via.placeholder.com/300",
//     githubUrl: "https://github.com/yourgithub/project-two",
//   },
  
//   {
//     id: 4,
//     title: "Project Two",
//     description: "A web development project that uses modern frameworks and technologies to create scalable applications.",
//     imageUrl: "https://via.placeholder.com/300",
//     githubUrl: "https://github.com/yourgithub/project-two",
//   },
//   {
//     id: 5,
//     title: "Project Two",
//     description: "A web development project that uses modern frameworks and technologies to create scalable applications.",
//     imageUrl: "https://via.placeholder.com/300",
//     githubUrl: "https://github.com/yourgithub/project-two",
//   },
//   {
//     id: 6,
//     title: "Project Two",
//     description: "A web development project that uses modern frameworks and technologies to create scalable applications.",
//     imageUrl: "https://via.placeholder.com/300",
//     githubUrl: "https://github.com/yourgithub/project-two",
//   }
//   // Add more projects as needed
// ];

// function Projects() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="container mx-auto px-16 py-16">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Projects</h1>
//         <p className="text-lg text-gray-600 mb-8">
//           I am passionate about building and exploring new projects that challenge my understanding and enhance my skills.
//           Below are some of the projects I've worked on that demonstrate my ability to develop solutions that meet real-world needs.
//         </p>
//         <hr className="border-b-2 border-gray-300 my-8 mx-auto w-3/4" />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
//                 <FaGithub className="mr-2" /> View on GitHub
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;



import React, { useState } from 'react';
import { FaGithub, FaHeart, FaTimes,FaEye } from 'react-icons/fa';
import { FaNodeJs, FaReact, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { GiArtificialIntelligence, GiBrain } from 'react-icons/gi';
import './styles/Projects.css';

const initialProjects = [
  {
    id: 1,
    category:"MERN",
    title: "QuizBuzz",
    description: "Brief description of Project One.",
    imageUrl: "https://ik.imagekit.io/dpst6vive/quiz1.png?updatedAt=1713161397775",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 2, 
    category:"MERN",
    title: "Email Spam Detection",
    description: "Brief description of Project One.",
    imageUrl: "https://ik.imagekit.io/dpst6vive/spam_detection_ss1.png?updatedAt=1713162838781",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 3,
    category:"MERN",
    title: "NEWS-Mania",
    description: "Brief description of Project One.",
    imageUrl: "https://ik.imagekit.io/dpst6vive/NewsMania.png?updatedAt=1713166626873",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 4,
    category:"MERN",
    title: "Support-System",
    description: "Brief description of Project One.",
    imageUrl: "https://ik.imagekit.io/dpst6vive/Screenshot%202024-03-20%20122730.png?updatedAt=1710918198062",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 5,
    category:"Python",
    title: "Turtle Crossing",
    description: "Brief description of Project One.",
    imageUrl: "",
    videoUrl: "https://ik.imagekit.io/dpst6vive/turtle_cross1.mp4?updatedAt=1713169245333",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },

  
  
  
  // Add more projects
];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [modalProject, setModalProject] = useState(null);

  const handleLike = (id) => {
    const newProjects = projects.map(project => {
      if (project.id === id) {
        return {...project, likes: project.likes + 1};
      }
      return project;
    });
    setProjects(newProjects);
  };

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };
  const [isHovering, setIsHovering] = useState(false);


  return (
    <section className="text-gray-600  body-font bg-gray-100">
      <div className="container lg:px-16 lg:py-24 mx-auto pt-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-8 p-5">
          I am passionate about building and exploring new projects that challenge my understanding and enhance my skills.
          Below are some of the projects I've worked on that demonstrate my ability to develop solutions that meet real-world needs.
        </p>
        <hr className="border-b-2  border-gray-400 my-8 mx-auto w-3/4" />
      </div>
        <div className="flex flex-wrap sm:px-8 ">
          {projects.map((project) => (
            <div key={project.id} className="p-4 md:w-1/3  ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-3xl hover:shadow-lg transition-shadow duration-300 bg-white  ">
              {
                  project.imageUrl ? (
                      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.imageUrl} alt="Project" />
                  ) : (
                      <video className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.videoUrl} controls>
                          Your browser does not support the video tag.
                      </video>
                  )
              }
                <div className="p-6">
                  <div className='flex gap-3'>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.category}</h2>
                            <div 
                      className="marquee"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                  >
                      <div className={`track ${isHovering ? 'paused' : ''}`}>
                          <div className="content flex items-center gap-4">
                              {/* Icons repeated twice for smooth continuous effect */}
                              {[...Array(3)].map((_,i) => (
                                  <>
                                       <React.Fragment key={i}>
                                      <SiMongodb className="text-green-600 text-xl" title="MongoDB" />
                                      <SiExpress className="text-gray-800 text-xl" title="Express.js" />
                                      <FaReact className="text-blue-500 text-xl" title="React" />
                                      <FaNodeJs className="text-green-500 text-xl" title="Node.js" />
                                      <FaPython className="text-blue-400 text-2xl" title="Python" />
                                      <GiArtificialIntelligence className="text-yellow-500 text-2xl" title="Machine Learning" />
                                      <GiBrain className="text-purple-500 text-2xl" title="Natural Language Processing" />
                                      </React.Fragment>
                                  </>
                              ))}
                          </div>
                      </div>
                  </div>
                  </div>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                  <div className="flex items-center flex-wrap ">
                    <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" onClick={() => openModal(project)}>
                      View More
                      <FaGithub className="ml-2 w-4 h-4" />
                    </button>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FaEye className="w-4 h-4 mr-1" />{project.views}
                    </span>
                    <button className="inline-flex items-center text-red-500 " onClick={() => handleLike(project.id)}>
                      <FaHeart className="w-4 h-4 mr-1" />{project.likes}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProject && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full px-5 py-24">
          <div className="relative top-20 mx-auto shadow-lg rounded-md bg-white max-w-3xl">
            <div className="p-4">
              <h2 className="text-lg text-gray-900 font-bold mb-4">{modalProject.title}</h2>
              {
                  modalProject.imageUrl ? (
                      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={modalProject.imageUrl} alt="Project" />
                  ) : (
                      <video className="lg:h-48 md:h-36 w-full object-cover object-center" src={modalProject.videoUrl} controls>
                          Your browser does not support the video tag.
                      </video>
                  )
              }                  
              <p className="leading-relaxed">{modalProject.category}</p>
              
    
              <p>{modalProject.description}</p>
              <button className="text-red-500" onClick={() => handleLike(modalProject.id)}>
                <FaHeart className="mr-1" /> Like ({modalProject.likes})
              </button>
              <button onClick={closeModal} className="float-right">
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
