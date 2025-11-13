import React from "react";
import { motion, Variants } from "framer-motion";
import "./CareerGoals.css";
import careerVision from "../images/career_vision.png";

const CareerGoals: React.FC = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.7,
        ease: ["easeOut"], // ✅ Fixed type-safe easing
      },
    }),
  };

  return (
    <div className="career-container">
      <motion.div
        className="career-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={careerVision} alt="Career Vision" className="career-banner" />
        <h1 className="career-title">Career Vision & Goals</h1>
        <p className="career-subtitle">
          “Building intelligence that empowers — not replaces — people.”
        </p>
      </motion.div>

      <div className="career-grid">
        {[
          {
            title: "Short-Term (1–2 Years)",
            desc: `Strengthen my technical foundation by working in AI-driven software
            development — preferably in roles involving machine learning,
            backend systems, or full-stack AI tools.`,
          },
          {
            title: "Mid-Term (3–5 Years)",
            desc: `Pursue a Master’s in Computer Science abroad with a focus on
            AI/ML and secure computing while contributing to impactful,
            research-driven projects.`,
          },
          {
            title: "Long-Term (5+ Years)",
            desc: `Lead innovation in AI security, generative systems, and ethical
            automation — crafting solutions that are transparent,
            trustworthy, and human-centric.`,
          },
        ].map((goal, i) => (
          <motion.div
            className="career-card"
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <h2>{goal.title}</h2>
            <p>{goal.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerGoals;
