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

const initialProjects = [
  {
    id: 1,
    title: "Project One",
    description: "Brief description of Project One.",
    imageUrl: "https://dummyimage.com/720x400",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 2,
    title: "Project One",
    description: "Brief description of Project One.",
    imageUrl: "https://dummyimage.com/720x400",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 3,
    title: "Project One",
    description: "Brief description of Project One.",
    imageUrl: "https://dummyimage.com/720x400",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 4,
    title: "Project One",
    description: "Brief description of Project One.",
    imageUrl: "https://dummyimage.com/720x400",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 5,
    title: "Project One",
    description: "Brief description of Project One.",
    imageUrl: "https://dummyimage.com/720x400",
    githubUrl: "#",
    likes: 0,
    views: 1200
  },
  {
    id: 6,
    title: "Project One",
    description: "Brief description of Project One.",
    imageUrl: "https://dummyimage.com/720x400",
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

  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-16 py-24 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-8">
          I am passionate about building and exploring new projects that challenge my understanding and enhance my skills.
          Below are some of the projects I've worked on that demonstrate my ability to develop solutions that meet real-world needs.
        </p>
        <hr className="border-b-2  border-gray-300 my-8 mx-auto w-3/4" />
      </div>
        <div className="flex flex-wrap -m-4 ">
          {projects.map((project) => (
            <div key={project.id} className="p-4 md:w-1/3 ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow duration-300">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.imageUrl} alt="project" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
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
              <h2 className="text-lg text-gray-900 font-bold">{modalProject.title}</h2>
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
