import React, { useEffect, useState } from 'react'; 
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png'; 

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showClickText, setShowClickText] = useState(false);

  const navigate = useNavigate();

  const handlePlaySound = () => {
    if (!isClicked) {
      const audio = new Audio(netflixSound);
      audio.play().catch(error => console.error("Audio play error:", error));
      setIsClicked(true);
    }
  };

  useEffect(() => {
    // Show "Click anywhere" text after small delay
    const textTimer = setTimeout(() => {
      setShowClickText(true);
    }, 800);

    // Navigate after animation
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(textTimer);

  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />

      {/* New Animated Click Text */}
      {!isClicked && showClickText && (
        <p className="click-to-enter">Click anywhere to enter</p>
      )}

    </div>
  );
};

export default NetflixTitle;
