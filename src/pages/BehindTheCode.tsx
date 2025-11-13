import React from "react";
import "./BehindTheCode.css";
import behindTheCode from "../images/behind_the_code.png";
import slotswapperImg from "../images/projects/slotswapper.png";
import audioStegImg from "../images/projects/audio_steganography.png";
import parkinsonsImg from "../images/projects/parkinsons_detection.png";
import courtScraperImg from "../images/projects/court_scraper.png";
import resumeAnalyzerImg from "../images/projects/resume_analyzer.png";

const BehindTheCode: React.FC = () => {
  const projects = [
    {
      title: "SlotSwapper — Building a Calendar that Thinks",
      description:
        "A deep dive into how I engineered SlotSwapper, a full-stack calendar management platform that enables real-time slot creation, modification, and swapping — powered by Flask APIs, React, and JWT authentication for secure, fluid user experiences.",
      image: slotswapperImg,
    },
    {
      title: "Audio Steganography — Making Sound Speak",
      description:
        "A research-inspired implementation of GAN and LSTM networks to securely embed messages inside MIDI audio files using AES encryption — ensuring imperceptibility, high embedding capacity, and real-time web deployment via Streamlit.",
      image: audioStegImg,
    },
    {
      title: "Parkinson’s Detection — Voice to Diagnosis",
      description:
        "Exploring how AI can assist healthcare, I built an ANN model trained on voice samples to detect early Parkinson’s symptoms, with Flask web integration for patient-side inference and TensorFlow for model training.",
      image: parkinsonsImg,
    },
    {
      title: "Delhi District Court Scraper — Automating Justice Data",
      description:
        "An intelligent Selenium automation that extracts daily cause list data from Delhi District Courts, filling dynamic form fields like court complex and date inputs, and integrating manual CAPTCHA handling for resilient scraping.",
      image: courtScraperImg,
    },
    {
      title: "AI Resume Analyzer — Finding the Perfect Fit",
      description:
        "A smart NLP-driven web app that parses and evaluates resumes to assess candidate-job fit. Using spaCy for entity extraction and Flask for API deployment, it provides automated screening insights for HR tech solutions.",
      image: resumeAnalyzerImg,
    },
  ];

  return (
    <div className="behind-page">
      <div className="behind-header">
        <img
          src={behindTheCode}
          alt="Behind the Code Banner"
          className="behind-banner"
        />
        <h1 className="behind-title">Behind The Code</h1>
        <p className="behind-subtitle">
          Stories from my developer journey — the ideas, the challenges, and the
          breakthroughs behind every project.
        </p>
      </div>

      <div className="behind-grid">
        {projects.map((project, index) => (
          <div key={index} className="behind-card">
            <img
              src={project.image}
              alt={project.title}
              className="behind-card-img"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehindTheCode;
