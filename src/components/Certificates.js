import React from 'react';

// Sample data for certifications
const certifications = [
  {
    id: 1,
    title: "Certified React Developer",
    imageUrl: "https://via.placeholder.com/720x400", // Placeholder image
    certificateUrl: "https://example.com/certificate", // Placeholder link
  },
  {
    id: 2,
    title: "Full Stack Web Developer",
    imageUrl: "https://via.placeholder.com/720x400",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 3,
    title: "Full Stack Web Developer",
    imageUrl: "https://via.placeholder.com/720x400",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 4,
    title: "Full Stack Web Developer",
    imageUrl: "https://via.placeholder.com/720x400",
    certificateUrl: "https://example.com/certificate",
  },
  {
    id: 4,
    title: "Full Stack Web Developer",
    imageUrl: "https://via.placeholder.com/720x400",
    certificateUrl: "https://example.com/certificate",
  },
  // Add more certifications as needed
];

function Certificates() {
  return (
   <section className="text-gray-600 body-font">
      <div className="container lg:px-16 lg:py-24 mx-auto pt-20 "> {/* Adjust pt-20 to match your navbar's height */}
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Certifications</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">These are some of the certifications I have earned that validate my skills and capabilities in various technology areas.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-4 md:w-1/3 lg:w-1/4 xl:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
                <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                  <img 
                    className="lg:h-48 md:h-36 w-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                    src={cert.imageUrl}
                    alt={cert.title}
                  />
                </a>
                <div className="p-6 text-center">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{cert.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Certificates;