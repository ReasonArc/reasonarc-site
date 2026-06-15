import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';
const logoWithName = '/assets/static/LogoWithName.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/reason_arc', icon: <FiTwitter size={20} /> },
    // { name: 'GitHub', href: '#', icon: <FiGithub size={20} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/reasonarc', icon: <FiLinkedin size={20} /> },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo */}
          <div className="footer-logo">
            <Link to="/" className="block">
              <img
                src={logoWithName}
                alt="ReasonArc"
                className="h-10 w-auto"
                width="200"
                height="40"
              />
            </Link>
            <p className="mt-4 text-neutral-300 text-sm">
              Making AI accessible for every business.
            </p>
          </div>

          {/* Footer links */}
          {footerLinks.length > 0 && (
            <>
              {footerLinks.map((section) => (
                <div key={section.title} className="footer-links">
                  <h3>{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link to={link.href} className="footer-link">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} ReasonArc. All rights reserved.
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', maxWidth: '500px' }}>
            ReasonArc (sometimes searched as Reason Arc, Reason arq, Reasonarq, Reasonark, or Reason ark) provides premium AI services, products, and custom workflow solutions.
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
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}