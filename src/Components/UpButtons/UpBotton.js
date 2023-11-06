import React, { useState, useEffect } from 'react';
import './UpBotton.css';

import { ArrowUp  } from 'react-bootstrap-icons';


function UpBotton () {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
      <div
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <ArrowUp className="scroll-to-top-icon" />
      </div>
    )
};

export default UpBotton;