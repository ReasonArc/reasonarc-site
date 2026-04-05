import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

const countryCodes = [
  { code: '+1', country: 'US' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'IN' },
  { code: '+61', country: 'AU' },
  { code: '+86', country: 'CN' },
  { code: '+81', country: 'JP' },
  { code: '+49', country: 'DE' },
  { code: '+33', country: 'FR' },
  { code: '+971', country: 'AE' },
];

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      phone: `${form.current.countryCode.value} ${form.current.phone.value}`,
      message: form.current.message.value,
      title: 'New Inquiry from ReasonArc Website',
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
          console.error('FAILED...', error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            <span>Ready to Transform Your Business with AI?</span>
            <span className="contact-subtitle">
              Let's Discuss Your AI Strategy
            </span>
          </h2>
          <p className="contact-description">
            Schedule a free 30-minute consultation with our AI experts. We'll analyze your business needs and
            outline a customized AI strategy to drive measurable results—with no obligation and no pressure.
          </p>
          <p className="contact-description" style={{ marginTop: '1rem', fontWeight: '500' }}>
            In this call, we’ll identify one high‑impact workflow you can automate in the next 2–4 weeks.
          </p>
          <div className="limited-offer-banner">
            <h4 className="contact-description">
              <span className="offer-highlight">Limited Availability</span>{' '}
              <span className="contact-subtitle">Free Personalised Demo</span>
              {' '}&mdash; a small working prototype tailored to your business or idea, built around your specific use case.
            </h4>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-control"
                      placeholder="Your name"
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
                      className="form-control"
                      placeholder="Your business email"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="phone" className="form-label">
                      Phone Number (Optional)
                    </label>
                    <div className="phone-input-group">
                      <select
                        name="countryCode"
                        className="form-control country-select"
                        defaultValue="+91"
                      >
                        {countryCodes.map((cc) => (
                          <option key={cc.country} value={cc.code}>
                            {cc.country} ({cc.code})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control phone-input"
                        placeholder="12345 67890"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-control"
                    placeholder="Briefly describe your biggest business challenge or opportunity or whatever you wanna reach us for..."
                    defaultValue={''}
                  />
                </div>

                <div className="form-group full-width" style={{ textAlign: 'right' }}>
                  <button
                    type="submit"
                    className="btn-submit"
                  >
                    {loading ? 'Sending...' : 'Get Free AI Consultation'}
                    {!loading && (
                      <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: 'white' }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                  {status.message && (
                    <div
                      style={{
                        marginTop: '1rem',
                        padding: '10px',
                        borderRadius: '4px',
                        backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                        color: status.type === 'success' ? '#155724' : '#721c24',
                        textAlign: 'center',
                      }}
                    >
                      {status.message}
                    </div>
                  )}
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
                    <h4>Expert AI Consultation</h4>
                    <p>contact@reasonarc.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Direct Support</h4>
                    <p>+91 9953115344 (Mon-Fri, 10AM-8PM IST)</p>
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
                  {[
                    { name: 'X (Twitter)', icon: <FaXTwitter />, url: 'https://x.com/reason_arc' },
                    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/reasonarc/' }
                    // { name: 'GitHub', icon: <FaGithub />, url: '#' },
                    // { name: 'Instagram', icon: <FaInstagram />, url: '#' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="social-link"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="social-icon">
                        {social.icon}
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
