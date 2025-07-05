import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            <span>Get In Touch</span>
            <span className="contact-subtitle">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="contact-description">
            Have a project in mind or want to learn more about our AI solutions? 
            Drop us a message and we'll get back to you within 24 hours.
          </p>
          <h4 className="contact-description">**Limited Offer (Now Alive)** <span className="contact-subtitle">Free Personalised Demo</span> based on your custom requirement or idea.</h4>
        </div>

        <div className="contact-card">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="We know you are cool"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-textarea"
                    placeholder="Tell us about your need, project, hunch or idea..."
                    defaultValue={''}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="submit-button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>reasonarc@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 9953115344</p>
                  </div>
                </div>
                

                {/* TODO: Location Info removed, add it when decided */}
                {/* <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>123 AI Street, Tech City, TC 12345</p>
                  </div>
                </div> */}
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-links">
                  {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="social-link"
                      aria-label={social}
                    >
                      <span className="sr-only">{social}</span>
                      <div className="social-icon">
                        {social.charAt(0)}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
