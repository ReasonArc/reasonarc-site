import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [];

  // TODO: Add Footer links when more info is ready
  // const footerLinks = [
  //   {
  //     title: 'Product',
  //     links: [
  //       { name: 'Features', href: '#' },
  //       { name: 'Pricing', href: '#' },
  //       { name: 'Case Studies', href: '#' },
  //       { name: 'Updates', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { name: 'About Us', href: '#' },
  //       { name: 'Careers', href: '#' },
  //       { name: 'Blog', href: '#' },
  //       { name: 'Press', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { name: 'Documentation', href: '#' },
  //       { name: 'Community', href: '#' },
  //       { name: 'Status', href: '#' },
  //       { name: 'Contact Us', href: '#contact' },
  //     ],
  //   },
  // ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'GitHub', href: '#', icon: '💻' },
    { name: 'LinkedIn', href: '#', icon: '🔗' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand section */}
          <div className="footer-brand">
            <div className="footer-logo">ReasonArc</div>
            <p className="footer-tagline">
              Empowering businesses with intelligent AI solutions that drive growth and innovation.
            </p>
            <div className="social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="social-link"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <span className="social-icon">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="footer-section">
              <h3 className="footer-section-title">
                {section.title}
              </h3>
              <ul className="footer-links">
                {section.links.map((item) => (
                  <li key={item.name} className="footer-link-item">
                    <a href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} ReasonArc. All rights reserved.
          </p>
          {/* TODO: Add Privacy Policy and Terms of Service links when ready */}
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}