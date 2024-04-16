import React from 'react';

// Sample data for certifications
const certifications = [
  {
    id: 1,
    title: "Certified React Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/Foundation_data_Google_page-0001.jpg?updatedAt=1713253730677", // Placeholder image
    certificateUrl: "https://example.com/certificate", // Placeholder link
  },
  {
    id: 2,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/Intro_ML_page-0001.jpg?updatedAt=1713253730723",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 3,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/EDA_ML_page-0001.jpg?updatedAt=1713253730266",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 4,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/machine_learning_pipelines_page-0001.jpg?updatedAt=1713253730209",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 5,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/chidanandsisodia-86019528%20AI-VILT_page-0001.jpg?updatedAt=1713253730659",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 6,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/smile_detection_page-0001.jpg?updatedAt=1713253730585",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 7,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/verzeo.jpg?updatedAt=1713253730495",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 8,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/Internsship_studio_internship_page-0001.jpg?updatedAt=1713253730302",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 8,
    title: "Full Stack Web Developer",
    imageUrl: "https://ik.imagekit.io/dpst6vive/certificates/Mass_technology_Internship_page-0001.jpg?updatedAt=1713253730552",
    certificateUrl: "https://example.com/certificate",
  },
  // Add more certifications as needed
];

function Certificates() {
  return (
   <section className="text-gray-600 body-font bg-gray-200">
      <div className="container lg:px-16 lg:py-24 mx-auto pt-20 "> {/* Adjust pt-20 to match your navbar's height */}
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 mb-4">Certifications</h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto p-5">These are some of the certifications I have earned that validate my skills and capabilities in various technology areas.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-28 h-1 rounded-full bg-gray-500 inline-flex"></div> {/*underline*/ }
          </div>
        </div>
        <div className="flex flex-wrap ">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-4 md:w-1/3 lg:w-1/4 xl:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
                <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                  <img 
                    className="lg:h-80 md:h-40 w-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                    src={cert.imageUrl}
                    alt={cert.title}
                  />
                </a>
                {/* <div className="p-6 text-center">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{cert.title}</h2>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Certificates;
