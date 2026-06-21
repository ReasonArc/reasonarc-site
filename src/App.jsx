import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ICP from './components/ICP';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Consultation from './pages/Consultation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ComplianceFix from './pages/ComplianceFix';
import './App.css';

function LandingPage() {
  return (
    <>
      <main className="main-content">
        <Hero />
        <ICP />
        <Services />
        <Process />
        <About />
        <FAQ />
      </main>
    </>
  );
}

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function BlankLayout() {
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/free-automation-consultation" element={<Consultation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Route>
          
          <Route element={<BlankLayout />}>
            <Route path="/compliance-fix" element={<ComplianceFix />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
