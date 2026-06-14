import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: "AI Support Assistant",
      description: "AI assistant that answers customer queries directly from your own docs and FAQs.",
      icon: "💬"
    },
    {
      title: "Lead & Email Automation",
      description: "Lead qualification and email follow‑up workflows that run 24/7 automatically.",
      icon: "✉️"
    },
    {
      title: "Operations & Data Automation",
      description: "Workflows that automate quoting, dispatching, and invoicing so your team stops doing manual data entry.",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Examples of What We Can Build For You</h2>
          <p className="section-subtitle">Real, working systems. Not just experiments.</p>
        </div>

        <div className="services-grid">
          {services.map((svc, index) => (
            <div key={index} className="service-card glass-panel">
              <div className="service-icon">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
