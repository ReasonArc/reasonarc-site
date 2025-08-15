import React, { useEffect } from 'react';
import { FiClock, FiDollarSign, FiTrendingUp, FiUsers, FiShield, FiZap } from 'react-icons/fi';
import './About.css';

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
    description: 'From startups to Fortune 500s, our solutions scale with your business needs without the growing pains of traditional scaling.',
    icon: <FiTrendingUp size={24} />
  },
  {
    title: 'Military-Grade Security',
    description: 'End-to-end encryption and compliance with global data protection standards keep your business-critical information secure.',
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
              In today's fast-paced digital landscape, AI isn't just an advantage—it's a necessity. 
              Our custom AI solutions transform complex business challenges into streamlined operations, 
              giving you the competitive edge to outperform competitors and delight customers at every touchpoint.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="video-container animate-on-scroll">
            <iframe
              width="914"
              height="514"
              src="https://www.youtube.com/embed/hQX_wIW9Nh0"
              title="AI is transforming the world of work, are we ready for it? | FT Working It"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
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