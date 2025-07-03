import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>
            <span className="block">What Are</span>
            <span className="gradient-text">
              AI Agents?
            </span>
          </h2>
          <div className="about-description">
            <p>
              AI Agents are intelligent programs capable of perceiving, reasoning, and acting autonomously to 
              accomplish business goals. From customer support to process automation and lead generation, 
              AI agents are transforming how companies operate.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/E1E08i2UJGI"
              title="What Are AI Agents"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits of AI Agents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: '24/7 Availability',
                  description: 'Operate around the clock without breaks or downtime',
                  icon: '⏰'
                },
                {
                  title: 'Cost Efficient',
                  description: 'Reduce operational costs by automating routine tasks',
                  icon: '💰'
                },
                {
                  title: 'Scalable',
                  description: 'Handle increasing workloads without additional resources',
                  icon: '📈'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}