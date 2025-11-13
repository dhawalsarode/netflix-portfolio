// src/queries/getProjects.ts
import { Project } from '../types';

// Local static data replacing DatoCMS query
export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: "LSTM-GAN Audio Steganography",
      description: "A GAN + LSTM framework for embedding secret messages in MIDI audio using AES encryption.",
      techUsed: "Python, TensorFlow, Keras, GANs, Flask, React",
      image: { url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wxHxgWe7qfJECbRZbCAdVg.jpeg" }
    },
    {
      title: "Face Recognition Attendance System",
      description: "Automated attendance tracking using OpenCV facial recognition and CSV logging.",
      techUsed: "Python, OpenCV, Flask",
      image: { url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7mLz1w_Pa0K0I2xgXQkJsg.jpeg" }
    },
    {
      title: "SlotSwapper",
      description: "Full-stack calendar slot management and swapping platform for professionals.",
      techUsed: "React, NodeJS, REST APIs",
      image: { url: "https://cdn.dribbble.com/users/215044/screenshots/3907868/calendar-animation.gif" }
    },
    {
      title: "Parkinson’s Disease Detection",
      description: "Voice-based ANN model using TensorFlow for early Parkinson’s diagnosis.",
      techUsed: "Python, TensorFlow, Keras, Flask",
      image: { url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*cDg2VNQv5_zzgQ7qgXW9-Q.jpeg" }
    },
    {
      title: "House Price Prediction System",
      description: "Machine learning model for predicting housing prices using regression.",
      techUsed: "Python, Scikit-learn, Flask",
      image: { url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tLGrR4K4sU6HQhxCbaU10Q.jpeg" }
    },
    {
      title: "Art Gallery Database System",
      description: "SQL-based database management system for art galleries.",
      techUsed: "MySQL, SQL, Python",
      image: { url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_Ewb7ldG1xeLKjoOX7DPjg.jpeg" }
    }
  ];
}
