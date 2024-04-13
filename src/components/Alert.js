import React, { useEffect, useState } from 'react';

function Alert({ onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();  // Ensure onClose is called when the alert automatically dismisses
    }, 5000); // Dismiss the alert automatically after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-yellow-500 text-white text-sm font-bold px-4 py-3 rounded shadow-lg transition-all ease-in-out duration-300 transform opacity-100">
        <div className="flex items-center justify-between">
          <span>Website is currently in progress. Thank you for visiting. Come back again!</span>
          <button onClick={() => setShow(false)} className="ml-4 text-white">
            <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.846 7.349 14.849a1.2 1.2 0 01-1.697-1.697L8.303 10 5.652 7.349A1.2 1.2 0 117.349 5.651L10 8.303l2.651-2.652a1.2 1.2 0 111.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 010 1.698z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
