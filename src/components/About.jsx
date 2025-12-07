import React, { useEffect } from 'react';
import { FiClock, FiDollarSign, FiTrendingUp, FiUsers, FiShield, FiZap, FiMessageSquare, FiMail, FiBarChart2, FiCpu } from 'react-icons/fi';
import './About.css';

const services = [
  {
    title: 'AI Support Assistant',
    description: 'AI assistant that answers customer queries from your own docs and FAQs.',
    icon: <FiMessageSquare size={24} />
  },
  {
    title: 'Lead & Email Automation',
    description: 'Lead qualification and email follow‑up workflows that run automatically.',
    icon: <FiMail size={24} />
  },
  {
    title: 'Internal Tools',
    description: 'Internal tools that summarise tickets, meetings, and documents for your team.',
    icon: <FiBarChart2 size={24} />
  }
];

const features = [
  {
    title: '24/7 AI Workforce',
    description: 'Deploy tireless AI agents that work around the clock, reducing response times from hours to seconds and never taking a break.',
    icon: <FiClock size={24} />
  },
  {
    title: 'Cost Optimization',
    description: 'Cut operational costs by up to 40% by automating repetitive tasks and reducing human error in data processing.',
    icon: <FiDollarSign size={24} />
  },
  {
    title: 'Enterprise Scalability',
    description: 'Solutions designed by engineers from companies like Amazon and Cisco, with experience building distributed, scalable systems.',
    icon: <FiTrendingUp size={24} />
  },
  {
    title: 'Security by Design',
    description: 'We follow modern security best practices in how we design, build, and deploy your AI workflows. Data stays in your tools wherever possible, and we minimise what is stored or logged.',
    icon: <FiShield size={24} />
  },
  {
    title: 'Rapid Implementation',
    description: 'Go from consultation to production in weeks, not months, with our streamlined deployment process.',
    icon: <FiZap size={24} />
  },
  {
    title: 'Seamless Tech Stack Integration',
    description: 'Our AI solutions integrate effortlessly with your existing CRM, ERP, and business intelligence tools.',
    icon: <FiUsers size={24} />
  }
];

export default function About() {
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="animate-on-scroll">
            The Future of Business is <span className="gradient-text">AI-Powered</span>
          </h2>
          <div className="about-description">
            <p className="animate-on-scroll">
              In today's digital landscape, the fastest-growing businesses are the ones that turn AI into real, working automations—not just experiments.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="services-section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '0.5rem', width: '100%' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-gray-900)' }}>Examples of What We Can Build For You</h3>
          </div>
          <div className="services-grid animate-on-scroll">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="features-section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '0.5rem', marginTop: '2rem', width: '100%' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-gray-900)' }}>Why Choose Reasonarc</h3>
          </div>

          <div className="features-grid animate-on-scroll">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}