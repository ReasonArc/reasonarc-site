import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background pattern */}
      <div className="hero-pattern" />
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="block">Transform Your Business</span>
            <span className="gradient-text">
              with AI-Powered Solutions
            </span>
          </h1>
          
          <p className="hero-description">
            We build custom AI agents and intelligent automation solutions that help businesses 
            streamline operations, enhance decision-making, and drive sustainable growth through 
            cutting-edge artificial intelligence.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="cta-button primary">
              <span>Get Started with AI</span>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a href="#about" className="cta-button secondary">
              <span>Learn How It Works</span>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="stats-grid">
          {[
            { value: '95%', label: 'Client Satisfaction' },
            { value: '3x', label: 'Faster Deployment' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Trusted by */}
        <div className="trusted-by">
          <div className="trusted-by-content">
            <p>Trusted by innovative companies worldwide</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}