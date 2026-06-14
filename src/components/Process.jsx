import React from 'react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Process Audit",
      description: "We map out your messiest, most expensive manual workflow on a quick 30-minute call."
    },
    {
      number: "02",
      title: "Custom Prototype",
      description: "We build a Custom Workflow Prototype around your specific use case so you see the AI working before you buy."
    },
    {
      number: "03",
      title: "Production Deployment",
      description: "We plug the automation directly into your existing software (CRM, ERP, Slack). No new tools for your team to learn."
    }
  ];

  return (
    <section className="process-section bg-slate-950 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-white">How We Deploy Automation in 2-4 Weeks</h2>
          <p className="section-subtitle text-slate-300">A seamless integration process that won't disrupt your daily operations.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-number">{step.number}</div>
              <h3 className="process-title text-white">{step.title}</h3>
              <p className="process-desc text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
