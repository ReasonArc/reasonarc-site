import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="mesh-bg"></div>

      <div className="container relative z-10">
        <div className="hero-content text-center">
          
          <h1 className="hero-headline">
            We build custom AI automations to <span className="gradient-text">slash manual hours</span> and protect your profit margins.
          </h1>

          <p className="hero-subheadline">
            We audit your business and deploy custom workflows that eliminate bottlenecks. Built securely by Ex-Amazon & Cisco Engineers. No tech stack overhauls. Just reliable, working systems.
          </p>

          <div className="hero-cta-group">
            <Link to="/free-automation-consultation" className="primary-button cta-main">
              Book Your Free AI Consultation
              <svg className="icon ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '8px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a href="#services" className="secondary-button cta-sub">
              Explore Our Work
            </a>
          </div>

          {/* Stats Glass Panel */}
          <div className="hero-stats glass-panel">
            <div className="stat-item">
              <span className="stat-title">2-4 Weeks</span>
              <span className="stat-label">to First Automation</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-title">Live</span>
              <span className="stat-label">Automation Mapping</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-title">Built by</span>
              <span className="stat-label">Ex-Amazon & Cisco Engineers</span>
            </div>
          </div>

          <div className="trust-banner mt-8">
            <p>🟢 Currently accepting 2 pilot clients — <Link to="/free-automation-consultation" className="trust-link">book your free strategy call</Link></p>
          </div>

        </div>
      </div>
    </section>
  );
}