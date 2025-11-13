import React, { useEffect } from 'react';
import './Music.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import lofiThumb from '../images/lofi.jpg';
import codingThumb from '../images/coding.jpg';
import chillThumb from '../images/chill.jpg';
import focusThumb from '../images/focus.jpg';

const musicVibes = [
  { 
    title: "Lofi Coding Beats", 
    desc: "Perfect for deep focus and flow mode.",
    link: "https://www.youtube.com/watch?v=lTRiuFIWV54", 
    img: lofiThumb 
  },
  { 
    title: "Chill Vibes", 
    desc: "Relax your mind, boost creativity.",
    link: "https://www.youtube.com/watch?v=6me17gGZYRg", 
    img: chillThumb 
  },
  { 
    title: "Coding Energy", 
    desc: "Instrumental beats for productive sessions.",
    link: "https://www.youtube.com/watch?v=xAR6N9N8e6U", 
    img: codingThumb 
  },
  { 
    title: "Night Owl Focus", 
    desc: "Late-night thinking with smooth tunes.",
    link: "https://www.youtube.com/watch?v=0w80F8FffQ4", 
    img: focusThumb 
  },
];

const Music: React.FC = () => {

  // Initialize scroll animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="music-page">
      {/* Subtle ambient background sound */}
      <audio autoPlay loop muted>
        <source src="/ambient.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="music-overlay"></div>

      <div className="music-header" data-aos="fade-down">
        <h1>Focus Mode 🎧</h1>
        <p>“Music fuels creativity. Here’s what plays while I code.”</p>
      </div>

      {/* YouTube background player */}
      <div className="youtube-player" data-aos="fade-up">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1&loop=1&playlist=jfKfPfyJRdk"
          title="Lofi Beats to Code/Study To"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Albums Grid */}
      <div className="albums-section">
        <h3 data-aos="fade-up">My Coding Playlists</h3>
        <div className="albums">
          {musicVibes.map((vibe, index) => (
            <div 
              key={index} 
              className="album-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              onClick={() => window.open(vibe.link, '_blank')}
            >
              <img src={vibe.img} alt={vibe.title} className="album-image" />
              <div className="album-details">
                <h4>{vibe.title}</h4>
                <p>{vibe.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
