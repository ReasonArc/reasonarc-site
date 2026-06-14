import React from 'react';
import './LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: June 2026</p>
        </div>

        <div className="legal-content">
          <p>ReasonArc ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (reasonarc.com) or use our AI automation services.</p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Contact Data:</strong> Name, email address, phone number, and company name provided via our scheduling forms.</li>
            <li><strong>Usage Data:</strong> IP addresses, browser types, and interaction metrics on our website (collected via analytics tools).</li>
            <li><strong>Service Data:</strong> Information regarding your business processes shared during consultations to build custom AI workflows.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide, operate, and maintain our services.</li>
            <li>To communicate with you, including responding to inquiries and sending service updates.</li>
            <li>To analyze website usage and improve our marketing efforts.</li>
            <li><strong>We never sell your personal data to third parties.</strong></li>
          </ul>

          <h2>3. Data Security & Storage</h2>
          <p>We implement industry-standard security measures, leveraging top-tier cloud infrastructure, to protect your data. For AI automation clients, we follow the principle of least privilege, ensuring our workflows only access the data strictly necessary for automation.</p>

          <h2>4. Third-Party Services</h2>
          <p>We use third-party services (e.g., scheduling widgets, analytics). These services are governed by their own privacy policies. For our AI workflows, data processed via language models (e.g., OpenAI, Google) is handled strictly in accordance with their enterprise API privacy policies, which generally do not use API data to train public models.</p>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have the right to access, update, or delete your personal data. Contact us at contact@reasonarc.com to exercise these rights.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may update this policy periodically. Changes will be posted on this page with an updated revision date.</p>
        </div>
      </div>
    </div>
  );
}
