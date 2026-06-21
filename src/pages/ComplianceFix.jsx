import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cal, { getCalApi } from "@calcom/embed-react";
import './ComplianceFix.css';

export default function ComplianceFix() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#0f172a" } }, // Using slate-900 for brand color
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const scrollToBooking = (e) => {
    e.preventDefault();
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="compliance-page">
      {/* Animated Mesh Background to match main site vibe */}
      <div className="mesh-bg"></div>

      <div className="compliance-container">

        {/* SECTION 1: HERO */}
        <div className="compliance-hero">
          <h1>
            <span className="gradient-text">Did Razorpay Reject</span><br />
            Your Merchant Account?
          </h1>
          <p>
            You can't collect money without mandatory legal pages. We inject the exact compliance policies your website needs so you can get approved and start processing payments without delay.
          </p>
          <div className="compliance-cta-container">
            <a href="#booking-section" className="primary-button" onClick={scrollToBooking}>
              Fix My Website &amp; Get Approved
            </a>
          </div>
        </div>

        {/* SECTION 2: THE PROBLEM */}
        <div className="compliance-section glass-panel">
          <h2>You Have a Product. You Have Customers. But You Can't Get Paid.</h2>
          <p>
            Indian payment gateways are cracking down. If your website is missing a Privacy Policy, Terms of Service, a strict Refund Policy, or proper contact details, your merchant account will be instantly rejected. You don't need a massive redesign. You just need to pass the compliance check.
          </p>
        </div>

        {/* SECTION 3: THE SNIPER SOLUTION */}
        <div className="compliance-section glass-panel">
          <h2>The Gateway Compliance Package</h2>
          <p>
            We do not sell generic templates. Our engineering team logs into your site and injects gateway-approved compliance structures.
          </p>
          <ul className="compliance-checklist">
            <li><span>✅</span> Custom Privacy Policy &amp; Terms of Service</li>
            <li><span>✅</span> Gateway-Approved Refund &amp; Cancellation Policy</li>
            <li><span>✅</span> Contact &amp; Support Structure Integration</li>
            <li><span>✅</span> SSL &amp; Basic Compliance Audit</li>
            <li style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              <span>✅</span> Plus: A free audit on automating your inbound customer support once the payments start flowing.
            </li>
          </ul>
        </div>

        {/* SECTION 4: THE GUARANTEE */}
        <div className="compliance-section glass-panel">
          <h2>Stop Waiting. Start Processing.</h2>
          <p>
            We know exactly what the underwriters look for. We fix your site, you re-submit your application, and you start collecting revenue.
          </p>
        </div>

        {/* SECTION 5: THE FINAL CTA (CAL.COM EMBED) */}
        <div id="booking-section" className="compliance-cal-container">
          <h2>Book Your 15-Minute Compliance Fix Call</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            Select a time below. We’ll review your rejected application, tell you exactly what’s missing, and deploy the fix.
          </p>

          <div className="compliance-cal-wrapper">
            <Cal
              calLink="reasonarc/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: 'month_view', theme: 'light' }}
            />
          </div>
        </div>
      </div>

      {/* Micro-Footer */}
      <footer className="compliance-footer">
        <div className="compliance-footer-links">
          <Link to="/" target="_blank" rel="noopener noreferrer" className="compliance-footer-link">
            A Service by ReasonArc Studio
          </Link>
          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="compliance-footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" target="_blank" rel="noopener noreferrer" className="compliance-footer-link">
            Terms &amp; Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
