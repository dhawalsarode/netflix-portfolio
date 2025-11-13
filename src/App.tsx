import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import CareerGoals from './pages/CareerGoals';
import WorkExperience from './pages/WorkExperience';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import MotivationMindset from './pages/MotivationMindset';
import BehindTheCode from './pages/BehindTheCode';
import Certifications from './pages/Certifications';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Browse />} />
        <Route
          path="/profile/:profileName"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />
        <Route
          path="/career-goals"
          element={
            <Layout>
              <CareerGoals />
            </Layout>
          }
        />
        <Route
          path="/work-experience"
          element={
            <Layout>
              <WorkExperience />
            </Layout>
          }
        />
        <Route
          path="/recommendations"
          element={
            <Layout>
              <Recommendations />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/contact-me"
          element={
            <Layout>
              <ContactMe />
            </Layout>
          }
        />
        <Route
          path="/music"
          element={
            <Layout>
              <Music />
            </Layout>
          }
        />
        <Route
          path="/reading"
          element={
            <Layout>
              <MotivationMindset />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <BehindTheCode />
            </Layout>
          }
        />
        <Route
          path="/certifications"
          element={
            <Layout>
              <Certifications />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
