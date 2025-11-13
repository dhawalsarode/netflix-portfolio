
// 🧩 For the profile banner section (top background on each profile)
export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: { url: string };
  linkedinLink: string;
  profileSummary: string;
}

// 🧩 For Work Permit / Hire Me section
export interface WorkPermit {
  visaStatus: string;
  expiryDate: string;
  additionalInfo: string;
}


// 🧩 For Timeline / Experience section
export interface TimelineItem {
  name: string;
  timelineType: string;              
  title: string;
  techStack: string;
  summaryPoints: string | string[];  
  dateRange: string;
}

// 🧩 For Projects section
export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
}

// 🧩 For Certifications section
export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}


// 🧩 For Contact Me section
export interface ContactMe {
  email: string;
  linkedinLink: string;
  githubLink: string;
  phoneNumber?: string;
  resumeLink?: { url: string }; 
  image?: { url: string };
  name?: string;
  title?: string;
  summary?: string;
  companyUniversity?: string;
}



// 🧩 For Skills section
export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

