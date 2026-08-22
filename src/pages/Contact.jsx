import { useState } from 'react';
import { BUSINESS } from '../config';
import useReveal from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', phone: '', service: 'Flight Tickets', message: '' });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name || '(name)'}.\nPhone: ${form.phone || '(phone)'}\nInterested in: ${form.service}\nMessage: ${form.message || '—'}`;
    window.open(BUSINESS.whatsappLink(text), '_blank');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="wrap">
          <span className="eyebrow reveal">Get in touch</span>
          <h1 className="contact-hero__title reveal">Let's plan your trip.</h1>
          <p className="contact-hero__desc reveal">
            Call us any time and we are here to serve you — or mail and message us directly.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="wrap contact-grid">
          <div className="contact-cards reveal">
            <a href={BUSINESS.telLink} className="ccard">
              <span className="ccard__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span className="ccard__label">Call us</span>
              <span className="ccard__value">{BUSINESS.phoneDisplay}</span>
              <span className="ccard__hint">Tap to call →</span>
            </a>

            <a href={BUSINESS.whatsappLink()} target="_blank" rel="noreferrer" className="ccard ccard--wa">
              <span className="ccard__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
                  <path d="M12.02 2C6.5 2 2.03 6.47 2.03 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.53 22 12S17.55 2 12.02 2zm0 18.1c-1.64 0-3.16-.48-4.44-1.31l-.32-.19-3.01.79.8-2.94-.21-.3A8.08 8.08 0 0 1 3.93 12c0-4.46 3.63-8.09 8.09-8.09 4.46 0 8.08 3.63 8.08 8.09 0 4.46-3.62 8.1-8.08 8.1z"/>
                </svg>
              </span>
              <span className="ccard__label">WhatsApp</span>
              <span className="ccard__value">Chat instantly</span>
              <span className="ccard__hint">Opens a chat →</span>
            </a>

            <a href={BUSINESS.mailLink()} target="_blank" rel="noreferrer" className="ccard">
              <span className="ccard__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M4 4h16v16H4z" opacity="0"/>
                  <path d="M22 6.5 12 13 2 6.5" />
                  <rect x="2" y="4.5" width="20" height="15" rx="2" />
                </svg>
              </span>
              <span className="ccard__label">Email</span>
              <span className="ccard__value ccard__value--small">{BUSINESS.email}</span>
              <span className="ccard__hint">Opens Gmail →</span>
            </a>
          </div>

          <form className="contact-form reveal" onSubmit={sendWhatsApp}>
            <h3 className="contact-form__title">Send us your details</h3>
            <p className="contact-form__note">
              We'll open WhatsApp with your message pre-filled — just hit send there.
            </p>

            <label className="field">
              <span>Your name</span>
              <input
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder="e.g. Rohit Sharma"
                required
              />
            </label>

            <label className="field">
              <span>Phone number</span>
              <input
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                placeholder="e.g. 98765 43210"
                required
              />
            </label>

            <label className="field">
              <span>Interested in</span>
              <select value={form.service} onChange={update('service')}>
                <option>Flight Tickets</option>
                <option>Train Reservations</option>
                <option>Bus Bookings</option>
                <option>Visa Assistance</option>
                <option>Passport Services</option>
                <option>Holiday Packages</option>
                <option>Property Rental (Vaishali Nagar)</option>
                <option>Other</option>
              </select>
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell us your dates, destination or any specific requirement"
              />
            </label>

            <button type="submit" className="btn btn-primary contact-form__submit">
              Send on WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}