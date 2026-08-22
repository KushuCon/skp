import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config';
import useReveal from '../hooks/useReveal';
import trainImg from '../assets/train.webp';
import './Home.css';
import useDocumentMeta from '../hooks/useDocumentMeta';

const SERVICES = [
  {
    code: 'FL',
    title: 'Flight Tickets',
    desc: 'Domestic and international bookings across all major airlines, with fare comparisons and reschedule support.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
  },
  {
    code: 'TR',
    title: 'Train Reservations',
    desc: 'Tatkal, general and Rajdhani/Shatabdi bookings handled end to end — including waitlist tracking.',
    img: trainImg,
  },
  {
    code: 'BS',
    title: 'Bus Bookings',
    desc: 'AC, sleeper and Volvo bus tickets for intercity and interstate routes at the best available fares.',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
  },
  {
    code: 'VS',
    title: 'Visa Assistance',
    desc: 'Documentation, application filing and appointment scheduling for tourist, business and work visas.',
    img: 'https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=800&auto=format&fit=crop',
  },
  {
    code: 'PP',
    title: 'Passport Services',
    desc: 'New passport applications, renewals and correction filing, with document checklists sorted for you.',
    img: 'https://images.unsplash.com/photo-1554224311-beee415c201f?q=80&w=800&auto=format&fit=crop',
  },
  {
    code: 'HP',
    title: 'Holiday Packages',
    desc: 'Custom and fixed-departure packages for domestic and international destinations, family or solo.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
  },
];

const DESTINATIONS = [
  { name: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=700&auto=format&fit=crop' },
  { name: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=700&auto=format&fit=crop' },
  { name: 'Manali, India', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=700&auto=format&fit=crop' },
  { name: 'Singapore', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=700&auto=format&fit=crop' },
  { name: 'Kerala Backwaters', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=700&auto=format&fit=crop' },
  { name: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=700&auto=format&fit=crop' },
];

const STATS = [
  { value: BUSINESS.yearsExperience, label: 'Years of experience' },
  { value: BUSINESS.clientsServed, label: 'Clients served' },
  { value: '24×7', label: 'Support, always reachable' },
  { value: '10%+', label: 'Extra off for repeat clients' },
];

const STEPS = [
  { title: 'Tell us your plan', desc: 'Call, WhatsApp or walk in — share your dates, destination and budget.' },
  { title: 'We compare and quote', desc: 'We check fares and options across sources and send you the clearest choice.' },
  { title: 'You confirm, we book', desc: 'Once you approve, we handle the booking, payment and confirmations.' },
  { title: 'Travel, with support on call', desc: 'Documents in hand, and we stay reachable before and during your trip.' },
];

export default function Home() {
  useReveal();
  useDocumentMeta(
    'SKP Enterprises — Flights, Trains, Visa, Passport & Holiday Packages | Jaipur',
    'SKP Enterprises, Jaipur — flights, train reservations, bus bookings, visa assistance, passport services and holiday packages. 15+ years experience, 225+ clients served.'
  );
  return (
    <>
      <Hero />

      <section className="stats-strip">
        <div className="wrap stats-strip__row">
          {STATS.map((s, i) => (
            <div className="stat reveal" key={s.label} style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <PropertyAd />

      <section className="section section--services">
        <div className="wrap">
          <span className="eyebrow reveal">What we handle</span>
          <h2 className="section__title reveal">Every travel document,<br />one desk.</h2>
          <p className="section__lead reveal">
            From a same-day bus ticket to a first-time passport application — {BUSINESS.name}
            {' '}has been arranging journeys, papers and getaways under one roof.
          </p>

          <div className="ticket-grid">
            {SERVICES.map((s, i) => (
              <article className="ticket reveal" key={s.code} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="ticket__img" style={{ backgroundImage: `url(${s.img})` }} />
                <div className="ticket__body">
                  <div className="ticket__row">
                    <span className="ticket__code">{s.code}</span>
                    <h3 className="ticket__title">{s.title}</h3>
                  </div>
                  <p className="ticket__desc">{s.desc}</p>
                </div>
                <div className="ticket__notch ticket__notch--l" />
                <div className="ticket__notch ticket__notch--r" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--how">
        <div className="wrap">
          <span className="eyebrow reveal">How it works</span>
          <h2 className="section__title reveal">Simple, from enquiry to landing.</h2>

          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step reveal" key={s.title} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dest">
        <div className="wrap">
          <span className="eyebrow reveal">Popular right now</span>
          <h2 className="section__title reveal">Where our travellers are headed.</h2>

          <div className="dest-row">
            {DESTINATIONS.map((d, i) => (
              <div className="dest reveal" key={d.name} style={{ transitionDelay: `${i * 70}ms` }}>
                <img src={d.img} alt={d.name} loading="lazy" />
                <span className="dest__name">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="wrap cta__inner reveal">
          <h2 className="cta__title">Have dates in mind?</h2>
          <p className="cta__desc">Send us your travel plan on WhatsApp and get a fare quote back the same day.</p>
          <div className="cta__actions">
            <a href={BUSINESS.whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-primary">
              Message on WhatsApp
            </a>
            <a href={BUSINESS.telLink} className="btn btn-dark">Call us anytime</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Hero() {
  useEffect(() => {
    document.body.classList.add('has-hero');
    return () => document.body.classList.remove('has-hero');
  }, []);

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__route" aria-hidden="true">
        <svg viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path id="hero-route-path" d="M -20,230 C 200,80 500,280 1020,60" />
        </svg>
        <div className="hero__plane">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      </div>

      <div className="wrap hero__inner">
        <span className="eyebrow hero__eyebrow">{BUSINESS.name} · Since day one, door to door</span>
        <h1 className="hero__title">
          Your journey,<br />booked and sorted<span className="hero__dot">.</span>
        </h1>
        <p className="hero__desc">
          Flights, trains, buses, visa, passport and holiday packages — planned by
          a real person who picks up the phone, not a form that goes nowhere.
        </p>
        <div className="hero__actions">
          <a href={BUSINESS.whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-primary">
            Plan on WhatsApp
          </a>
          <Link to="/services" className="btn btn-ghost">See all services</Link>
        </div>

        <div className="hero__stub">
          <div className="hero__stub-cell">
            <span className="hero__stub-label">Passenger</span>
            <span className="hero__stub-strong">You</span>
          </div>
          <div className="hero__stub-cell">
            <span className="hero__stub-label">Destination</span>
            <span className="hero__stub-strong">Anywhere</span>
          </div>
          <div className="hero__stub-cell">
            <span className="hero__stub-label">Status</span>
            <span className="hero__stub-strong hero__stub-confirmed">Confirmed</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyAd() {
  return (
    <section className="section section--property">
      <div className="wrap">
                <div className="property-ad reveal">
          <div className="property-ad__body">
            <div className="property-ad__banner">To Let</div>
            <span className="eyebrow">Also from {BUSINESS.name}</span>
            <h3 className="property-ad__title">Property available for rent — Vaishali Nagar, Jaipur</h3>
            <p className="property-ad__desc">
              Near Amrapali Circle and National Handloom. Double basement, ground floor,
              first floor and terrace.
            </p>
            <ul className="property-ad__list">
              <li>Double basement</li>
              <li>Ground floor</li>
              <li>First floor</li>
              <li>Terrace</li>
            </ul>
            <a href={BUSINESS.whatsappLink('Hi, I\'m interested in the property for rent in Vaishali Nagar (near Amrapali Circle / National Handloom).')}
               target="_blank" rel="noreferrer" className="btn btn-primary property-ad__cta">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
