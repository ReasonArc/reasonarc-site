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
            <span className="block">Accelerate Business Growth with</span>
            <span className="gradient-text">
              AI That Works for You
            </span>
          </h1>

          <p className="hero-description">
            We build custom AI automations — support bots, lead workflows, internal tools — and
            ship them in 2–4 weeks, built around your existing workflow. No tech stack overhauls. No experiments. Working systems.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="cta-button primary">
              <span>Book Your Free AI Consultation</span>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a href="#about" className="cta-button secondary">
              <span>Explore Our Work</span>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {[
            { value: '2-4', label: 'Weeks to First Automation' },
            { value: 'Free', label: 'Personalised Demo' },
            { value: 'Years', label: 'of Experience from Big Techs' },
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
            <p>🟢 Currently accepting 2 pilot clients — <a href="#contact" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>book your free strategy call</a></p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}