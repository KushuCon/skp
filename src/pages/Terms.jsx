import { BUSINESS } from '../config';
import useReveal from '../hooks/useReveal';
import useDocumentMeta from '../hooks/useDocumentMeta';
import './Legal.css';

export default function Terms() {
  useReveal();
    useDocumentMeta('Terms & Conditions | SKP Enterprises', 'Terms and conditions for booking travel services with SKP Enterprises.');
  return (
    <div>
      <section className="legal-hero">
        <div className="wrap">
          <span className="eyebrow reveal">Legal</span>
          <h1 className="legal-hero__title reveal">Terms &amp; Conditions</h1>
          <p className="legal-hero__updated reveal">Last updated: January {BUSINESS.year}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap legal-content reveal">
          <h2>Agreement</h2>
          <p>
            These terms govern your use of {BUSINESS.name}'s services, including flight, train
            and bus ticketing, visa assistance, passport services and holiday packages. By
            engaging our services, you agree to the terms below.
          </p>

          <h2>Bookings and payments</h2>
          <ul>
            <li>Bookings are confirmed only once full or partial payment (as applicable) is received and the ticket, reservation or application is issued.</li>
            <li>Fares, visa fees and package prices are subject to change by airlines, railways, bus operators, embassies or hotels until the booking is confirmed.</li>
            <li>We are not liable for price changes that occur before payment is completed.</li>
          </ul>

          <h2>Cancellations and refunds</h2>
          <ul>
            <li>Cancellation and refund rules are set by the respective airline, railway, bus operator, hotel or visa authority, not by {BUSINESS.name}.</li>
            <li>Our service charges, where applicable, are non-refundable once a booking or application has been processed.</li>
            <li>Refund timelines depend on the concerned service provider and may take several weeks.</li>
          </ul>

          <h2>Visa and passport services</h2>
          <ul>
            <li>We assist with documentation, form filling and appointment scheduling. Approval of visa or passport applications rests solely with the relevant government authority or embassy.</li>
            <li>We are not responsible for application rejection, delays, or additional documentation demanded by an embassy or passport office.</li>
            <li>Applicants are responsible for providing accurate and genuine documents.</li>
          </ul>

          <h2>Holiday packages</h2>
          <ul>
            <li>Package inclusions, itineraries and pricing are shared in writing before confirmation.</li>
            <li>Any changes to hotels, transport or itinerary due to circumstances beyond our control (weather, strikes, government restrictions) will be communicated as early as possible.</li>
          </ul>

          <h2>Client responsibilities</h2>
          <p>
            You are responsible for ensuring the accuracy of names, dates and personal details
            provided at the time of booking, as most airlines, railways and authorities charge
            correction fees or disallow changes after issuance.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            {BUSINESS.name} acts as a booking and facilitation agent. We are not liable for
            losses arising from flight delays, cancellations by third-party operators, embassy
            decisions, natural events, or circumstances outside our reasonable control.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of India, and any disputes shall be subject to
            the jurisdiction of the courts in Jaipur, Rajasthan.
          </p>

          <h2>Contact us</h2>
          <p>
            For any questions about these terms, reach us at{' '}
            <a href={BUSINESS.mailLink('Terms & Conditions Query')} target="_blank" rel="noreferrer">
              {BUSINESS.email}
            </a>{' '}
            or call {BUSINESS.phoneDisplay}.
          </p>
        </div>
      </section>
    </div>
  );
}
