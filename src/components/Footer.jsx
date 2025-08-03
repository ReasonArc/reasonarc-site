import React from 'react';
import './Footer.css';
const logoWithName = '/assets/static/LogoWithName.png';

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
        <div className="footer-content">
          {/* Logo */}
          <div className="footer-logo">
            <a href="/" className="block">
              <img 
                src={logoWithName} 
                alt="ReasonArc" 
                className="h-10 w-auto"
                width="200"
                height="40"
              />
            </a>
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
                        <a href={link.href} className="footer-link">
                          {link.name}
                        </a>
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

          <div className="social-links">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="social-link"
                aria-label={item.name}
              >
                <span className="sr-only">{item.name}</span>
                <span>{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}