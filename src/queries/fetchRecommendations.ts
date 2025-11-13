import corporateMentor from "../images/corporate_mentor.png";
import projectMentor from "../images/project_mentor.png";
import facultyMentor from "../images/faculty_mentor.png";

export async function getRecommendations() {
  return [
    {
      name: "Challa Rohit",
      title: "Academic Head, Acmegrade Pvt. Ltd.",
      date: "August 2024",
      image: { url: corporateMentor },
      quote: `I am pleased to endorse Mr. Dhawal Sarode, who successfully completed his internship in Artificial Intelligence with Acmegrade Pvt. Ltd.`,
      body: `During his two months of training and internship, Dhawal demonstrated exceptional technical acumen, analytical thinking, and interpersonal skills. His ability to plan, present, and communicate complex concepts clearly made him stand out among his peers. 
      He is an industrious individual with a perfect blend of technical, analytical, and research aptitude. Dhawal’s enthusiasm for learning, his commitment to innovation, and his teamwork have left a strong impression on our organization.`,
    },
    {
      name: "Dr. Deepika Shekhawat",
      title: "Associate Professor, Amity University Mumbai",
      date: "September 2025",
      image: { url: projectMentor },
      quote: `I had the privilege of mentoring Mr. Dhawal Sarode on his final-year project titled “LSTM-GAN Based Audio Steganography for Secure and Imperceptible Data Hiding.”`,
      body: `Throughout this year-long research project, Dhawal showcased outstanding problem-solving ability, creativity, and dedication. He was instrumental in developing an innovative system combining GANs and LSTMs for secure audio data hiding, while also integrating AES encryption for enhanced confidentiality. 
      His leadership in coordinating the research, managing milestones, and documenting outcomes in a research paper reflected true professionalism and academic maturity.`,
    },
    {
      name: "Mr. Sarvesh Mahajan",
      title: "Assistant Professor (Visiting), Amity University Mumbai",
      date: "July 2025",
      image: { url: facultyMentor },
      quote: `I taught Mr. Dhawal Sarode in the course ‘Computer Modelling and Simulation’ during his final semester.`,
      body: `Dhawal consistently demonstrated deep theoretical understanding and exceptional programming skills. His analytical thinking and project execution were among the best in the class. 
      He approached each challenge with curiosity and a structured mindset, exploring advanced simulation techniques with technical depth and originality. 
      Apart from his technical strength, Dhawal’s discipline, collaboration, and positive attitude made him a valued member of the academic environment.`,
    },
  ];
}
