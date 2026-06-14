import React from 'react';
import './About.css';

export default function About() {
  const features = [
    {
      title: 'Always-On Automation',
      description: 'Your automations run around the clock — answering queries, routing emails, generating reports — so your team can focus on what matters.',
      icon: '⚙️'
    },
    {
      title: 'Reduce Manual Work',
      description: 'Reclaim hours every week by automating the repetitive tasks your team does manually — data entry, email triage, report generation, and more.',
      icon: '⏳'
    },
    {
      title: 'Built by Expert Engineers',
      description: 'We bring 6+ years of tech industry engineering rigor—the same reliability used by massive enterprises, now applied to your local business.',
      icon: '💻'
    },
    {
      title: 'Security by Design',
      description: 'We follow modern security best practices in how we design, build, and deploy your AI workflows. Data stays in your tools wherever possible.',
      icon: '🔒'
    },
    {
      title: 'Rapid Implementation',
      description: 'Go from consultation to production in weeks, not months, with our streamlined deployment process.',
      icon: '⚡'
    },
    {
      title: 'Seamless Tech Stack Integration',
      description: 'Our AI solutions integrate effortlessly with your existing CRM, ERP, and business intelligence tools.',
      icon: '🔗'
    }
  ];

  return (
    <section id="about" className="about-section bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Why Choose ReasonArc</h2>
          <p className="section-subtitle">Real engineering rigor applied to your business automation.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-panel">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}