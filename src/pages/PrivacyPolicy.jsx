import { BUSINESS } from '../config';
import useReveal from '../hooks/useReveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import './Legal.css';


export default function PrivacyPolicy() {
  useReveal();
    useDocumentMeta('Privacy Policy | SKP Enterprises', 'Privacy policy for SKP Enterprises travel services.');
  return (
    <div>
      <section className="legal-hero">
        <div className="wrap">
          <span className="eyebrow reveal">Legal</span>
          <h1 className="legal-hero__title reveal">Privacy Policy</h1>
          <p className="legal-hero__updated reveal">Last updated: January {BUSINESS.year}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap legal-content reveal">
          <h2>Overview</h2>
          <p>
            {BUSINESS.name} ("we", "us", "our") arranges travel bookings and related documentation
            services, including flights, trains, buses, visa assistance, passport services and
            holiday packages. This policy explains what information we collect from you, how we
            use it, and the choices you have.
          </p>

          <h2>Information we collect</h2>
          <p>When you enquire about or book a service with us, we may collect:</p>
          <ul>
            <li>Your name, phone number and email address</li>
            <li>Travel dates, destinations and passenger details you share with us</li>
            <li>Identity and travel documents you provide for visa or passport processing</li>
            <li>Payment-related details necessary to complete a booking</li>
            <li>Messages you send us via WhatsApp, email, phone or our website form</li>
          </ul>

          <h2>How we use your information</h2>
          <p>We use the information you provide strictly to:</p>
          <ul>
            <li>Process flight, train, bus and holiday package bookings on your behalf</li>
            <li>Prepare and file visa and passport applications where requested</li>
            <li>Contact you regarding your booking, payment or travel documents</li>
            <li>Respond to enquiries you raise with us</li>
          </ul>
          <p>
            We do not sell or rent your personal information to third parties. Information is
            shared only with airlines, railways, bus operators, visa centres or government
            portals where necessary to complete the service you've requested.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain booking and document records for as long as reasonably necessary to support
            your travel, resolve disputes, and comply with applicable recordkeeping requirements.
          </p>

          <h2>Your choices</h2>
          <p>
            You may ask us to update or delete personal information we hold about you, subject to
            any documents already filed with airlines, government authorities or visa centres on
            your behalf, which we are not able to recall once submitted.
          </p>

          <h2>Communication</h2>
          <p>
            By sharing your phone number or email with us, you agree that we may contact you
            regarding your enquiry or booking via call, SMS, WhatsApp or email.
          </p>

          <h2>Contact us</h2>
          <p>
            For any questions about this policy or your information, reach us at{' '}
            <a href={BUSINESS.mailLink('Privacy Policy Query')} target="_blank" rel="noreferrer">
              {BUSINESS.email}
            </a>{' '}
            or call {BUSINESS.phoneDisplay}.
          </p>
        </div>
      </section>
    </div>
  );
}
