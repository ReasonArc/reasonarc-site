import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import './Consultation.css';

export default function Consultation() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#0f172a" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="consultation-page bg-slate-50">
      <div className="container">
        
        <div className="consultation-header text-center">
          <h1 className="hero-headline">
            Ready to <span className="gradient-text">slash 20 hours</span> off your team's weekly workload?
          </h1>
          <p className="hero-subheadline max-w-2xl mx-auto text-slate-600">
            Schedule a free 30-minute consultation. We’ll identify one high‑impact workflow you can automate right now. No obligation.
          </p>
        </div>
        
        <div className="calendar-container">
          <div className="calendar-wrapper">
            <Cal 
              calLink="reasonarc/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: 'month_view', theme: 'light' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
