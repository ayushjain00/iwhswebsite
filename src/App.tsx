import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Layout from './components/layout/Layout';

// Page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import FocusAreasPage from './pages/FocusAreasPage';
import ForStartupsPage from './pages/ForStartupsPage';
import ReportsPage from './pages/ReportsPage';
import JoinNetworkPage from './pages/JoinNetworkPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import SignUpPage from './pages/SignUpPage'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/focus-areas" element={<FocusAreasPage />} />
          <Route path="/for-startups" element={<ForStartupsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/join-network" element={<JoinNetworkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
