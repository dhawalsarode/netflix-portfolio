export async function getSkills() {
  return [
    // 🧠 Programming
    { name: "Python", category: "Programming", description: "Core backend and AI language", icon: "FaPython" },
    { name: "JavaScript", category: "Programming", description: "Dynamic frontend and backend scripting", icon: "FaReact" },
    { name: "C++", category: "Programming", description: "Strong foundation in DSA and OOP", icon: "FaJava" },

    // 💻 Frameworks
    { name: "React", category: "Frontend", description: "Modern frontend library for UI", icon: "FaReact" },
    { name: "Node.js", category: "Backend", description: "Event-driven backend runtime", icon: "FaNodeJs" },
    { name: "Flask", category: "Backend", description: "Python micro-framework for APIs", icon: "FaPython" },
    { name: "Django", category: "Backend", description: "Python web framework", icon: "FaPython" },

    // 🧩 AI/ML
    { name: "TensorFlow", category: "AI/ML", description: "Deep learning model development", icon: "FaPython" },
    { name: "Keras", category: "AI/ML", description: "Neural network API", icon: "FaPython" },
    { name: "GANs", category: "AI/ML", description: "Generative Adversarial Networks", icon: "FaPython" },
    { name: "LSTM", category: "AI/ML", description: "Sequential learning and RNNs", icon: "FaPython" },
    { name: "Scikit-Learn", category: "AI/ML", description: "Classical ML models", icon: "FaPython" },

    // 🖼️ Computer Vision & NLP
    { name: "OpenCV", category: "Computer Vision", description: "Image and video processing", icon: "FaPython" },
    { name: "NLP", category: "NLP", description: "Text analysis and sentiment classification", icon: "FaPython" },

    // 💾 Database & Tools
    { name: "MySQL", category: "Database", description: "Structured data management", icon: "SiMysql" },
    { name: "SQLite", category: "Database", description: "Lightweight database engine", icon: "SiPostgresql" },
    { name: "Git & GitHub", category: "Tools", description: "Version control and collaboration", icon: "FaGitAlt" },
    { name: "Power BI", category: "Tools", description: "Data visualization and analytics", icon: "FaReact" },
    { name: "VS Code", category: "Tools", description: "Primary development environment", icon: "FaReact" },
  ];
}
