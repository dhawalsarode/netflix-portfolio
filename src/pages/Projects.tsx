import React from "react";
import "./Projects.css";

import audioSteg from "../images/projects/audio_steganography.png";
import faceRecog from "../images/projects/face_recognition.png";
import slotSwapper from "../images/projects/slotswapper.png";
import parkinsons from "../images/projects/parkinsons_detection.png";
import housePrice from "../images/projects/house_price.png";
import artGallery from "../images/projects/art_gallery.png";
import scraper from "../images/projects/court_scraper.png";
import resumeAnalyzer from "../images/projects/resume_analyzer.png";
import cifar10 from "../images/projects/image_cifar10.png";
import emotionBot from "../images/projects/emotion_chatbot.png";
import docsHub from "../images/projects/docs_hub.png";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "LSTM-GAN Audio Steganography",
      description:
        "A GAN + LSTM framework for embedding secret messages in MIDI audio files using AES encryption. Built a real-time Flask–React web app ensuring imperceptible and secure data hiding.",
      tech: ["Python", "TensorFlow", "Keras", "Flask", "React", "GANs"],
      github: "https://github.com/dhawalsarode/audio-steganography-lstm-gan",
      image: audioSteg,
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Automated attendance tracking using OpenCV facial recognition and CSV logging. Highly accurate and easy to deploy in classrooms or organizations.",
      tech: ["Python", "OpenCV", "Flask"],
      github: "https://github.com/dhawalsarode/face-recognition-attendance-system",
      image: faceRecog,
    },
    {
      title: "SlotSwapper: Calendar Slot Management Platform",
      description:
        "A full-stack calendar slot management app for professionals to schedule, manage, and swap time slots in real-time. Uses JWT-based authentication.",
      tech: ["React", "Flask", "NodeJS", "REST APIs"],
      github: "https://github.com/dhawalsarode/slotswapper",
      image: slotSwapper,
    },
    {
      title: "Parkinson’s Disease Detection",
      description:
        "Voice-based ANN model using TensorFlow and Keras for early detection of Parkinson’s disease. Focused on voice signal feature extraction and prediction accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "Flask"],
      github: "https://github.com/dhawalsarode/parkinsons-detection-ml",
      image: parkinsons,
    },
    {
      title: "House Price Prediction System",
      description:
        "ML regression model predicting housing prices using key parameters. Achieved 85%+ accuracy after feature scaling and optimization.",
      tech: ["Python", "Scikit-learn", "Flask"],
      github: "https://github.com/dhawalsarode/house-price-prediction-system",
      image: housePrice,
    },
    {
      title: "Automated Court Cause List Scraper",
      description:
        "Automates daily court cause list extraction using Selenium and Python. Handles dynamic forms, manual CAPTCHA inputs, and structured data storage.",
      tech: ["Python", "Selenium", "Pandas"],
      github: "https://github.com/dhawalsarode/district-court-cause-list-scraper",
      image: scraper,
    },
    {
      title: "AI Resume Analyzer",
      description:
        "An NLP-powered app that extracts and analyzes resume data to match candidate profiles with job requirements. Built using Flask and spaCy.",
      tech: ["Python", "NLP", "Flask", "spaCy"],
      github: "https://github.com/dhawalsarode/ai-resume-analyzer",
      image: resumeAnalyzer,
    },
    {
      title: "Image Recognition on CIFAR-10 Dataset",
      description:
        "Built a CNN model for classifying images into 10 categories. Used TensorFlow and Keras with advanced augmentation and dropout for high accuracy.",
      tech: ["Python", "TensorFlow", "Keras"],
      github: "https://github.com/dhawalsarode/cnn-cifar10-classifier",
      image: cifar10,
    },
    {
      title: "Emotion Detection Chatbot",
      description:
        "A conversational AI chatbot capable of identifying user emotions from text and tone, providing context-aware responses. Integrates NLP and sentiment models.",
      tech: ["Python", "NLP", "TensorFlow", "Flask", "React"],
      github: "https://github.com/dhawalsarode/emotion-detection-chatbot",
      image: emotionBot,
    },
    {
      title: "Art Gallery Database System",
      description:
        "SQL-based database management system for managing artworks, artists, and exhibitions efficiently with CRUD functionalities.",
      tech: ["MySQL", "SQL", "Python"],
      github: "https://github.com/dhawalsarode/art-gallery-database",
      image: artGallery,
    },
  ];

  const docsHubLink = "https://drive.google.com/drive/folders/1flQA24NWPBb0-IFbcntV-MH8_8nfLkx4?usp=sharing";

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img
              src={proj.image}
              alt={proj.title}
              className="project-image"
              style={{ height: "180px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
            <div className="project-tech">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}

        {/* 📘 Documentation Hub Card */}
        <div className="project-card docs-hub">
          <img
            src={docsHub}
            alt="Documentation Hub"
            className="project-image"
            style={{
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h3 className="project-title">Project Repository & Documentation Hub</h3>
          <p className="project-description">
            Explore reports, documentation, research papers, and code repositories for
            all major projects. A complete collection for reviewers and recruiters.
          </p>
          <div className="project-tech">
            <span className="tech-tag">Docs</span>
            <span className="tech-tag">Reports</span>
            <span className="tech-tag">Research</span>
          </div>
          <a
            href={docsHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Open Folder
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
