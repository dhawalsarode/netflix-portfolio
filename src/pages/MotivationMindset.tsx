import React from "react";
import "./MotivationMindset.css";
import motivationImage from "../images/motivation_mindset.png";

const motivations = [
  {
    quote: "Consistency beats intensity.",
    reflection: "I believe steady effort every day compounds into mastery — progress, not perfection, is the key.",
  },
  {
    quote: "Build. Fail. Learn. Repeat.",
    reflection: "Every setback teaches me how to design smarter, debug faster, and grow stronger as a developer.",
  },
  {
    quote: "AI is not just about intelligence — it’s about imagination.",
    reflection: "I love using AI to create solutions that are not only smart but also human-centered and meaningful.",
  },
  {
    quote: "Stay curious, stay humble.",
    reflection: "Technology evolves every day — curiosity keeps me learning, humility keeps me improving.",
  },
  {
    quote: "Keep learning, keep building.",
    reflection: "Every project I make is a new chapter in my learning journey — code is my canvas.",
  },
];

const MotivationMindset: React.FC = () => {
  return (
    <div className="motivation-page">
      <div className="motivation-header">
        <img src={motivationImage} alt="Motivation" className="motivation-banner" />
        <h1 className="motivation-title">Motivation & Mindset</h1>
        <p className="motivation-subtitle">
          “A glimpse into what drives me — passion, purpose, and persistence.”
        </p>
      </div>

      <div className="motivation-grid">
        {motivations.map((item, index) => (
          <div key={index} className="motivation-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <h3 className="motivation-quote">“{item.quote}”</h3>
            <p className="motivation-reflection">{item.reflection}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotivationMindset;
