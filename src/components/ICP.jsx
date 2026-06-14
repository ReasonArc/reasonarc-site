import React from 'react';
import './ICP.css';

export default function ICP() {
  const industries = [
    {
      title: "Logistics & 3PL",
      description: "Stop manual data entry for freight tracking, dispatching, and bills of lading.",
      icon: "🚚"
    },
    {
      title: "Manufacturing & CNC",
      description: "Automate your quoting process and inventory management.",
      icon: "⚙️"
    },
    {
      title: "Real Estate & Property",
      description: "Route tenant requests and dispatch maintenance instantly.",
      icon: "🏢"
    },
    {
      title: "Home Services",
      description: "Automate customer booking, dispatching, and invoicing.",
      icon: "🔧"
    }
  ];

  return (
    <section className="icp-section bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Built for Businesses That Bleed Time on Manual Work</h2>
          <p className="section-subtitle">If your team spends hours passing spreadsheets and copying data from emails to your CRM, we can automate it.</p>
        </div>

        <div className="icp-grid">
          {industries.map((item, index) => (
            <div key={index} className="icp-card glass-panel">
              <div className="icp-icon">{item.icon}</div>
              <h3 className="icp-title">{item.title}</h3>
              <p className="icp-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
