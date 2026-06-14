import React from 'react';
import './LegalPage.css';

export default function TermsConditions() {
  return (
    <div className="legal-page">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="legal-header">
          <h1>Terms and Conditions</h1>
          <p>Last Updated: June 2026</p>
        </div>

        <div className="legal-content">
          <p>Welcome to ReasonArc. By accessing our website (reasonarc.com) or engaging our services, you agree to comply with these Terms and Conditions.</p>

          <h2>1. Services</h2>
          <p>ReasonArc Studio provides custom AI automation consulting, pipeline development, and workflow optimization services. The specific scope, deliverables, and timelines of any project will be outlined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.</p>

          <h2>2. No Guarantee of Specific Financial Results</h2>
          <p>While our automations are designed to increase efficiency and reduce manual hours, ReasonArc does not guarantee specific financial results, revenue increases, or exact operational cost savings. Business outcomes depend on various factors beyond our control.</p>

          <h2>3. Intellectual Property</h2>
          <ul>
            <li><strong>Pre-existing Material:</strong> We retain all rights to our pre-existing proprietary code, templates, and frameworks used to build your solution.</li>
            <li><strong>Client Deliverables:</strong> Upon full payment, clients receive a license to use the custom workflows built for their business operations, as detailed in the Service Agreement.</li>
            <li><strong>Website Content:</strong> All text, branding, and materials on reasonarc.com are owned by ReasonArc and may not be reproduced without permission.</li>
          </ul>

          <h2>4. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, ReasonArc shall not be liable for any indirect, incidental, or consequential damages, including data loss, workflow interruptions, or revenue loss arising from the use of our automated pipelines. We strongly recommend clients maintain backups of all mission-critical data.</p>

          <h2>5. Third-Party APIs and Tools</h2>
          <p>Our solutions often rely on third-party software (e.g., Zapier, Make, OpenAI, n8n, CRM platforms). We are not responsible for downtime, API changes, or data breaches originating from these third-party services.</p>

          <h2>6. Governing Law</h2>
          <p>These terms are governed by the laws of the jurisdiction in which ReasonArc is officially registered. Any disputes shall be resolved in the applicable courts of that jurisdiction.</p>

          <h2>7. Modifications</h2>
          <p>We reserve the right to update these Terms at any time. Continued use of our site and services constitutes acceptance of the new Terms.</p>
        </div>
      </div>
    </div>
  );
}
