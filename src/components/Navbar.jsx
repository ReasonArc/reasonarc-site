import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: 'home', isHash: true },
    { name: 'About', href: 'about', isHash: true },
    { name: 'Contact', href: '/free-automation-consultation', isHash: false },
  ];

  const handleHashClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + targetId;
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '/#' + targetId);
      }, 50);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <img 
                src="/assets/static/LogoWithName.png" 
                alt="ReasonArc" 
                className="logo-image"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              item.isHash ? (
                <a
                  key={item.name}
                  href={`/#${item.href}`}
                  className={`nav-link ${scrolled ? 'scrolled' : ''}`}
                  onClick={(e) => handleHashClick(e, item.href)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${scrolled ? 'scrolled' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-cta">
            <Link
              to="/free-automation-consultation"
              className="cta-button"
            >
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className={`menu-icon ${scrolled ? 'scrolled' : ''}`} />
            ) : (
              <FiMenu className={`menu-icon ${scrolled ? 'scrolled' : ''}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            item.isHash ? (
              <a
                key={item.name}
                href={`/#${item.href}`}
                className="mobile-nav-link"
                onClick={(e) => handleHashClick(e, item.href)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link
            to="/free-automation-consultation"
            className="mobile-cta-button"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}