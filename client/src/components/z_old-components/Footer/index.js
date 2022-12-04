import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto  bg-primary  p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-light mb-3"
            onClick={() => navigate('/')}
          >
            &larr; Home
          </button>
        )}
       
      </div>
    </footer>
  );
};

export default Footer;
