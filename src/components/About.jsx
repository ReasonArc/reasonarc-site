import React, { useEffect } from 'react';
import { FiClock, FiDollarSign, FiTrendingUp, FiUsers, FiShield, FiZap } from 'react-icons/fi';
import './About.css';

const features = [
  {
    title: '24/7 Availability',
    description: 'Operate around the clock without breaks or downtime, ensuring your business never sleeps.',
    icon: <FiClock size={24} />
  },
  {
    title: 'Cost Efficient',
    description: 'Significantly reduce operational costs by automating routine and repetitive tasks.',
    icon: <FiDollarSign size={24} />
  },
  {
    title: 'Scalable',
    description: 'Easily scale your operations up or down based on demand without additional overhead.',
    icon: <FiTrendingUp size={24} />
  },
  {
    title: 'Data Security',
    description: 'Enterprise-grade security protocols to keep your data safe and compliant.',
    icon: <FiShield size={24} />
  },
  {
    title: 'Rapid Deployment',
    description: 'Get started quickly with our plug-and-play AI solutions tailored to your needs.',
    icon: <FiZap size={24} />
  },
  {
    title: 'Seamless Integration',
    description: 'Works seamlessly with your existing tools and workflows for maximum efficiency.',
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
            Transform Your Business with <span className="gradient-text">AI Agents</span>
          </h2>
          <div className="about-description">
            <p className="animate-on-scroll">
              AI Agents are intelligent programs that perceive, reason, and act autonomously to accomplish 
              your business goals. From customer support to process automation and lead generation, 
              our AI solutions are transforming how companies operate in the digital age.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="video-container animate-on-scroll">
            <iframe
              src="https://www.youtube.com/embed/E1E08i2UJGI"
              title="AI Agents in Action"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
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